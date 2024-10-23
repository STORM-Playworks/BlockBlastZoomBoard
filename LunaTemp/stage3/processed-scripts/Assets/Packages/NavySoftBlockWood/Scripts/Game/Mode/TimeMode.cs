using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

public class TimeMode : MonoBehaviour,IGameMode
{
    [SerializeField]
    private GameMode gameMode;
    [SerializeField]
    private Image processTime;
    [SerializeField]
    private Transform iconTime;

    [SerializeField]
    private List<GameObject> objsUsedInMode= new List<GameObject>();

    private bool isUpdate = false;
    private float fill;

    private void Start()
    {
       PlayingManager.Instance.AddGameMode(this);
    }

    private void FixedUpdate()
    {
        if (!isUpdate) return;
        UpdateProcessFill(-(Time.deltaTime / 500));
    }


    private void VisibleObjs(bool visible)
    {
        for (int i = 0; i < objsUsedInMode.Count; i++)
        {
            objsUsedInMode[i].gameObject.SetActive(visible);
        }
    }

    private IEnumerator ShowEffectTime(int totalLine)
    {
        for (int i = 0; i < totalLine; i++)
        {
            EffectObj effTime = EffectManager.Instance.RegisterEffectTime();
            effTime.Play();
            effTime.transform.position = PlayingManager.Instance.LastPiece.position;
            effTime.GetCurveMove.Move(iconTime, effTime.transform.position, () => {
                UpdateProcessFill(fill);
                effTime.gameObject.SetActive(false);
            });
           yield return new WaitForSeconds(.04f);
        }
    }


    private void UpdateProcessFill(float value)
    {
        processTime.fillAmount += value;

        if (processTime.fillAmount >= 1)
        {
            SoundManager.Instance.SoundPlayOneShot("explosion");
            PlayingManager.Instance.GetCurrentBoard.ShakeBoard();
            processTime.fillAmount = 0;
            StartCoroutine(PlayingManager.Instance.GetCurrentBoard.BlocksFall());
            //GameManager.Instance.SaveSetting();
        }
        else if(processTime.fillAmount<=0)
        {
            processTime.fillAmount = 0;
        }
        if (processTime.fillAmount > 0)
        {
            GameManager.Instance.GetGameSetting.fillTimer = processTime.fillAmount;
            //GameManager.Instance.SaveSetting();
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
        fill = 1f / GameManager.MAX_FILL_TIME;
        VisibleObjs(true);
        processTime.fillAmount = 0;
        UpdateProcessFill(GameManager.Instance.GetGameSetting.fillTimer);
        isUpdate = true;
    }

    


    public void ActionDestroyBlock() {
        if (GameManager.Instance.GetGameSetting.tutorialClassic) return;
     
        
        StartCoroutine(ShowEffectTime(PlayingManager.Instance.TotalLineDestroy));
    }
    public void ActionPlacePiece() { }
   
    public void ReturnHome() {


        VisibleObjs(false);
        isUpdate = false;

    }
    public void Reset()
    {
        isUpdate = false;
        processTime.fillAmount = 0;
        GameManager.Instance.GetGameSetting.fillTimer = 0;
        //GameManager.Instance.SaveSetting();
    }
}
