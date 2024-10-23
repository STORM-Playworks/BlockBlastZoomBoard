using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using ScreenFrameWork;
using UnityEngine.UI;

public class BoosterManager : SingletonComponent<BoosterManager>
{

    private const int maxAdsGetBoosterOneGame = 2;
    [System.Serializable]
    public class BoosterInfor
    {
        public string nameBooster;
        public int numberBoosterStartGame = 1;
        public int numberTakeAds = 1;
    }

    [System.Serializable]
    public class HintInfor
    {
        public BoosterType boosterType;
        public int start = 1;

        public int current = 0;
        public int adsCanGet = 0;
        public void SaveHintInfor()
        {
            PlayerPrefs.SetInt(boosterType.ToString(), current);
        }
        public void LoadHintInfor()
        {
            current = PlayerPrefs.GetInt(boosterType.ToString(), start);
        }
    }

    [System.Serializable]
    public enum BoosterType
    {
        NONE = 0,
        ONE_BLOCK_DESTROY,
        ONE_HORIZONTAL,
        ONE_VERTICAL,
        BACK,
    }

    [SerializeField]
    private BoosterType boosterType = BoosterType.NONE;

    [SerializeField]
    private List<HintInfor> hintInfors = new List<HintInfor>();
     

    [SerializeField]
    private TextMeshProUGUI textBoosterOneBlock;
    [SerializeField]
    private TextMeshProUGUI textBoosterOneHorizontal;
    [SerializeField]
    private TextMeshProUGUI textBoosterOneVertical;
    [SerializeField]
    private TextMeshProUGUI textBoosterBack;


    [SerializeField]
    private RectTransform[] rectButtonsBooster;

    [Header("Hammer Booster")]
    [SerializeField]
    private GameObject hammerObj;
    [SerializeField]
    private Animation hammerAnimation;
 

    [SerializeField]
    private bool testMode;
    
 
    private int currentBooster = -1;
    private Button btnUndo;
    public GameObject destroyObj { get; set; }
 

   


  
    

   

    public BoosterType GetBoosterType { get { return boosterType; } }
    public void SetBoosterType(BoosterType boosterType) {
        this.boosterType = boosterType;
        if (boosterType == BoosterType.NONE)
        {
          
            for (int i = 0; i < rectButtonsBooster.Length; i++)
            {
                AnimationScale(rectButtonsBooster[i], false);
            }
           
            destroyObj = null;
        }


    }
   
  
  
    private void Start()
    {
        if (testMode)
        {
            for (int i = 0; i < hintInfors.Count; i++)
            {
                hintInfors[i].start = 10000;
            }
        }


      

      

       

        GameManager.Instance.SetupPlayGame += SetupPlayGame;
        GameManager.Instance.ReturnHome += OnEventBoosterCancel;
        //Visible Undo 
        btnUndo = rectButtonsBooster[rectButtonsBooster.Length - 1].GetComponent<Button>();
      
    }

    private void SetupPlayGame()
    {
        Timer.Schedule(this, 0.02f, () =>
        {
            VisibleButtonUndo();
        });
        //update remain number booster
        for (int i = 0; i < hintInfors.Count; i++)
        {
            hintInfors[i].LoadHintInfor();
        }

      

        for (int i = 0; i < hintInfors.Count; i++)
        {
            hintInfors[i].adsCanGet = maxAdsGetBoosterOneGame;
        }

        UpdateTexNumberBooster();
    }

 
    private void UpdateTexNumberBooster()
    {
        textBoosterOneBlock.text = (hintInfors[0].current==0)? string.Format("AD + {0}", hintInfors[0].adsCanGet.ToString()) : string.Format("x{0}", hintInfors[0].current.ToString())  ;
        textBoosterOneHorizontal.text = (hintInfors[1].current == 0) ? string.Format("AD + {0}", hintInfors[1].adsCanGet.ToString()) : string.Format("x{0}", hintInfors[1].current.ToString());
        textBoosterOneVertical.text = (hintInfors[2].current == 0) ? string.Format("AD + {0}", hintInfors[2].adsCanGet.ToString()) : string.Format("x{0}", hintInfors[2].current.ToString());
        textBoosterBack.text = (hintInfors[3].current == 0) ? string.Format("AD + {0}", hintInfors[3].adsCanGet.ToString()) : string.Format("x{0}", hintInfors[3].current.ToString());
    }





    public void OnEventBoosterCancel()
    {
        SetBoosterType(BoosterType.NONE);
        if (currentBooster < 0) return;
        AnimationScale(rectButtonsBooster[currentBooster], false);
    }


    //show effect of booster two
    public void EffectOneBlockDestroy(Vector3 position)
    {
        position.x += .5f;
        hammerObj.transform.position = position;
        hammerObj.SetActive(true);
        hammerAnimation.Play();
    }

    public void VisibleButtonUndo()
    {
        btnUndo.interactable = PlayingManager.Instance.CanUndo();
    }

