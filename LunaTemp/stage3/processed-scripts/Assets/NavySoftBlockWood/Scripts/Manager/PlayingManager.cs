using ScreenFrameWork;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using System.Collections;
using System;
using UnityEngine.UI;

[System.Serializable]
public enum GameState : byte
{
    NONE,
    WATING,
    PLAY,
    OTHER_SCREEN
}




public class PlayingManager : SingletonComponent<PlayingManager>
{



    public BlockBoard[,] gridInGame = null;


    [Space()]
    [Header("Show Infor When Game Playing")]

    [SerializeField]
    private GameState currentGameState = GameState.NONE;




    public bool IsDrag { get; set; }
    private Piece selectedPiece;

    [SerializeField]
    private BoardContainer boardClassic8x8;

    [SerializeField]
    private BoardContainer boardClassic10x10;

    [SerializeField]
    private BoardContainer boardHexa;

    [SerializeField]
    private BoardContainer currentBoard;


    private List<BlockBoard> blocksDestroy = new List<BlockBoard>();


    private int lengthX = 0;

    private int lengthY = 0;

    private List<IGameMode> gameModes = new List<IGameMode>();

    public BoardContainer GetCurrentBoard => currentBoard;

    public IGameMode CurrentGameMode { get; private set; }

    public int TotalBlocksDestroy { get; private set; }

    public Transform LastPiece { get;  set; }

    public bool CanClickPiece { get; set; }

    public bool IsGameOver { get; set; }

    public int TotalLineDestroy => Mathf.RoundToInt((float)PlayingManager.Instance.TotalBlocksDestroy / PlayingManager.Instance.GetCurrentBoard.GetWidth);

    [System.Serializable]
    public class BlockContainer
    {
        public List<BlockObj> blocks = new List<BlockObj>();
    }

    #region Unity Method
    private void Awake() => Application.targetFrameRate = 60;
    private void Update() => SelectedAndDragPiece();
    private void Start()
    {

        currentGameState = GameState.NONE;
        GameManager.Instance.SetupPlayGame += SetupPlayGame;
        GameManager.Instance.ReturnHome += ReturnHome;
    }




    #endregion


    #region Private Method
    private void ReturnHome()
    {
        IsDrag = false;
        CurrentGameMode.ReturnHome();
    }
    private void SetupPlayGame()
    {
        CanClickPiece = true;
        IsGameOver = true;
        lengthX = 8;
        lengthY = 8;
        currentBoard = boardClassic8x8;
        switch (GameManager.Instance.GetBoardType)
        {
            case BoardType.Classic_10x10:
                lengthX = GameManager.BOARD_10X10;
                lengthY = GameManager.BOARD_10X10;
                currentBoard = boardClassic10x10;
                break;
            case BoardType.Hexa:
                lengthX = GameManager.BOARD_HEXA;
                lengthY = GameManager.BOARD_HEXA;
                currentBoard = boardHexa;
                break;
        }
        GameManager.Instance.currentBoard = lengthX;
        gridInGame = new BlockBoard[lengthX, lengthY];
        int count = 0;
        for (int x = 0; x < lengthX; x++)
        {
            for (int y = 0; y < lengthY; y++)
            {

                gridInGame[x, y] = null;
                if (GameManager.Instance.GetBoardType == BoardType.Hexa)
                {
                    gridInGame[x, y] = (!currentBoard.GetAllBlocks[count].gameObject.activeInHierarchy) ? currentBoard.GetAllBlocks[count] : null;
                }
                count++;
            }

        }
        currentBoard.Reset();
        StartCoroutine(ResumeGame());

        IsDrag = false;
        CurrentGameMode = gameModes.Find(x => x.GetGameMode() == GameManager.Instance.GetGameMode);
        CurrentGameMode.Setup();

        SetNewPieces();



    }


    private void SetNewPieces()
    {
        if (!GameManager.Instance.TutorialMode)
        {

            // if (GameManager.Instance.GetCurrentDataMode.piecesId.Length == 0)
            // {
            //     GameManager.Instance.GetCurrentDataMode.piecesId = new int[3];
            //     for (int i = 0; i < GameManager.Instance.GetCurrentDataMode.piecesId.Length; i++)
            //     {
            //         GameManager.Instance.GetCurrentDataMode.piecesId[i] = 0;
            //     }
            // }



            PieceManager.Instance.CreateNewPieces(false, GameManager.Instance.GetCurrentDataMode.piecesId);

            StartCoroutine(PieceManager.Instance.CheckPieceCanPlaceBoard());
        }
    }

