using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
[System.Serializable]
 public class PieceShape
{
    public int[] shapes = new int[5];
}
public class Piece : MonoHandler
{
    [SerializeField] 
    private float blockScale = 0.73f;
    [SerializeField]
    private int pieceID = 0;
    [SerializeField]
    private PieceShape[] pieceShapes = new PieceShape[5];
    [SerializeField]
    private List<BlockObj> blockObjs = new List<BlockObj>();
    [SerializeField]
    private List<BlockBoard> blocksOnBoard = new List<BlockBoard>();
    [SerializeField]
    private List<BlockBoard> blocksOnBoardHightLight = new List<BlockBoard>();
    [SerializeField]
    private List<float> dstList = new List<float>();

    [SerializeField] 
    private BlockColor color;

    [SerializeField]
    private bool hexaBlock = false;

    private float originScale;

    public bool IsUpdate { get; set; }


    public Piece pieceCheckPlaceBoard;

    public bool isClone = false;

    private Collider col;

    public bool CanPlacePiece { get; set; }

    public bool CanSeleted;// { get; set; }

    public int PieceIndex { get; set; }

    public Vector3 possiblePlacementPos;

    public int Score => blocksOnBoard.Count * GameManager.Instance.SCORE_ONE_BLOCK;

    public List<BlockObj> GetBlockObjs => blockObjs;
    private bool setupColor = false;

    public int GetPieceID => pieceID;
    #region Unity Method
    private void Update()
    {
       
        if (!IsUpdate) return;

        //Off HightLight

        for (int i = 0; i < blocksOnBoardHightLight.Count; i++)
        {
            blocksOnBoardHightLight[i].VisibleHightLight(false);
        }
       
        blocksOnBoardHightLight.Clear();
        for (int i = 0; i < blocksOnBoard.Count; i++)
        {
            blockObjs[i].VisibleBlockDestroyLine(false);
          
            blocksOnBoard[i].VisibleBlock(false);
            blocksOnBoard[i].ShowBlocksCrossCanDestroy(blocksOnBoardHightLight);
            PlayingManager.Instance.gridInGame[blocksOnBoard[i].x, blocksOnBoard[i].y] = null;
        }
        blocksOnBoard.Clear();
        CanPlacePiece = false;
        dstList.Clear();
        //Check Block On Board Can Place
        for (int i = 0; i < blockObjs.Count; i++)
        {
            for (int j = 0; j < PlayingManager.Instance.GetCurrentBoard.GetBlocks.Count; j++)
            {
                BlockBoard blockBoard = PlayingManager.Instance.GetCurrentBoard.GetBlocks[j];
                if (!blockBoard.CanPlace) continue;
                Vector3 blockPos = blockObjs[i].transform.position;
                Vector3 boardBlockPos = blockBoard.transform.position;
                blockPos.z = 0;
                boardBlockPos.z = 0;
                float dst = Vector3.Distance(blockPos, boardBlockPos);
                if (dst > .35f) continue;
                if (dst <= .35f)
                {
                    blockBoard.BlockObj = blockObjs[i];
                    blocksOnBoard.Add(blockBoard);

                }
            }
        }


       
        if (blocksOnBoard.Count == blockObjs.Count)
        {

            
            if(GameManager.Instance.TutorialMode)
            {
                if (!TutorialManager.Instance.CurrentTutorialBoardData.CanPlacePiece(blocksOnBoard))
                {
                    CanPlacePiece = false;
                    return;
                }
            }

            for (int i = 0; i < blocksOnBoard.Count; i++)
            {

                blocksOnBoard[i].VisibleBlock(true);
                blocksOnBoard[i].SetBlockImage(SpriteManager.Instance.GetSpriteByColor(color));
                blocksOnBoard[i].ShowPlaceBlock(false);
                PlayingManager.Instance.gridInGame[blocksOnBoard[i].x, blocksOnBoard[i].y] = blocksOnBoard[i];
                FullBlockY(blocksOnBoard[i]);
              

                if (GameManager.Instance.GetBoardType == BoardType.Hexa)
                {
                     
                    bool visible =  blocksOnBoard[i].ShowBlocksCrossCanDestroy(blocksOnBoardHightLight);
                   // blockObjs[i].VisibleBlockDestroyLine(visible);
                }
                else
                {
                    FullBlockX(blocksOnBoard[i]);
                   



                }

            }

            CanPlacePiece = true;
        }

    }
    #endregion
    #region Public Method
    public void Setup(bool blockVisible)
    {
        if (!setupColor)
        {
            color = GetRandomBlockColor();
            setupColor = true;
        }
        SetBlockImage(SpriteManager.Instance.GetSpriteByColor(color));
        CanSeleted = true;
        originScale = transform.localScale.x;
        blocksOnBoard.Clear();
        VisibleBlocks(blockVisible);
       // VisibleBlocks(true);
        isClone = false;
        col = GetComponent<Collider>();
        col.enabled = blockVisible;
        for (int i = 0; i < blockObjs.Count; i++)
        {
            blockObjs[i].Setup();
        }

        SetBlockScale(blockScale);
    }

