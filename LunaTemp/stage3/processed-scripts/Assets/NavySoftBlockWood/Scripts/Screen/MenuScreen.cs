using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using System.Threading.Tasks;

public class MenuScreen : ScreenFrameWork.Screen
{
    [Space(5)]
    [SerializeField]
    private List<GameObject> boardPlaying = new List<GameObject>();

    [SerializeField]
    private List<GameObject> gameModeSelectObj = new List<GameObject>();

    [SerializeField]
    private List<GameObject> boardsSelected = new List<GameObject>();

    [SerializeField]
    private int currentMode = 0;
    [SerializeField]
    private int currentBoard = 0;

    private void Start()
    {
         
        GameManager.Instance.ReturnHome += ReturnHome;
        
        OnEventPlay();
    }

    private void  ReturnHome()
    {
        HideAllBoard();
    }

    

    private void HideAllBoard()
    {
        for (int i = 0; i < boardPlaying.Count; i++)
        {
            boardPlaying[i].SetActive(false);
        }
    }

    private void SetGameMode()
    {
        if (GameManager.Instance.GetGameMode == GameMode.HEXA)
        {
#if UNITY_EDITOR
            Debug.Log("CurrentDataGameMode " + GameManager.Instance.CurrentDataGameMode);
#endif
            return;
        }
        if (currentBoard == 0)
        {
            GameManager.Instance.SetBoardType(BoardType.Classic_8x8);
            switch (currentMode)
            {
                case 0: GameManager.Instance.CurrentDataGameMode = DataGameMode.CLASSIC_8X8; break;
                case 1: GameManager.Instance.CurrentDataGameMode = DataGameMode.TIME_8X8; break;
                case 2: GameManager.Instance.CurrentDataGameMode = DataGameMode.BOMB_8X8; break;
            }
        }
        else
        {
            GameManager.Instance.SetBoardType(BoardType.Classic_10x10);
            switch (currentMode)
            {
                case 0: GameManager.Instance.CurrentDataGameMode = DataGameMode.CLASSIC_10X10; break;
                case 1: GameManager.Instance.CurrentDataGameMode = DataGameMode.TIME_10X10; break;
                case 2: GameManager.Instance.CurrentDataGameMode = DataGameMode.BOMB_10X10; break;
            }
        }

#if UNITY_EDITOR
        Debug.Log("CurrentDataGameMode " + GameManager.Instance.CurrentDataGameMode);
#endif
    }

    public override void Show(bool back, bool immediate)
    {
        OnEventSelectBoard(currentBoard);
        OnEventSelectMode(currentMode);
        base.Show(back, immediate);
    }

    public async void OnEventPlay()
    {

        await Task.Delay(100);
        // if (GoogleMobileAdsScript.instance != null)
        // {
        //     GoogleMobileAdsScript.instance.ShowInterstitial();
        // }
        HideAllBoard();
        
        /*
        if (GameManager.Instance.GetGameMode != GameMode.HEXA && GameManager.Instance.GetGameSetting.tutorialClassic)
        {
            GameManager.Instance.SetBoardType(BoardType.Classic_8x8);
        }
        */
       
 
        boardPlaying[(int)GameManager.Instance.GetBoardType].SetActive(true);
        ScreenManager.Instance.Show("game");
        GameManager.Instance.PlayGame();

     
        
    }

    public void OnEventSelectMode(int mode)
    {
        foreach (var enumValue in Enum.GetValues(typeof(GameMode)))
        {
            if ((int)enumValue == mode)
            {
                gameModeSelectObj[currentMode].SetActive(false);
                currentMode = (int)enumValue;
                GameManager.Instance.SetGameMode((GameMode)enumValue);
                if ((GameMode)enumValue == GameMode.HEXA)
                {
                    GameManager.Instance.SetBoardType(BoardType.Hexa);
                    GameManager.Instance.CurrentDataGameMode = DataGameMode.HEXA;
                }
                else
                {

                    SetGameMode();
                   
                }
                gameModeSelectObj[currentMode].SetActive(true);
            }
        }


        SpriteManager.Instance.SetupImage();
    }


    public void OnEventSelectBoard(int board)
    {
        boardsSelected[currentBoard].SetActive(false);
        currentBoard = board;
        boardsSelected[currentBoard].SetActive(true);
        if (GameManager.Instance.GetGameMode != GameMode.HEXA)
        {
            GameManager.Instance.SetBoardType(board == 0 ? BoardType.Classic_8x8 : BoardType.Classic_10x10);
        }

        SetGameMode();
    }
}
