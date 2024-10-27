using System.Collections.Generic;
using UnityEngine;

public class BlockBoard : MonoHandler
{
  
    [SerializeField]
    private SpriteRenderer block;
    [SerializeField]
    private SpriteRenderer blockHightLight;
    [SerializeField] 
    private SpriteRenderer emptyBlock;
    public SpriteRenderer gemSR;
    [SerializeField]
    private List<BlockBoard> blocksBoardCross1 = new List<BlockBoard>();
    [SerializeField]
    private List<BlockBoard> blocksBoardCross2 = new List<BlockBoard>();

    private List<BlockBoard> blocksDestroy = new List<BlockBoard>();

    [SerializeField] private int inactiveSortOrder = 2;
    [SerializeField] private int activeSortOrder = 5;
    

    public BlockObj BlockObj { get; set; }
    public bool CanPlace => !block.gameObject.activeInHierarchy;
    public bool HighLight => blockHightLight.gameObject.activeInHierarchy;

    public BombItem BombItem { get; set; }

    public int blockIndex = 0;

    public BlockColor color;
    public BlockGemColor gemColor = BlockGemColor.Empty;

    public int x;

    public int y;

    private SpriteRenderer blockEmpty;

    public void SetBlockImage(Sprite image)
    {
        block.sprite = image;
    }

    public void SetBlockGem(BlockGemColor gemCol)
    {
        gemColor = gemCol;

        if (gemCol != BlockGemColor.Empty)
        {
            gemSR.gameObject.SetActive(true);
            gemColor = gemCol;
            gemSR.sprite = SpriteManager.Instance.GetGemSpriteByColor(gemCol);
        }
        else
        {
            gemSR.gameObject.SetActive(false);
        }

    }

    public void SetLayer(bool tutorial)
    {
        int addLayer = 5;
        float blockLayer = block.sortingOrder * ((tutorial) ? 2 : (1f/2));
      //  Debug.Log(block.sortingOrder+"__" + blockLayer+"__"+ addLayer+"__"+ ((tutorial) ? addLayer : (1f / addLayer)));
        if (blockLayer < 5) blockLayer = 5;
        block.sortingOrder = Mathf.FloorToInt(blockLayer);

     
        if(blockEmpty==null)
        {
            blockEmpty = GetComponent<SpriteRenderer>();
        }

        float blockEmptyLayer = blockEmpty.sortingOrder * ((tutorial) ? addLayer : (1f / addLayer));
        if (blockEmptyLayer < 4) blockEmptyLayer = 4;
        blockEmpty.sortingOrder = Mathf.FloorToInt(blockEmptyLayer);

    }

    public void ToggleActiveBlockGFX(bool on)
    {
        Color col = on ? Color.white : Color.gray;

        //emptyBlock.color = col;
        block.color = col;
        gemSR.color = col;
    }

    public void ShowPlaceBlock(bool place)
    {

        if (place)
        {
            block.color = Color.white;
            block.sortingOrder = activeSortOrder;
        }
        else
        {
            Color color = block.color;
            color.a = .5f;
            block.color = color;
            block.sortingOrder = inactiveSortOrder;
        }
    }
    
    

    public void DestroyAnimation(bool destroy)
    {
       
        if(BombItem!=null)
        {
            BombItem.DestroyBomb(destroy);
            BombItem = null;
        }

 
        VisibleBlock(false);
       
    }
    public void VisibleBlock(bool visible)
    {

// #if UNITY_EDITOR
//         
//         if (!visible)
//             Debug.Log("[BlockBoard][VisibleBlock] " + gameObject.name + "__" + visible);
//         
// #endif
        block.gameObject.SetActive(visible);
        if (!visible)
        {
            VisibleHightLight(false);
        }
    }
    public void VisibleHightLight(bool visible)
    {
        if (visible)
        {
            if (BlockObj != null)
            {

                BlockObj.VisibleBlockDestroyLine(visible);
                if (!visible)
                {
                    BlockObj = null;
                }
            }
        }
 
 
        blockHightLight.gameObject.SetActive(visible);
    }