    private BlockColor GetRandomBlockColor()
    {
        BlockColor[] values = (BlockColor[]) System.Enum.GetValues(typeof(BlockColor));
        
        // Filter out the unwanted values
        BlockColor[] filteredValues = values.Where(val => val != BlockColor.White && val != BlockColor.Brown && val != BlockColor.Empty).ToArray();
        
        int randomIndex = Random.Range(0, filteredValues.Length);
        
        return filteredValues[randomIndex];
    }
    
    public void SetupPieceClone(Piece pieceClone)
    {
        pieceCheckPlaceBoard = pieceClone;
        pieceCheckPlaceBoard.transform.localScale = Vector3.one;
#if UNITY_EDITOR
        pieceCheckPlaceBoard.name += "_Clone";
#endif
        isClone = true;
    
    }

    public void SetSelectPosition(Vector3 position)
    {
        if (!CanSeleted) return;
        position.y += 3;
        transform.position = position;
    }
    public void SetSelected(bool selected)
    {
        if (!CanSeleted) return;

        //float scale = PlayingManager.Instance.GetCurrentBoard.GetBlockScale / transform.localScale.x;
        //scale = scale * ((GameManager.Instance.GetGameMode == GameMode.HEXA) ? .82f : .98f);
        Vector3 worldScale = GetWorldScale(transform);
        float scale = 1f / worldScale.x;
        LeanTween.scale(gameObject, Vector3.one *( (selected) ? originScale * scale : originScale), .1f);
        for (int i = 0; i < blockObjs.Count; i++)
        {
            blockObjs[i].SetSelected(selected);
        }
        if (!selected)
        {
            if (CanPlacePiece)
            {
                PlacePiece();
            }
            else
            {
             
                for (int i = 0; i < blocksOnBoard.Count; i++)
                {
                    blocksOnBoard[i].VisibleBlock(false);
                    PlayingManager.Instance.gridInGame[blocksOnBoard[i].x, blocksOnBoard[i].y] = null;
                }
                SoundManager.Instance.SoundPlayOneShot("block_miss");
                LeanTween.moveLocal(gameObject, Vector3.zero, .1f);
            }

        }
        IsUpdate = selected;
    }
    
    public Vector3 GetWorldScale(Transform transform)
    {
        Vector3 worldScale = transform.localScale;
        Transform parent = transform.parent;

        while (parent != null)
        {
            Vector3 parentScale = parent.localScale;
            worldScale = Vector3.Scale(worldScale, parentScale);
            parent = parent.parent;
        }

        return worldScale;
    }

 
    public IEnumerator CheckPieceCanPlaceBoard()
    {
       // Debug.Log("Check Piece Can Place " +gameObject.name);
        possiblePlacementPos = Vector3.one * 999;
       
        for (int i = 0; i < PlayingManager.Instance.GetCurrentBoard.GetBlocks.Count; i++)
        {
            BlockBoard _blockBoard = PlayingManager.Instance.GetCurrentBoard.GetBlocks[i];
            Vector3 position = _blockBoard.transform.position;
            if (GameManager.Instance.GetGameMode == GameMode.HEXA)
            {
                position.x -= -.5f;
                position.y += .2f;
            }
            pieceCheckPlaceBoard.transform.position = position;
           // yield return new WaitForSeconds(.3f);

            if (pieceCheckPlaceBoard.CanPlacePieceOnBoard())
            {
                //SetBlockImage(SpriteManager.Instance.GetBlocksShow3D[0]);
                SetBlockColor(Color.white);
                CanSeleted = true;
                possiblePlacementPos = position;
                yield break;
            }
            else
            {
                //SetBlockImage(SpriteManager.Instance.GetBlocksShow3D[1]);
                SetBlockColor(Color.gray);
                CanSeleted = false;
            }
        }


        yield break;
    }

