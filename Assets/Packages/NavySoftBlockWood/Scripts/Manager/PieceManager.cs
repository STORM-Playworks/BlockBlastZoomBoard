using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using System.Linq.Expressions;
using UnityEngine;

public class PieceManager : SingletonComponent<PieceManager>
{
    [SerializeField]
    private List<Transform> pointsPlaceBlock = new List<Transform>();
    [SerializeField]
    private Transform pointsPlaceNextBlock;
    [SerializeField]
    private List<Piece> pieces = new List<Piece>();
    [SerializeField]
    private Piece[] piecesInGame = new Piece[3];
    private int totalPieceOnBoard = 3;
    private int countPieceOnBoard = 0;

    private float scaleDefault = 32;
    private List<Piece> piecesContainer = new List<Piece>();

    [SerializeField] 
    private List<int> predeterminedPieces;

    public Piece[] GetPiecesInGame => piecesInGame;
    private void Start()
    {
        GameManager.Instance.SetupPlayGame += SetupPlayGame;
        GameManager.Instance.ReturnHome += ReturnHome;
    }

    private void SetupPlayGame()
    {
        piecesContainer.Clear();
        piecesContainer.AddRange(PrefabsManager.Instance.piecesClassicPrefab);
        if (GameManager.Instance.GetBoardType == BoardType.Hexa)
        {
            piecesContainer.Clear();
            piecesContainer.AddRange(PrefabsManager.Instance.piecesHexaPrefab);
        }
        else
        {
            if (GameManager.Instance.GetGameSetting.tutorialClassic)
            {
              
                return;
            }
          
        }
 
    }
    private void ReturnHome()
    {
        VisiblePiecesInGame(false);
    }

    public void VisiblePiecesInGame(bool visible)
    {
        for (int i = 0; i < piecesInGame.Length; i++)
        {
            if (piecesInGame[i] == null) continue;
            piecesInGame[i].gameObject.SetActive(visible);
        }
    }
    public void PlacePieceSuccess(Piece piece, bool destroy = false)
    {
        PlayingManager.Instance.IsDrag = false;
        countPieceOnBoard++;
        piecesInGame[piece.PieceIndex] = null;

        if (PlayingManager.Instance.CurrentGameMode.NextPiece())
        {
            //create new piece and move to piece empty
            int start = piece.PieceIndex + 1;

            for (int i = start; i < piecesInGame.Length; i++)
            {
                piecesInGame[i].transform.SetParent(pointsPlaceBlock[i - 1], true);
                piecesInGame[i].transform.localScale = Vector3.one * scaleDefault;
                LeanTween.moveLocal(piecesInGame[i].gameObject, Vector3.zero, .06f);
                piecesInGame[i].PieceIndex = i - 1;
                piecesInGame[i - 1] = piecesInGame[i];
                piecesInGame[i] = null;
            }


            //Create  Piece And Move to Last place piece
            int rndPiece = Random.Range(0, piecesContainer.Count);
            Piece piecePrefab = piecesContainer[rndPiece];
            Piece nextPiece = RegisterPiece(piecePrefab, pointsPlaceNextBlock, false);
            Piece pieceClone = RegisterPiece(piecePrefab, null, true);

            nextPiece.SetupPieceClone(pieceClone);
            nextPiece.transform.SetParent(pointsPlaceBlock[pointsPlaceBlock.Count - 1], true);
            nextPiece.transform.localScale = Vector3.one * scaleDefault;
            nextPiece.PieceIndex = piecesInGame.Length - 1;
            LeanTween.moveLocal(nextPiece.gameObject, Vector3.zero, .1f);
            piecesInGame[piecesInGame.Length - 1] = nextPiece;

            StartCoroutine(CheckPieceCanPlaceBoard());
         
        }

        else
        {
            if (!GameManager.Instance.TutorialMode)
            {
                //when place completed 3 piece create new pieces

                if (countPieceOnBoard >= totalPieceOnBoard)
                {
                    countPieceOnBoard = 0;
                    CreateNewPieces(false, null);
                }
            }

            if (!destroy)
            {
                bool boardFull = CheckBoardFull();

                print("board full " + boardFull);
                if (boardFull)
                {
                    PlayingManager.Instance.GetCurrentBoard.NextGridSize();
                    countPieceOnBoard--;
                    PlacePieceSuccess(piece, destroy);
                }
                else
                    StartCoroutine(CheckPieceCanPlaceBoard());
            }
        }

     
    }