    private IEnumerator ResumeGame()
    {
        yield return new WaitForEndOfFrame();
        DataMode currentDataMode = GameManager.Instance.GetCurrentDataMode;


        for (int i = 0; i < currentDataMode.blocksModeIndex.Count; i++)
        {
            BlockBoard blockboard = currentBoard.VisibleBlock(currentDataMode.blocksModeIndex[i], true);
            gridInGame[blockboard.x, blockboard.y] = blockboard;
        }
       
    }

    private void SelectedAndDragPiece()
{
    Vector3 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);

    // Create a ray from the camera to the mouse position
    Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    RaycastHit raycastHit;
    bool useBooster = (BoosterManager.Instance.GetBoosterType != BoosterManager.BoosterType.NONE);

    if (!CanClickPiece) return;

    if (Input.GetMouseButtonDown(0))
    {
        IsDrag = true;
        if (selectedPiece != null) return;

        if (useBooster)
        {
            if (Physics.Raycast(ray, out raycastHit) && raycastHit.transform.gameObject.CompareTag("Block"))
            {
                if (BoosterManager.Instance.ActiveEffectBooster(raycastHit.collider.GetComponent<BlockBoard>()))
                {
                    BoosterManager.Instance.CompleteUsedBooster((int)BoosterManager.Instance.GetBoosterType);
                }
                return;
            }
        }

        // Raycast to find the piece under the mouse pointer
        if (Physics.Raycast(ray, out raycastHit) && raycastHit.transform.gameObject.CompareTag("Piece"))
        {
            if (useBooster)
            {
                useBooster = false;
                BoosterManager.Instance.OnEventBoosterCancel();
            }
            selectedPiece = raycastHit.collider.gameObject.GetComponent<Piece>();
            if (!selectedPiece.CanSeleted)
            {
                selectedPiece = null;
                return;
            }

            TutorialManager.Instance.Clicked(true);
            SoundManager.Instance.SoundPlayOneShot("block_selected");
            selectedPiece.SetSelected(true);
            selectedPiece.SetSelectPosition(selectedPiece.transform.position);
        }
    }

    if (IsDrag)
    {
        if (selectedPiece != null)
        {
            // Update the selected piece's position based on the mouse position
            Vector3 newPosition = new Vector3(mousePosition.x, mousePosition.y, selectedPiece.transform.position.z);
            selectedPiece.transform.position = newPosition;
            selectedPiece.SetSelectPosition(newPosition);
        }
        else
        {
            if (Physics.Raycast(ray, out raycastHit) && raycastHit.transform.gameObject.CompareTag("Piece"))
            {
                if (useBooster)
                {
                    useBooster = false;
                    BoosterManager.Instance.OnEventBoosterCancel();
                }
                selectedPiece = raycastHit.collider.gameObject.GetComponent<Piece>();
                if (!selectedPiece.CanSeleted)
                {
                    selectedPiece = null;
                    return;
                }

                SoundManager.Instance.SoundPlayOneShot("block_selected");
                selectedPiece.SetSelected(true);
                selectedPiece.SetSelectPosition(selectedPiece.transform.position);
            }
        }
    }