    public bool CanPlacePieceOnBoard()
    {
        IsUpdate = false;
        blocksOnBoard.Clear();
        for (int i = 0; i < blockObjs.Count; i++)
        {
            for (int j = 0; j < PlayingManager.Instance.GetCurrentBoard.GetBlocks.Count; j++)
            {
                BlockBoard blockBoard = PlayingManager.Instance.GetCurrentBoard.GetBlocks[j];
                if (!blockBoard.CanPlace) continue;
                Vector3 blockPos = blockObjs[i].transform.position;
                Vector3 boardBlockPos = blockBoard.transform.position;
                blockPos.z = 0;
                boardBlockPos.z = 0;
                float dst = Vector3.Distance(blockPos, boardBlockPos);
                if (dst > .6f) continue;
                if (dst <= .6f)
                {
                    blocksOnBoard.Add(blockBoard);
                }
            }
        }
     

        if (blocksOnBoard.Count == blockObjs.Count)
        {
            return true;
        }

        return false;
    }

    #endregion



    private void SetBlockImage(Sprite image)
    {
        for (int i = 0; i < blockObjs.Count; i++)
        {
            blockObjs[i].SetBlockImage(image);
        }
    }

    private void SetBlockColor(Color newCol)
    {
        for (int i = 0; i < blockObjs.Count; i++)
        {
            blockObjs[i].SetBlockColor(newCol);
        }
    }

    private void SetBlockScale(float newScale)
    {
        for (int i = 0; i < blockObjs.Count; i++)
        {
            blockObjs[i].transform.localScale = Vector3.one * newScale;
        }
    }

    private void BlockPlaceEffect()
    {
        foreach (var b in blockObjs)
        {
            Vector3 oPos = b.transform.position;
            //Not sure why there's a slight offset, but since all my blocks move in intervals of 1 in world space, I'm just rounding the positions for now.
            Vector3 pos = new Vector3(Mathf.Round(oPos.x), Mathf.Round(oPos.y), oPos.z);
            
            ParticleEffectManager.Instance.
                RequestParticleSystem(ParticleEffectManager.EffectType.BlockPlace, pos, Quaternion.identity);
        }
    }
    