    public void OnBlockLand(float sortingOrderMul, bool spawnParticle, [Bridge.Ref] Vector3 particlePos)
    {
        MultiplySortingOrder(sortingOrderMul);
        if (spawnParticle)
            ParticleEffectManager.Instance.RequestParticleSystem(ParticleEffectManager.EffectType.Dust ,particlePos, Quaternion.identity);
    }
    
    public void MultiplySortingOrder(float amount)
    {
        block.sortingOrder = (int)(block.sortingOrder * amount);
        gemSR.sortingOrder = (int)(gemSR.sortingOrder * amount);
    }



    public bool  ShowBlocksCrossCanDestroy(List<BlockBoard> blocksDestroy)
    {
       
        bool fullBlock1 = FullBlockCross1();
        bool fullBlock2 = FullBlockCross2();
        for (int i = 0; i < blocksBoardCross1.Count; i++)
        {
          
            if (blocksDestroy.Contains(blocksBoardCross1[i])) continue;
            blocksBoardCross1[i].VisibleHightLight(fullBlock1);
        }

        for (int i = 0; i < blocksBoardCross2.Count; i++)
        {
 
            if (blocksDestroy.Contains(blocksBoardCross2[i])) continue;
            blocksBoardCross2[i].VisibleHightLight(fullBlock2);
        }
        return fullBlock1 || fullBlock2;
    }

    public List<BlockBoard> GetBlocksCrossDestroy()
    {
        blocksDestroy.Clear();
        bool fullBlock1 = FullBlockCross1();
        bool fullBlock2 = FullBlockCross2();
       
        if (fullBlock1) blocksDestroy.AddRange(blocksBoardCross1);

        if (fullBlock2) blocksDestroy.AddRange(blocksBoardCross2);

        return blocksDestroy;
    }

    private bool FullBlockCross1()
    {
        for (int i = 0; i < blocksBoardCross1.Count; i++)
        {
            if (blocksBoardCross1[i].CanPlace) return false;
        }
        return true;
    }

    private bool FullBlockCross2()
    {
        for (int i = 0; i < blocksBoardCross2.Count; i++)
        {
            if (blocksBoardCross2[i].CanPlace) return false;
        }
        return true;
    }

    #region EDITOR

#if UNITY_EDITOR

  
    public void LoadConnect()
    {
        Vector2 startPoint = (Vector2)transform.position;
        List<float> angleCross1 = new List<float>();
        List<float> angleCross2 = new List<float>();
        blocksBoardCross1.Clear();
        blocksBoardCross2.Clear();
        angleCross1.Clear();
        angleCross2.Clear();
        angleCross1.Add(60);
        angleCross1.Add(-120);
        angleCross2.Add(120);
        angleCross2.Add(-60);
       float range = 20;
        for (int i = 0; i < angleCross1.Count; i++)
        {


            Vector2 direction = GetDirectionVector2D(angleCross1[i]);

            RaycastHit2D[] hit2Ds = Physics2D.RaycastAll(startPoint, direction, range); // Shot ray.
            foreach (var item in hit2Ds)
            {
                BlockBoard blockBoard = item.collider.GetComponent<BlockBoard>();
                if (!blocksBoardCross1.Contains(blockBoard) && item.collider.gameObject.activeInHierarchy)
                    blocksBoardCross1.Add(item.collider.GetComponent<BlockBoard>());
            }
            Debug.DrawRay(startPoint, direction * range, Color.yellow);
        }




        for (int i = 0; i < angleCross2.Count; i++)
        {


            Vector2 direction = GetDirectionVector2D(angleCross2[i]);

            RaycastHit2D[] hit2Ds = Physics2D.RaycastAll(startPoint, direction, range); // Shot ray.
            foreach (var item in hit2Ds)
            {
                BlockBoard blockBoard = item.collider.GetComponent<BlockBoard>();
                if (!blocksBoardCross2.Contains(blockBoard) && item.collider.gameObject.activeInHierarchy)
                    blocksBoardCross2.Add(blockBoard);
            }
            Debug.DrawRay(startPoint, direction * range, Color.red);
        }
    }
    public Vector2 GetDirectionVector2D(float angle)
    {
        return new Vector2(Mathf.Cos(angle * Mathf.Deg2Rad), Mathf.Sin(angle * Mathf.Deg2Rad)).normalized;
    }

#endif
    #endregion
}