    public void Restart()
    {
        boosterType = BoosterType.NONE;
        for (int i = 0; i < hintInfors.Count; i++)
        {
            hintInfors[i].adsCanGet = maxAdsGetBoosterOneGame;
        }
        UpdateTexNumberBooster();
    }
    public void CompleteUsedBooster(int Booster)
    {
        AnimationScale(rectButtonsBooster[currentBooster], false);
        if (Booster == 0) return;
       
        Booster -= 1;
        hintInfors[Booster].current--;
        hintInfors[Booster].SaveHintInfor();
        UpdateTexNumberBooster();
        SetBoosterType(BoosterType.NONE);
    }
  

    //Effect when select booster
    private void AnimationScale(RectTransform rect,bool scale,float duration =0.2f)
    {
        float scaleValue = (scale) ? 1.12f : 1f;
        rect.transform.GetChild(0).gameObject.SetActive(scale);
        UIAnimation scaleX = UIAnimation.ScaleX(rect, scaleValue, duration);
        UIAnimation scaleY = UIAnimation.ScaleY(rect, scaleValue, duration);
        scaleX.Play();
        scaleY.Play();
    }

    private void AddHint(int booster)
    {
        hintInfors[booster].adsCanGet--;
        hintInfors[booster].current++;
        hintInfors[booster].SaveHintInfor();
        UpdateTexNumberBooster();
    }


    public bool ActiveEffectBooster(BlockBoard blockBoard)
    {
        Vector3 newPosition = blockBoard.transform.position;
        switch (boosterType)
        {
            case BoosterType.ONE_HORIZONTAL:
                newPosition.x = -4;
                BoosterMoveDestroy arrow = EffectManager.Instance.RegisterArrowObj();
                arrow.Move(newPosition);
                return true;
            case BoosterType.ONE_VERTICAL:
                newPosition.y = 15;
                BoosterMoveDestroy sword = EffectManager.Instance.RegisterSwordObj();
                sword.Move(newPosition);
                return true;
            case BoosterType.ONE_BLOCK_DESTROY:
                if (blockBoard.CanPlace) return false;

                newPosition.x += .5f;
                hammerObj.transform.position = newPosition;
                hammerObj.SetActive(true);
                hammerAnimation.Play();
                
                Timer.Schedule(this, 0.25f, () => {

                    PlayingManager.Instance.DestroyOneBlock(blockBoard);
                    PlayingManager.Instance.SaveNewStepWhenUseBooster();
                    StartCoroutine(PieceManager.Instance.CheckPieceCanPlaceBoard());
                });
                return true;
        }

        return false;
    }
    public void OnEventUseBooster(int booster)
    {
    
        if (currentBooster >= 0)
            AnimationScale(rectButtonsBooster[currentBooster], false);

        
        currentBooster = booster;
        if (hintInfors[booster].adsCanGet <= 0 && hintInfors[booster].current <= 0) return;
      
        //Reset Scale
        switch (booster)
        {
            case 0:
                if (hintInfors[booster].current > 0)
                {
                    SetBoosterType(BoosterType.ONE_BLOCK_DESTROY);
                    AnimationScale(rectButtonsBooster[currentBooster], true);
                }
                else
                {
//#//if UNITY_EDITOR
                    AddHint(booster);
//#endif
                    //Watch Ads Get Rewards
                    //GoogleMobileAdsScript.instance.ShowRewardBasedVideo(() => { AddHint(booster); });

                }
                break;
            case 1:
                if (hintInfors[booster].current > 0)
                {
                    SetBoosterType(BoosterType.ONE_HORIZONTAL);
                    AnimationScale(rectButtonsBooster[currentBooster], true);
                }
                else
                {
//#if UNITY_EDITOR
                    AddHint(booster);
//#endif
                    //Watch Ads Get Rewards
                    //GoogleMobileAdsScript.instance.ShowRewardBasedVideo(() => { AddHint(booster); });
                }
                break;
            case 2:
                if (hintInfors[booster].current > 0)
                {
                    SetBoosterType(BoosterType.ONE_VERTICAL);
                   
                    AnimationScale(rectButtonsBooster[currentBooster], true);
                }
                else
                {
//#if UNITY_EDITOR
                    AddHint(booster);
//#endif
                    //Watch Ads Get Rewards
                    //GoogleMobileAdsScript.instance.ShowRewardBasedVideo(() => { AddHint(booster); });
                }
                break;


            case 3:
                if (hintInfors[booster].current > 0 )
                {
                    if (PlayingManager.Instance.CanUndo())
                    {
                        SetBoosterType(BoosterType.BACK);
                        PlayingManager.Instance.Undo();
                        AnimationScale(rectButtonsBooster[currentBooster], true, 0.06f);
                        Timer.Schedule(this, 0.06f, () =>
                        {
                            CompleteUsedBooster((int)boosterType);
                            AnimationScale(rectButtonsBooster[currentBooster], false, 0.06f);
                            SetBoosterType(BoosterType.NONE);
                            VisibleButtonUndo();
                        });

                    }
                }
                else
                {
//#if UNITY_EDITOR
                    AddHint(booster);
//#endif
                    //Watch Ads Get Rewards
                    //GoogleMobileAdsScript.instance.ShowRewardBasedVideo(() => { AddHint(booster); });
                }
                break;

        }
    }

}