    private void PlacePiece()
    {
        SoundManager.Instance.SoundPlayOneShot("block_place");
        for (int i = 0; i < blocksOnBoardHightLight.Count; i++)
        {
           blocksOnBoardHightLight[i].VisibleHightLight(false);
        }
        blocksOnBoardHightLight.Clear();
        DataPlacePiece dataPlacePiece = new DataPlacePiece();
        List<int> prevblockIndex = new List<int>();
        prevblockIndex.AddRange(GameManager.Instance.GetCurrentDataMode.blocksModeIndex);
        for (int i = 0; i < blocksOnBoard.Count; i++)
        {
           
            blocksOnBoard[i].ShowPlaceBlock(true);
            PlayingManager.Instance.gridInGame[blocksOnBoard[i].x, blocksOnBoard[i].y] = blocksOnBoard[i];
            FullBlockY(blocksOnBoard[i]);
            if (GameManager.Instance.GetBoardType == BoardType.Hexa)
            {
                List<BlockBoard> blocksHexaDestroy = blocksOnBoard[i].GetBlocksCrossDestroy();

                for (int j = 0; j < blocksHexaDestroy.Count; j++)
                {
                    if (!blocksOnBoardHightLight.Contains(PlayingManager.Instance.gridInGame[blocksHexaDestroy[j].x, blocksHexaDestroy[j].y]))
                    {
                        blocksOnBoardHightLight.Add(PlayingManager.Instance.gridInGame[blocksHexaDestroy[j].x, blocksHexaDestroy[j].y]);
                    }
                }
            }
            else
            {

                FullBlockX(blocksOnBoard[i]);
            }




            if (blocksOnBoardHightLight.Count == 0)
            {
                GameManager.Instance.GetCurrentDataMode.blocksModeIndex.Add(blocksOnBoard[i].blockIndex);
            }
            dataPlacePiece.blocksHideIndex.Add(blocksOnBoard[i].blockIndex);


        }

     
        //Save Step Place Block
        for (int i = 0; i < PieceManager.Instance.GetPiecesInGame.Length; i++)
        {

            Piece piece = PieceManager.Instance.GetPiecesInGame[i];
            if (piece != null)
            {
                dataPlacePiece.pieces[i] = PieceManager.Instance.GetPiecesInGame[i].pieceID;
                
            }
            else
            {
                dataPlacePiece.pieces[i] = -1;
               
            }

        }

        if (blocksOnBoardHightLight.Count > 0)
        {
            dataPlacePiece.blocksShowIndex.Clear();
            
            dataPlacePiece.DestroyLine = true;
            dataPlacePiece.blocksShowIndex.AddRange(prevblockIndex);
        }

        GameManager.Instance.GetCurrentDataMode.AddDataPlacePiece(dataPlacePiece);
        //GameManager.Instance.SaveDataMode();



        GameManager.Instance.UpdateScore(Score);
        if (pieceCheckPlaceBoard != null)
            pieceCheckPlaceBoard.gameObject.SetActive(false);
        gameObject.SetActive(false);
        PieceManager.Instance.PlacePieceSuccess(this, blocksOnBoardHightLight.Count > 0);


        for (int i = 0; i < PieceManager.Instance.GetPiecesInGame.Length; i++)
        {

            Piece piece = PieceManager.Instance.GetPiecesInGame[i];
            if (piece != null)
            {
                GameManager.Instance.GetCurrentDataMode.piecesId[i] = PieceManager.Instance.GetPiecesInGame[i].pieceID;
            }
            else
            {
                dataPlacePiece.pieces[i] = -1;
                GameManager.Instance.GetCurrentDataMode.piecesId[i] = -1;
            }

        }



        //Destroy Block
        PlayingManager.Instance.DestroyBlock(blocksOnBoardHightLight);
       
       
         
    
        PlayingManager.Instance.LastPiece = transform;
        //check button undo
        BoosterManager.Instance.VisibleButtonUndo();
        
        BlockPlaceEffect();
    }

 
    private void VisibleBlocks(bool visible)
    {
        for (int i = 0; i < blockObjs.Count; i++)
        {
            blockObjs[i].gameObject.SetActive(visible);
        }
    }

  


   
 



    private bool FullBlockY(BlockBoard blockBoard)
    {

        for (int i = 0; i < GameManager.Instance.currentBoard; i++)
        {
          
            if (PlayingManager.Instance.gridInGame[blockBoard.x, i] == null)
            {
               //Debug.Log(string.Format("BlockY Null:{0}-{1}", blockBoard.x, i));
                return false;
            }
            if (PlayingManager.Instance.gridInGame[blockBoard.x, i].CanPlace  && PlayingManager.Instance.gridInGame[blockBoard.x, i].gameObject.activeInHierarchy)
            {
               // Debug.Log(string.Format("BlockY CanPlace:{0}-{1}", blockBoard.x, i));
                return false;
            }
        }

        for (int i = 0; i < GameManager.Instance.currentBoard; i++)
        {
            blockBoard.VisibleHightLight(true);
            PlayingManager.Instance.gridInGame[blockBoard.x, i].VisibleHightLight(true);
            if (!blocksOnBoardHightLight.Contains(PlayingManager.Instance.gridInGame[blockBoard.x, i]))
                blocksOnBoardHightLight.Add(PlayingManager.Instance.gridInGame[blockBoard.x, i]);
        }
        return true;
    }


