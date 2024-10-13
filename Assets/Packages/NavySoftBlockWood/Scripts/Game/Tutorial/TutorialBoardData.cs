using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TutorialBoardData : MonoHandler
{
    [SerializeField]
    private BoardContainer boardTutorial;
    [SerializeField]
    private List<bool> tutorialData = new List<bool>();
    [SerializeField]
    private Transform targetHand;
    [SerializeField]
    private Transform beginHand;

    [SerializeField]
    private int[] piecesID = new int[3];

    [SerializeField]
    private List<BlockBoard> blocksBoardCanPlace = new List<BlockBoard>();

    public bool CanPlacePiece(List<BlockBoard> blockBoards)
    {

        Debug.Log(blockBoards.Count);
        for (int i = 0; i < blocksBoardCanPlace.Count; i++)
        {
           bool canPlace =   blockBoards.Find(x => x== blocksBoardCanPlace[i]);
            if (!canPlace) return false;
        }
 
        return true;
    }

    public void Setup()
    {
       
        //Reset
        for (int i = 0; i < boardTutorial.GetAllBlocks.Count; i++)
        {
            BlockBoard blockBoard = boardTutorial.GetAllBlocks[i];
            blockBoard.VisibleBlock(false);
           
            PlayingManager.Instance.gridInGame[blockBoard.x, blockBoard.y] = null;
        }

        for (int i = 0; i < blocksBoardCanPlace.Count; i++)
        {
            blocksBoardCanPlace[i].SetLayer(true);
        }

        for (int i = 0; i < tutorialData.Count; i++)
        {
            BlockBoard blockBoard = boardTutorial.GetAllBlocks[i];
            blockBoard.VisibleBlock(tutorialData[i]);
            if(tutorialData[i])
            {
                blockBoard.ShowPlaceBlock(true);
            }
            PlayingManager.Instance.gridInGame[blockBoard.x, blockBoard.y] = blockBoard;
        }
       
        TutorialManager.Instance.MoveHand(beginHand.position, targetHand.position);
        PieceManager.Instance.VisiblePiecesInGame(false);
        PieceManager.Instance.CreateNewPieces(false, piecesID);
    }


    public void EndStep()
    {
        for (int i = 0; i < blocksBoardCanPlace.Count; i++)
        {
            blocksBoardCanPlace[i].SetLayer(false);
        }
    }
   



#if UNITY_EDITOR
    public override void GUIEditor()
    {
        if (GUILayout.Button("Load Tutorial Data"))
        {
            tutorialData.Clear();
            int total = boardTutorial.GetWidth * boardTutorial.GetWidth;
            for (int i = 0; i < total; i++)
            {
                tutorialData.Add(false);
            }

        }

        if (GUILayout.Button("Show Demo"))
        {
            for (int i = 0; i < tutorialData.Count; i++)
            {
                boardTutorial.GetAllBlocks[i].VisibleBlock(tutorialData[i]);
            }

        }
        if (GUILayout.Button("Hide All"))
        {
            for (int i = 0; i < tutorialData.Count; i++)
            {
                boardTutorial.GetBlocks[i].VisibleBlock(false);
            }

        }
        
        GUILayout.Space(5);
        GUILayout.Label("Grid In Game Show");
        GUILayout.BeginVertical();
      
     
          int index = 0;
        for (int x = boardTutorial.GetWidth - 1; x >= 0; x--)
        {
            GUILayout.BeginHorizontal();
            for (int y = 0; y < boardTutorial.GetWidth; y++)
            {
                GUI.color = Color.white;
                try
                {
                    if (tutorialData[index])
                    {
                        GUI.color = Color.green;
                    }
                    else if (!boardTutorial.GetAllBlocks[index].gameObject.activeInHierarchy)
                    {
                        GUI.color = Color.red;
                    }
                    if (GUILayout.Button(boardTutorial.GetAllBlocks[index].x + "_" + boardTutorial.GetAllBlocks[index].y))
                    {
                        tutorialData[index] = !tutorialData[index];
                        for (int i = 0; i < tutorialData.Count; i++)
                        {
                            boardTutorial.GetAllBlocks[i].VisibleBlock(tutorialData[i]);
                        }
                    }
                    index++;
                }
                catch
                {
                    tutorialData.Clear();
                }
            }
            GUILayout.EndHorizontal();
        }

        GUILayout.EndVertical();


        base.GUIEditor();
    }
#endif

}