    private bool CheckBoardFull()
    {
        BoardContainer board = PlayingManager.Instance.GetCurrentBoard;
        int maxPieces = board.GetBlocks.Count;
        int placedPieces = 0;
        foreach (var p in board.GetBlocks)
        {
            if (!p.CanPlace)
            {
                placedPieces++;
            }
        }
        if (placedPieces >= maxPieces)
        {
            return true;
        }
        
        return false;
    }
    
    public void Undo(int[] pieces)
    {
         VisiblePiecesInGame(false);
         CreateNewPieces(false, pieces);

    }
   
    public void CheckGameOver()
    {
        
        Timer.Schedule(this, .3f, () => {

            int countPieceNull = 0;
            for (int i = 0; i < piecesInGame.Length; i++)
            {
                if (piecesInGame[i] == null)
                {
                    countPieceNull++;
                    continue;
                }
                if (piecesInGame[i].CanSeleted) return;
            }
            if (countPieceNull == piecesInGame.Length) return;
            SoundManager.Instance.SoundPlayOneShot("gameOver");
            StartCoroutine(PlayingManager.Instance.GetCurrentBoard.GameOver ());
        });
     
      
    }


   

    private Piece RegisterPiece(Piece piecePrefab,Transform placePiece,bool clone)
    {
        if(pieces.Contains(piecePrefab))
        {
            Piece piece1 = pieces.Find(x => x.GetPieceID == piecePrefab.GetPieceID);
            if(!piece1.gameObject.activeInHierarchy)
            {
                piece1.gameObject.SetActive(true);
                return piece1;
            }
        }


        Piece piece2 = Instantiate(piecePrefab);
        piece2.transform.SetParent(placePiece, true);
        piece2.transform.localPosition = Vector3.zero;
        piece2.transform.localScale  = Vector3.one*scaleDefault;
        piece2.Setup(!clone);
        piece2.gameObject.SetActive(true);
        pieces.Add(piece2);
        return piece2;
    }

    public int GetRandomPieceId() => Random.Range(0, piecesContainer.Count);
    public void CreateNewPieces(bool random, int[] piecesID)
    {
        // foreach (var p in piecesInGame)
        // {
        //     if (p != null) return;
        // }
        print("creating new pieces");
        countPieceOnBoard = 0;

        if (!random && piecesID == null)
        {
            piecesID = GetNextPiecesID();
        }

       // Debug.Log("Create New Piece");
        for (int i = 0; i < pointsPlaceBlock.Count; i++)
        {
            int rndPiece = (random) ? Random.Range(0, piecesContainer.Count) : piecesID[i];
            if (!GameManager.Instance.TutorialMode)
            {
                if (GameManager.Instance.GetCurrentDataMode.piecesId.Length == 0)
                {
                    GameManager.Instance.GetCurrentDataMode.piecesId = new int[3];
                }
                GameManager.Instance.GetCurrentDataMode.piecesId[i] = rndPiece;
            }
            if (rndPiece == -1)
            {
                countPieceOnBoard++;
                piecesInGame[i] = null;
                continue;
            }
          
            Piece piecePrefab = piecesContainer[rndPiece];
            Piece piece = RegisterPiece(piecePrefab, pointsPlaceBlock[i], false);
            piece.PieceIndex = i;
            Piece pieceClone = RegisterPiece(piecePrefab, null, true);
            piece.SetupPieceClone(pieceClone);
            piecesInGame[i] = piece;
        }
    }

    private int[] GetNextPiecesID()
    {
        int[] pieces = { 0, 0, 0 };
        for (int i = 0; i < pieces.Length; i++)
        {
            if (predeterminedPieces.Count > 0)
            {
                pieces[i] = predeterminedPieces[0];
                predeterminedPieces.RemoveAt(0);
            }
            else
            {
                pieces[i] = Random.Range(0, piecesContainer.Count);
            }
        }

        return pieces;
    }
    public IEnumerator CheckPieceCanPlaceBoard()
    {
        print("check");
        yield return new WaitForSeconds(.06f);
        for (int i = 0; i < piecesInGame.Length; i++)
        {
            if (piecesInGame[i] == null) continue;
          
            StartCoroutine(piecesInGame[i].CheckPieceCanPlaceBoard());
            yield return new WaitForSeconds(.02f);
        }
       
         CheckGameOver();
    }
}