    private bool FullBlockX(BlockBoard blockBoard)
    {
        
        for (int i = 0; i < GameManager.Instance.currentBoard; i++)
        {
          
            if (PlayingManager.Instance.gridInGame[i, blockBoard.y] == null)
            {
              //  Debug.Log(string.Format("BlockY Null:{0}-{1}", i, blockBoard.y));
                return false;
            }
            if (PlayingManager.Instance.gridInGame[i, blockBoard.y].CanPlace)
            {
             //   Debug.Log(string.Format("BlockY CanPlace:{0}-{1}", i, blockBoard.y));
                return false;
            }
        }
       
        for (int i = 0; i < GameManager.Instance.currentBoard; i++)
        {
            PlayingManager.Instance.gridInGame[i, blockBoard.y].VisibleHightLight(true);
            if(!blocksOnBoardHightLight.Contains(PlayingManager.Instance.gridInGame[i, blockBoard.y]))
            blocksOnBoardHightLight.Add(PlayingManager.Instance.gridInGame[i, blockBoard.y]);
        }
        return true;
    }


     


    #region EDITOR
#if UNITY_EDITOR
    public override void GUIEditor()
    {

        
        GUILayout.Space(5);
        GUILayout.Label("Shape Editor");
        GUILayout.BeginVertical();

        for (int x = 4; x >=0; x--)
        {
            GUILayout.BeginHorizontal();
            for (int y = 0; y < 5; y++)
            {
                GUI.color = Color.white;
                if (pieceShapes[y].shapes[x] == 1)
                {
                    GUI.color = Color.green;
                }
                if (GUILayout.Button(string.Format("{0}-{1}-{2}",x,y, pieceShapes[y].shapes[x])))
                {
                    int value = pieceShapes[y].shapes[x];
                    pieceShapes[y].shapes[x] = (value == 0) ? 1 : 0;
                }

            }
            GUILayout.EndHorizontal();
        }
       
        GUILayout.EndVertical();
        GUILayout.Space(5);
        if (GUILayout.Button("Create Block"))
        {
            LoadShape();
        }
        if (GUILayout.Button("Get Block Child"))
        {
            blockObjs.Clear();
            for (int i = 0; i < transform.childCount; i++)
            {
                blockObjs.Add(transform.GetChild(i).GetComponent <BlockObj>()) ;
            }

        }
        if (GUILayout.Button("Check Piece"))
        {
            StartCoroutine(CheckPieceCanPlaceBoard());
        }


        base.GUIEditor();
    }
  
    public void LoadShape()
    {
        for (int i = 0; i < blockObjs.Count; i++)
        {
            DestroyImmediate(blockObjs[i].gameObject);
        }
        blockObjs.Clear();


        for (int x = 4; x >= 0; x--)
        {
            for (int y = 0; y < 5; y++)
            {

                if (pieceShapes[y].shapes[x] == 1)
                {
                    BlockObj blockObj = Instantiate((!hexaBlock)? PrefabsManager.Instance.blockPrefab: PrefabsManager.Instance.blockHexaPrefab);

                    blockObj.transform.SetParent(transform, false);
                    float range = 0;
                    float dstY = 1.019f;
                    if(hexaBlock)
                    {
                        dstY = 0.921f;
                    }
                    if (hexaBlock && x % 2 == 0)
                    {
                        range = -.51f;
                       
                    }
                    int sortingOrder = 20 + x;
                    blockObj.SetSortingOrder(sortingOrder);
                     
                    blockObj.transform.position = new Vector3(-(2 - y) * 1.015f + range, x * dstY);
                    blockObj.name = string.Format("Block_{0}_{1}", y, x);
                    if (x >= 1)
                    {
                        //Remove Shadow
                        DestroyImmediate(blockObj.transform.GetChild(1).gameObject);
                    }
                    blockObjs.Add(blockObj);
                }


            }
        }


        gameObject.name = string.Format("Piece_Shape_{0}", pieceID);
    }
#endif
    #endregion
}