    if (Input.GetMouseButtonUp(0) && selectedPiece != null)
    {
        TutorialManager.Instance.Clicked(false);
        selectedPiece.SetSelected(false);
        selectedPiece = null;
        IsDrag = false;
    }
}

    #endregion

    public void AddGameMode(IGameMode gameMode)
    {
        gameModes.Add(gameMode);
    }

    public void DestroyOneBlock(BlockBoard blockDestroy)
    {
       
        if (!blockDestroy.gameObject.activeInHierarchy) return;
        EffectObj effDestroy =(GameManager.Instance.GetGameMode== GameMode.HEXA) ? EffectManager.Instance.RegisterEffectDestroyBlockHexa(): EffectManager.Instance.RegisterEffectDestroyBlock();
        blockDestroy.DestroyAnimation(false);
        effDestroy.Play();
        Vector3 position = blockDestroy.transform.position;
        position.z = -2;
        effDestroy.transform.position = blockDestroy.transform.position;
        gridInGame[blockDestroy.x, blockDestroy.y] = null;
        GameManager.Instance.UpdateScore(GameManager.Instance.SCORE_DESTROY_ONE_BLOCK);
        blocksDestroy.Add(blockDestroy);
        if (GameManager.Instance.GetGameMode == GameMode.HEXA)
        {
            SoundManager.Instance.SoundPlayOneShot("destroy_hexa");
        }
        else
        {
            SoundManager.Instance.SoundPlayOneShot("destroy_square");
        }

    }


    public void SaveNewStepWhenUseBooster()
    {

         
        DataMode currentDataMode = GameManager.Instance.GetCurrentDataMode;
        DataPlacePiece lastStep = currentDataMode.dataPlacePieces[currentDataMode.dataPlacePieces.Count - 1];
        DataPlacePiece newLasetStep = new DataPlacePiece();
        newLasetStep.blocksHideIndex.Clear();
        for (int i = 0; i < blocksDestroy.Count; i++)
        {
            if(currentDataMode.blocksModeIndex.Contains(blocksDestroy[i].blockIndex))
            {
                currentDataMode.blocksModeIndex.Remove(blocksDestroy[i].blockIndex);
                newLasetStep.blocksShowIndex.Add(blocksDestroy[i].blockIndex);
            }
        }
        currentDataMode.AddDataPlacePiece(newLasetStep);
        //GameManager.Instance.SaveDataMode();
    }





    public void DestroyBlock(List<BlockBoard> blocksDestroy, bool secondChance = false,bool updateAction  =true)
    {
        Debug.Log("Destroy Block");
        Timer.Schedule(this, 0.02f, () => {
           
            TotalBlocksDestroy = blocksDestroy.Count;
            int score = 0;
            for (int i = 0; i < blocksDestroy.Count; i++)
            {
                if (!blocksDestroy[i].gameObject.activeInHierarchy) continue;
                score++;
                EffectObj effDestroy = (GameManager.Instance.GetGameMode == GameMode.HEXA) ? EffectManager.Instance.RegisterEffectDestroyBlockHexa() : EffectManager.Instance.RegisterEffectDestroyBlock();
                blocksDestroy[i].DestroyAnimation(true);
                effDestroy.Play();
                Vector3 position = blocksDestroy[i].transform.position;
                position.z = -2;
                effDestroy.transform.position = position;
                GameManager.Instance.GetCurrentDataMode.blocksModeIndex.Remove(blocksDestroy[i].blockIndex);
                gridInGame[blocksDestroy[i].x, blocksDestroy[i].y] = null;
            }
            if (blocksDestroy.Count > 0)
            {
                if(updateAction)
                    CurrentGameMode.ActionDestroyBlock();
                if (!secondChance)
                {

                    /*
                    Rigidbody2D scoreText = EffectManager.Instance.RegisterScoreTextEffect();
                    TextMeshProUGUI text = scoreText.GetComponentInChildren<TextMeshProUGUI>();
                    Image textImage = scoreText.GetComponentInChildren<Image>();
                    print("8");
                    SpriteManager.Instance.ShowTextEffect(textImage, TotalLineDestroy - 1, LastPiece.position);
                    text.text = score.ToString();
                    scoreText.transform.position = LastPiece.position;
                    scoreText.isKinematic = false;
                    scoreText.gravityScale = 6f;
                    scoreText.AddForce(new Vector2(UnityEngine.Random.Range(-2f, 2f), UnityEngine.Random.Range(22f, 23f)), ForceMode2D.Impulse);
                    scoreText.AddTorque(UnityEngine.Random.Range(-.1f, .1f), ForceMode2D.Impulse);
                    */



                    GameManager.Instance.UpdateScore(score);
                    //show text effect
              
                }
              

                StartCoroutine(PieceManager.Instance.CheckPieceCanPlaceBoard());
            


             
                //audio
                if (GameManager.Instance.GetGameMode == GameMode.HEXA)
                {
                    SoundManager.Instance.SoundPlayOneShot("destroy_hexa");
                }
                else
                {
                    SoundManager.Instance.SoundPlayOneShot("destroy_square");
                }
            }
            if(GameManager.Instance.TutorialMode)
            {

                TutorialManager.Instance.EndStep();

            }
            Timer.Schedule(this, 1f, () =>
            {
                if (GameManager.Instance.GetBoardType == BoardType.Hexa)
                {
                    if (GameManager.Instance.GetGameSetting.tutorialHexa)
                    {
                        TutorialManager.Instance.ActiveTutorialHexa();

                    }
                }
                else
                {
                    if (GameManager.Instance.GetGameSetting.tutorialClassic)
                    {

                        TutorialManager.Instance.ActiveTutorialClassic();
                        
                    }
                }
            });
            PlayingManager.Instance.CurrentGameMode.ActionPlacePiece();
            //GameManager.Instance.SaveDataMode();
        });

          

    }

    public void DestroyBlocksFall()
    {
        List<BlockBoard> blocksDestroy = new List<BlockBoard>();
        for (int i = 0; i < currentBoard.GetWidth; i++)
        {
            int countFullBlock = 0;
            for (int j = 0; j < currentBoard.GetWidth; j++)
            {
                if (gridInGame[i, j] == null) break;
                countFullBlock++;
            }

            if(countFullBlock== currentBoard.GetWidth)
            {
                for (int j = 0; j < currentBoard.GetWidth; j++)
                {
                    blocksDestroy.Add(gridInGame[i, j]);


                }
            }
        }
        DestroyBlock(blocksDestroy,false,false);
    }

    public void DestroyBlockSecondChance()
    {
        Timer.Schedule(this, 0.4f, () => {
            IsGameOver = true;
        });
        CanClickPiece = true;
        GameManager.Instance.VisibleButton(true);
        int start = Mathf.FloorToInt( (float)lengthX / 4);
        int end = lengthX - start;

        List<BlockBoard> blocksDestroy = new List<BlockBoard>();
        for (int x = start; x < end; x++)
        {
            for (int y = 0; y < lengthY; y++)
            {
                if(gridInGame[x,y]!=null)
                {
                    blocksDestroy.Add(gridInGame[x, y]);
                }
            }
        }

        DestroyBlock(blocksDestroy, true,false);
        currentBoard.SetBlockImage(SpriteManager.Instance.GetBlockShow2D[0]);



        CurrentGameMode.Reset();
    }

    public void ClearData()
    {
        CurrentGameMode.Reset();
    }

    public bool CanUndo()
    {
        if (GameManager.Instance.GetGameSetting.tutorialClassic) return false;
        DataMode currentDataMode = GameManager.Instance.GetCurrentDataMode;
        if (currentDataMode.dataPlacePieces.Count <= 0) return false;
        return true;
    }

    public void Undo()
    {
        DataMode currentDataMode = GameManager.Instance.GetCurrentDataMode;
        DataPlacePiece lastStep = currentDataMode.dataPlacePieces[currentDataMode.dataPlacePieces.Count - 1];

        if (lastStep.DestroyLine)
        {
            currentDataMode.blocksModeIndex.Clear();

            for (int i = 0; i < lastStep.blocksHideIndex.Count; i++)
            {
                BlockBoard blockBoard = currentBoard.VisibleBlock(lastStep.blocksHideIndex[i], false);
                gridInGame[blockBoard.x, blockBoard.y] = null;
            }

            for (int i = 0; i < lastStep.blocksShowIndex.Count; i++)
            {
                BlockBoard blockBoard = currentBoard.VisibleBlock(lastStep.blocksShowIndex[i], true);
                currentDataMode.blocksModeIndex.Add(lastStep.blocksShowIndex[i]);
                gridInGame[blockBoard.x, blockBoard.y] = blockBoard;
            }
        }
        else
        {
            //Hide Block Image In Board
            for (int i = 0; i < lastStep.blocksHideIndex.Count; i++)
            {
                currentDataMode.blocksModeIndex.Remove(lastStep.blocksHideIndex[i]);
                BlockBoard blockBoard = currentBoard.VisibleBlock(lastStep.blocksHideIndex[i], false);
                gridInGame[blockBoard.x, blockBoard.y] = null;
            }
        }
        PieceManager.Instance.Undo(lastStep.pieces);


       

       //Remove last Step
       currentDataMode.dataPlacePieces.Remove(lastStep);
        //GameManager.Instance.SaveDataMode();
    }



 

#if UNITY_EDITOR
    public override void GUIEditor()
    {
        if (Application.isPlaying)
        {
            if (gridInGame == null) return;
            GUILayout.Space(5);
            GUILayout.Label("Grid In Game Show");
            GUILayout.BeginVertical();
           
                for (int x = GameManager.Instance.currentBoard - 1; x >= 0; x--)
                {
                    GUILayout.BeginHorizontal();
                    for (int y = 0; y < GameManager.Instance.currentBoard; y++)
                    {
                        GUI.color = Color.white;
                        if (gridInGame[x,y] != null)
                        {
                            GUI.color = Color.blue;
                        }
                        if (GUILayout.Button(string.Format("{0}_{1}-{2}", x, y, gridInGame[x, y] != null ? string.Format("B_{0}_{1}", gridInGame[x, y].x, gridInGame[x, y].y) : "B_NULL")))
                        {

                        }

                    }
                    GUILayout.EndHorizontal();
                }

            GUILayout.EndVertical();
        }
        base.GUIEditor();
    }
#endif
}
