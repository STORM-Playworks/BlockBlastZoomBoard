using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
using TMPro;
using PopUpFrameWork;
using UnityEngine.UI;

[System.Serializable]
public enum BoardType
{
    Classic_8x8 = 0,
    Classic_10x10,
    Hexa,
}

[System.Serializable]
public enum GameMode
{
    CLASSIC=0,
    TIME,
    BOMB,
    HEXA,
   
}

public class GameManager : SingletonComponent<GameManager>
{

    public const int BOARD_8X8 = 8;

    public const int BOARD_HEXA = 9;

    public const int BOARD_10X10 = 15;

    public const int MAX_STEP_SHOW_BOMB = 5;

    public const int MAX_STEPS_BOMB_ITEM = 9;

    public const int MAX_FILL_TIME = 10;

    public event Action SetupPlayGame;

    public event Action ReturnHome;


    public int SCORE_ONE_BLOCK = 1;

    public int SCORE_DESTROY_ONE_BLOCK = 1;

    [SerializeField]
    private TextMeshProUGUI bestScoreText;
    [SerializeField]
    private TextMeshProUGUI currentScoreText;
    [SerializeField]
    private BoardType boardType;
    [SerializeField]
    private GameMode gameMode = GameMode.CLASSIC;
    [SerializeField]
    private List<Button> buttonsInGame = new List<Button>();


    [Header("Data Board ")]
    [SerializeField]
    private DataInGame dataInGame;
    [Header("Data Setting ")]
    [SerializeField]
    private GameSetting gameSetting;
    [Header("Rate URL ")]
    [SerializeField] 
    private string rateURL = "https://www.google.com/";

    [SerializeField] 
    private GameObject retryWindow;

    private int currentScore = 0;
    private int bestScore = 0;
    private DataMode currentDataMode;
    private bool secondChance = false;
   
    #region Properties

    public int currentBoard { get; set; }
    public DataGameMode CurrentDataGameMode;//{ get; set; }
    public DataInGame GetDataInGame => dataInGame;
    public string GetRateURL=> rateURL;
    public GameSetting GetGameSetting => gameSetting;
    public DataMode GetCurrentDataMode => currentDataMode;
    public GameMode GetGameMode => gameMode;
    public bool TutorialMode { get;  set; }
    public void SetGameMode(GameMode gameMode)
    {
        this.gameMode = gameMode;
    }
    public BoardType GetBoardType => boardType;
    public void SetBoardType( BoardType boardType)
    {
        this.boardType = boardType;
    }
    #endregion

    private void Awake()
    {
        //Load Data
        LoadData();
        LoadSetting();
        gameSetting.tutorialClassic = false;
    }



    private void Start()
    {
        currentBoard = BOARD_8X8;
        Input.multiTouchEnabled = false;
    }

    private void ClearData()
    {
        PieceManager.Instance.VisiblePiecesInGame(false);
        currentDataMode.ClearData();
        //SaveDataMode();
        PlayingManager.Instance.ClearData();
    }
    public void PlayGame()
    {

        VisibleButton(true);
        currentDataMode = dataInGame.FindDataMode(CurrentDataGameMode);
        if (SetupPlayGame!=null)
        SetupPlayGame();
        currentScore = currentDataMode.currentScore;
        bestScore = currentDataMode.bestScore;
        UpdateScore(0);
        secondChance = false;

        if (GetGameMode != GameMode.HEXA )
        {
            
                TutorialMode = GetGameSetting.tutorialClassic;
                
                if (GetGameSetting.tutorialClassic)
                {
                    TutorialManager.Instance.Setup();
                    TutorialManager.Instance.ActiveTutorialClassic();
                }
             
        }
        else
        {
            TutorialMode = GetGameSetting.tutorialHexa;
            if (GetGameSetting.tutorialHexa)
            {
                TutorialManager.Instance.Setup();
                TutorialManager.Instance.ActiveTutorialHexa();
            }
        }

    }
    public void GoHome()
    {
        Debug.Log("Go Home");
        if (ReturnHome != null)
            ReturnHome();
       
    }

    /// <summary>
    /// Update Score In Game And Save Best Score
    /// </summary>
    public void UpdateScore(int score)
    {
        currentScore += score;
        //DataInGame.CurrentScore = currentScore;
        bestScore = (currentScore > bestScore) ? currentScore : bestScore;
        currentDataMode.currentScore = currentScore;
        currentDataMode.bestScore = bestScore;
        //SaveDataMode();
        bestScoreText.text = bestScore.ToString();
        currentScoreText.text = currentScore.ToString();
    }



    public void ReplayGame()
    {
        ClearData();
        PlayGame();
    }
  

    public void GameOverProccess()
    {
        retryWindow.SetActive(true);
        
        return;
        
       
        //bool watchAds = GoogleMobileAdsScript.instance.CheckRewardBasedVideo();
//#if UNITY_EDITOR
        bool watchAds = true;
//#endif
        if (watchAds && !secondChance)
        {
            secondChance = true;
            SecondChance();
        }
        else
        {
            GameOver();
        }
       
    }

    public void GameOver()
    {
        if (!PlayingManager.Instance.IsGameOver) return;
        ClearData();
        if (GetCurrentDataMode != null)
        {
            string id = ConstValue.ScoresIDGameModeAndroid[(int)GetCurrentDataMode.dataGameMode];

#if UNITY_IOS
            id = ConstValue.ScoresIDGameModeIOS[(int)GetCurrentDataMode.dataGameMode];
#endif

          //  LeaderBoardManager.Instance.ReportScore(bestScore, id);
        }
        PopupManager.instance.Show("gameOver", new object[2] { currentScore, bestScore });
    }

    public void VisibleButton(bool visible)
    {
        for (int i = 0; i < buttonsInGame.Count; i++)
        {
            buttonsInGame[i].interactable = visible;
        }
    }

    public void SaveDataMode()
    {
        if (TutorialMode) return;
        dataInGame.SaveDataMode(currentDataMode);
        //string data = JsonUtility.ToJson(dataInGame);
        //PlayerPrefs.SetString("DataInGame", data);
    }
    
    public void SaveSetting()
    {
       
        //string data = JsonUtility.ToJson(gameSetting);
        //PlayerPrefs.SetString("GameSetting", data);
    }
    
    private void LoadSetting()
    {
        string dataSetting = PlayerPrefs.GetString("GameSetting", string.Empty);
        if (string.IsNullOrEmpty(dataSetting))
        {
            gameSetting.muteMusic = false;
            gameSetting.muteMusic = false;
            gameSetting.tutorialClassic = true;
            gameSetting.tutorialHexa = true;
            SaveSetting();
        }
        else
        {
            //gameSetting = JsonUtility.FromJson<GameSetting>(dataSetting);
           
        }
    }
    private void LoadData()
    {
        string data = PlayerPrefs.GetString("DataInGame", string.Empty);
      
        if (string.IsNullOrEmpty(data))
        {
            //Load Default
            dataInGame.Load();
        
        }
        else
        {
            //dataInGame = JsonUtility.FromJson<DataInGame>(data);
            dataInGame.Load();
        }
    }

   
    private void SecondChance()
    {
        PopupManager.instance.Show("secondChance");
    }

  


}
