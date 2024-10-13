using PopUpFrameWork;
using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class TutorialManager : SingletonComponent<TutorialManager>
{
    [SerializeField]
    private GameObject handObject;
    [SerializeField]
    private Vector3 from, to;
    [SerializeField]
    private bool isUpdate = false;
    [SerializeField]
    private GameObject highLightPiecePlace;
    [SerializeField]
    private float smoothSpeed = 1;
    [SerializeField]
    private List<TutorialBoardData> tutorialBoardDatasClassic = new List<TutorialBoardData>();
    [SerializeField]
    private List<TutorialBoardData> tutorialBoardDatasClassic10x10 = new List<TutorialBoardData>();
    [SerializeField]
    private List<TutorialBoardData> tutorialBoardDatasHexa = new List<TutorialBoardData>();



    [Header("Canvas Popup")]
    [SerializeField]
    private Canvas popupCanvas;
    [SerializeField]
    private Popup fadePopup;
    [SerializeField]
    private int layerPopupTutorial = 15;
    private int layerPopupOrigin = 0;
    private Vector3 velocity = Vector3.zero;



    private int classicIndex = 0;
    private int hexaIndex = 0;

    public bool NextTutorial { get; set; }
    public TutorialBoardData CurrentTutorialBoardData
    {
        get
        {
            if (GameManager.Instance.CurrentDataGameMode == DataGameMode.HEXA)
            {
                return tutorialBoardDatasHexa[hexaIndex-1];
            }
            else
            {
                if (GameManager.Instance.CurrentDataGameMode == DataGameMode.CLASSIC_8X8 ||
               GameManager.Instance.CurrentDataGameMode == DataGameMode.TIME_8X8 ||
                GameManager.Instance.CurrentDataGameMode == DataGameMode.BOMB_8X8)
                {
                    return tutorialBoardDatasClassic[classicIndex - 1];
                }
                else if (GameManager.Instance.CurrentDataGameMode == DataGameMode.CLASSIC_10X10 ||
                  GameManager.Instance.CurrentDataGameMode == DataGameMode.TIME_10X10 ||
                   GameManager.Instance.CurrentDataGameMode == DataGameMode.BOMB_10X10)
                {
                    return tutorialBoardDatasClassic10x10[classicIndex - 1];
                }
               
                
            }
            return null;
        }
    }

    private void Start()
    {
        GameManager.Instance.ReturnHome += ReturnHome;
    }

    public void Setup()
    {
        layerPopupOrigin = popupCanvas.sortingOrder;
        popupCanvas.sortingOrder = layerPopupTutorial;
        PopupManager.instance.Show("fadetutorial");
        NextTutorial = false;
        handObject.SetActive(false);

    }

    public void ActiveTutorialClassic()
    {
        if (classicIndex - 1 >= 0)
        {
            if (GameManager.Instance.CurrentDataGameMode == DataGameMode.CLASSIC_8X8 ||
                GameManager.Instance.CurrentDataGameMode == DataGameMode.TIME_8X8 ||
                 GameManager.Instance.CurrentDataGameMode == DataGameMode.BOMB_8X8)
            {
                tutorialBoardDatasClassic[classicIndex - 1].EndStep();
            }
            else if (GameManager.Instance.CurrentDataGameMode == DataGameMode.CLASSIC_10X10 ||
              GameManager.Instance.CurrentDataGameMode == DataGameMode.TIME_10X10 ||
               GameManager.Instance.CurrentDataGameMode == DataGameMode.BOMB_10X10)
            {
                tutorialBoardDatasClassic10x10[classicIndex - 1].EndStep();
            }
           
         
        }


        if (classicIndex > tutorialBoardDatasClassic.Count - 1)
        {
            //Complete Tutorial 
            GameManager.Instance.GetGameSetting.tutorialClassic = false;
            //GameManager.Instance.SaveSetting();
            PieceManager.Instance.VisiblePiecesInGame(false);
            PieceManager.Instance.CreateNewPieces(true, null);
            handObject.SetActive(false);
            fadePopup.Hide(false);
            GameManager.Instance.TutorialMode = false;
            GameManager.Instance.VisibleButton(true);

            return;
        }
        NextTutorial = false;

        highLightPiecePlace.SetActive(true);
        PopupManager.instance.Show("fadetutorial");
        GameManager.Instance.VisibleButton(false);

        if (GameManager.Instance.CurrentDataGameMode == DataGameMode.CLASSIC_8X8 ||
            GameManager.Instance.CurrentDataGameMode == DataGameMode.TIME_8X8 ||
             GameManager.Instance.CurrentDataGameMode == DataGameMode.BOMB_8X8)
        {
            tutorialBoardDatasClassic[classicIndex].Setup();
        }
        else if (GameManager.Instance.CurrentDataGameMode == DataGameMode.CLASSIC_10X10 ||
          GameManager.Instance.CurrentDataGameMode == DataGameMode.TIME_10X10 ||
           GameManager.Instance.CurrentDataGameMode == DataGameMode.BOMB_10X10)
        {
            tutorialBoardDatasClassic10x10[classicIndex].Setup();
        }

        classicIndex++;

    }

    private void ReturnHome()
    {
        Timer.StopSchedule(this);
        if (classicIndex - 1 >= 0)
        {
            tutorialBoardDatasClassic[classicIndex - 1].EndStep();
            tutorialBoardDatasClassic10x10[classicIndex - 1].EndStep();
        }
        if (hexaIndex - 1 >= 0)
            tutorialBoardDatasHexa[hexaIndex-1].EndStep();
        popupCanvas.sortingLayerID = layerPopupOrigin;
        classicIndex = 0;
        hexaIndex = 0;
        handObject.SetActive(false);
        isUpdate = false;
        GameManager.Instance.TutorialMode = false;
        fadePopup.Hide(false);
        NextTutorial = false;
        highLightPiecePlace.SetActive(false);
    }

    public void ActiveTutorialHexa()
    {
        isUpdate = false;
        if (hexaIndex - 1 >= 0)
            tutorialBoardDatasHexa[hexaIndex-1].EndStep();
        if (hexaIndex > tutorialBoardDatasHexa.Count - 1)
        {
            //Complete Tutorial 
            GameManager.Instance.GetGameSetting.tutorialHexa = false;
            //GameManager.Instance.SaveSetting();
            PieceManager.Instance.VisiblePiecesInGame(false);
            PieceManager.Instance.CreateNewPieces(true, null);
            handObject.SetActive(false);
            fadePopup.Hide(false);
            GameManager.Instance.TutorialMode = false;
            GameManager.Instance.VisibleButton(true);
      
            return;
        }
        NextTutorial = false;

        highLightPiecePlace.SetActive(true);
        PopupManager.instance.Show("fadetutorial");
        GameManager.Instance.VisibleButton(false);
        tutorialBoardDatasHexa[hexaIndex].Setup();
        hexaIndex++;
        
    }

    public void MoveHand([Bridge.Ref] Vector3 from, [Bridge.Ref] Vector3 to)
    {
        Timer.Schedule(this, 0.5f, () =>
        {
            
            handObject.gameObject.SetActive(true);
            handObject.transform.position = from;
            this.from = from;
            this.to = to;
            isUpdate = true;
        });
    }



    public void EndStep()
    {
        fadePopup.Hide(false);
        highLightPiecePlace.SetActive(false);
        Clicked(true);
        NextTutorial = true;
    }
    
    public void Clicked(bool click)
    {
        if (NextTutorial) return;
        if (!GameManager.Instance.TutorialMode) return;
       
        handObject.SetActive(!click);
        if(!click)
        {
            handObject.transform.position = from;
        }
    }

    

    private void Update()
    {
        if (!isUpdate) return;
        handObject.transform.position = Vector3.SmoothDamp(handObject.transform.position, to, ref velocity, smoothSpeed);
        float dst = Vector3.Distance(handObject.transform.position, to);
        if (dst <= 0.5f)
        {
            handObject.transform.position = from;
        }
    }

}
