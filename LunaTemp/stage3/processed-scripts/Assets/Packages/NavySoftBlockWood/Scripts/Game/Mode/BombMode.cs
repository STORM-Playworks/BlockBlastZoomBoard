using System.Collections;
using System.Collections.Generic;
using System.Linq.Expressions;
using UnityEditor;
using UnityEngine;

public class BombMode : MonoBehaviour,IGameMode
{
    [SerializeField]
    private GameMode gameMode;
    [SerializeField]
    private List<GameObject> objsUsedInMode = new List<GameObject>();
    private int countStep = 0;
    [SerializeField]
    private List<BombItem> bombItems = new List<BombItem>();



    private void Start()
    {
       PlayingManager.Instance.AddGameMode(this);
    }
    private void VisibleObjs(bool visible)
    {
        for (int i = 0; i < objsUsedInMode.Count; i++)
        {
            objsUsedInMode[i].gameObject.SetActive(visible);
        }
    }

    public GameMode GetGameMode()
    {
        return gameMode;
    }
    public bool NextPiece()
    {
        if (GameManager.Instance.GetGameSetting.tutorialClassic)
            return false;
        return true;
    }
    public void Setup()
    {
        
        ReturnHome();
        VisibleObjs(true);
        Timer.Schedule(this, 0.02f, () => {

            //Resume Mode
            DataMode dataMode = GameManager.Instance.GetCurrentDataMode;
            for (int i = 0; i < dataMode.bombDetails.Count; i++)
            {
                BombItem bomb = EffectManager.Instance.RegisterBombItem();
                BlockBoard blockBoard = PlayingManager.Instance.GetCurrentBoard.VisibleBlock(dataMode.bombDetails[i].bombIndex, true);
                blockBoard.BombItem = bomb;
                bomb.transform.position = blockBoard.transform.position;
                bomb.Setup(blockBoard, dataMode.bombDetails[i].stepBomb, dataMode.bombDetails[i]);
                bomb.name = blockBoard.name;
                bombItems.Add(bomb);
            }
        });
     
    }
    public void ActionDestroyBlock() { }
    public void ActionPlacePiece()
    {
        if (GameManager.Instance.GetGameSetting.tutorialClassic) return;
        countStep++;
        for (int i = 0; i < bombItems.Count; i++)
        {
            if (!bombItems[i].gameObject.activeInHierarchy)
            {
                bombItems.RemoveAt(i);
                i--;
                continue;
            }
            if (i <= GameManager.Instance.GetCurrentDataMode.bombDetails.Count - 1)
            {
                GameManager.Instance.GetCurrentDataMode.bombDetails[i].stepBomb--;
            }
            bombItems[i].UpdateStepBomb(1);
        }
        if(countStep >= GameManager.MAX_STEP_SHOW_BOMB)
        {
            Timer.Schedule(this, 0.06f, () => {

                //rnd block in board
                BombDetail bombDetail = new BombDetail();
                
                List<BlockBoard> blocksChild = PlayingManager.Instance.GetCurrentBoard.BlocksHasChild();
                BlockBoard blockBoard = blocksChild[Random.Range(0, blocksChild.Count - 1)];
                BombItem bomb = EffectManager.Instance.RegisterBombItem();
                bomb.transform.position = blockBoard.transform.position;
                bomb.name = blockBoard.name;
                blockBoard.BombItem = bomb;
                bomb.Setup(blockBoard,GameManager.MAX_STEPS_BOMB_ITEM, bombDetail);
                bombItems.Add(bomb);
                countStep = 0;
                bombDetail.bombIndex = blockBoard.blockIndex;
                bombDetail.stepBomb = GameManager.MAX_STEPS_BOMB_ITEM;
                GameManager.Instance.GetCurrentDataMode.bombDetails.Add(bombDetail);
            });
         
        }
        GameManager.Instance.GetCurrentDataMode.stepBomb = countStep;
        //GameManager.Instance.SaveDataMode();
    }
    public void ReturnHome() {


        VisibleObjs(false);
        for (int i = 0; i < bombItems.Count; i++)
        {
            bombItems[i].gameObject.SetActive(false);
        }
        bombItems.Clear();

    }
    public void Reset()
    {
        countStep = 0;
      
        for (int i = 0; i < bombItems.Count; i++)
        {
            bombItems[i].gameObject.SetActive(false);
        }
        bombItems.Clear();
        //Clear Bomb Data
      
        GameManager.Instance.GetCurrentDataMode.bombDetails.Clear();
        //Save
        //GameManager.Instance.SaveDataMode();
    }
}
