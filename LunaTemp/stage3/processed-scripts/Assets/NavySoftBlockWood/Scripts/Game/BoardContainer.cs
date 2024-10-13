using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoardContainer : MonoHandler
{
    [SerializeField]
    private int width = 8;
    [SerializeField]
    private int height = 12;
    [SerializeField]
    private List<BlockBoard> blocks = new List<BlockBoard>();
    [SerializeField]
    private List<BlockBoard> allBlocksInBoard = new List<BlockBoard>();
    [SerializeField]
    private float blockScale = 0;
    [SerializeField]
    private Transform placeBlockPoint;
    [SerializeField]
    private GameObject blockPrefab;
    [SerializeField]
    private Animation shake;

   

    public int GetWidth => width;
    public List<BlockBoard> GetBlocks =>   blocks;
    public List<BlockBoard> GetAllBlocks => allBlocksInBoard;
    public float GetBlockScale => blockScale;



    private IEnumerator SetBlockScale()
    {
        yield return new WaitForSeconds(.04f);
        blockPrefab.transform.SetParent(placeBlockPoint, true);
        blockScale = blockPrefab.transform.localScale.x * transform.localScale.x;
    }



    public IEnumerator BlocksFall()
    {
        yield return new WaitForSeconds(0.4f);
        int step = 0;
        for (int i = 0; i < width ; i++)
        {
            for (int j = 0; j < width; j++)
            {
                if (!blocks[(width * j) + i].CanPlace)
                {
                    step++;

                }
                BlockBoard blockBoard = blocks[(width * j) + i];
                Debug.Log("Hide 2");
                blockBoard.VisibleBlock(false);
                PlayingManager.Instance.gridInGame[blockBoard.x, blockBoard.y] = null;
            }

            for (int h = 0; h <  step; h++)
            {
                BlockBoard blockBoard = blocks[(width * h) + i];
                blockBoard.VisibleBlock(true);
                blockBoard.ShowPlaceBlock(true);
                PlayingManager.Instance.gridInGame[blockBoard.x, blockBoard.y] = blockBoard;
                yield return new WaitForSeconds(0.01f);
            }
           
           
            step = 0;
        }

        yield return new WaitForSeconds(0.1f);

        PlayingManager.Instance.DestroyBlocksFall();
    }

    public void ShakeBoard()
    {
        if(shake!=null)
        shake.Play();
    }
    public void Reset()
    {
        StartCoroutine(SetBlockScale());

        Debug.Log("Hide 3");
        for (int i = 0; i < blocks.Count; i++)
        {
            blocks[i].VisibleBlock(false);
            
            blocks[i].VisibleHightLight(false);
            blocks[i].SetBlockImage(SpriteManager.Instance.GetBlockShow2D[0]);
        }
    }

    public List<BlockBoard> BlocksHasChild()
    {
        List<BlockBoard> blockBoards = new List<BlockBoard>();
        for (int i = 0; i < blocks.Count; i++)
        {
            if(!blocks[i].CanPlace)
            {
                blockBoards.Add(blocks[i]);
            }
        }
        return blockBoards;
    }

    public void SetBlockImage(Sprite image)
    {
        for (int i = 0; i < blocks.Count; i++)
        {
            if (blocks[i].CanPlace) continue;
            blocks[i].SetBlockImage(image);
        }
    }

    public BlockBoard VisibleBlock(int index, bool visible)
    {
      
        allBlocksInBoard[index].VisibleBlock(visible);
        if(visible)
        {
            allBlocksInBoard[index].ShowPlaceBlock(true);
        }
        else
        {
            Debug.Log("Hide 4");
        }
        return allBlocksInBoard[index];
    }

    public IEnumerator GameOver()
    {
        List<BlockBoard> temp = new List<BlockBoard>();
        temp.AddRange(blocks);
        temp.Shuffle();
        GameManager.Instance.VisibleButton(false);
        for (int i = 0; i < temp.Count; i++)
        {
            if (temp[i].CanPlace) continue;
            temp[i].SetBlockImage(SpriteManager.Instance.GetBlockShow2D[1]);
            yield return new WaitForSeconds(.02f);

        }

        Timer.Schedule(this,0.2f,()=>{

            //Show Game Over
            GameManager.Instance.GameOverProccess();
        });
      
    }
#if UNITY_EDITOR
    [Header("Editor")]
    [SerializeField]
    private bool hexaBoard;
    [SerializeField]
    private float dstXHexaMode = -.5f;
    [SerializeField]
    private List<bool> dataBlocksHexa = new List<bool>();
    [SerializeField]
    private Transform nextBlockWidth;
    [SerializeField]
    private Transform nextBlockHeight;

   
    public override void GUIEditor()
    {




        if(GUILayout.Button("Make Board"))
        {
            for (int i = 0; i < blocks.Count; i++)
            {
                DestroyImmediate( blocks[i]);
            }
            blocks.Clear();
            allBlocksInBoard.Clear();
            float xNextBlock = nextBlockWidth.position.x - blockPrefab.transform.position.x;
            float yNextBlock = nextBlockHeight.position.y - blockPrefab.transform.position.y;
            int count = 0;
            for (int i = 0; i < height; i++)
            {
                for (int j = 0; j < width; j++)
                {
                    GameObject block = Instantiate(blockPrefab, Vector3.zero, Quaternion.identity);
                    block.SetActive(true);
                    block.transform.SetParent(transform, false);
                    float range = 0;
                    if (hexaBoard && i % 2 == 0)
                    {
                        range = dstXHexaMode;
                    }
                    block.transform.position = new Vector3(blockPrefab.transform.position.x + (xNextBlock * j) + range, blockPrefab.transform.position.y + (yNextBlock * i), 0);
                    block.name = string.Format("Block_{0}_{1}", i, j);
                    block.transform.GetChild(1).GetComponent<SpriteRenderer>().sortingOrder = GetWidth + 6 - i;
                    block.GetComponent<BlockBoard>().x = i;
                    block.GetComponent<BlockBoard>().y = j;
                    block.GetComponent<BlockBoard>().blockIndex = count;
                    if (hexaBoard)
                    {
                        block.gameObject.SetActive(dataBlocksHexa[count]);
                        if (dataBlocksHexa[count])
                            blocks.Add(block.GetComponent<BlockBoard>());
                    }
                    else
                    {
                        block.gameObject.SetActive(true);
                        blocks.Add(block.GetComponent<BlockBoard>());
                    }
                    count++;
                    if (!block.gameObject.activeInHierarchy)
                        block.GetComponent<BlockBoard>().VisibleBlock(true);

                    allBlocksInBoard.Add(block.GetComponent<BlockBoard>());

                }
            }
        }
        if (GUILayout.Button("Delete Board"))
        {
           
            for (int i = 0; i < allBlocksInBoard.Count; i++)
            {
                DestroyImmediate(allBlocksInBoard[i].gameObject);
            }
            allBlocksInBoard.Clear();
        }
        if (GUILayout.Button("Load Block Connect"))
        {
          
            for (int i = 0; i < blocks.Count; i++)
            {
                blocks[i].LoadConnect();
            }

        }
        if (GUILayout.Button("Block Fall"))
        {

            StartCoroutine(BlocksFall());

        }









        base.GUIEditor();

    }
#endif
}
