using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using PopUpFrameWork;
public class SecondChancePopup : Popup
{
    [SerializeField]
    private TextMeshProUGUI durationText;
 
    [SerializeField]
    private GameObject popupSecondChance;
    [SerializeField]
    private Image fillSecondChance;
 
    private float duration;

    private float timeSecondChance = 5;

    private bool isUpdate = false;

    public override void OnShowing(object[] inData)
    {
        PlayingManager.Instance.CanClickPiece = false;
        isUpdate = false;
        durationText.text = timeSecondChance.ToString();
        fillSecondChance.fillAmount = 1;
        StartCoroutine(StartCountTime());
        base.OnShowing(inData);
    }
  

    public void OnEventYes()
    {
//#if UNITY_EDITOR
        Hide(false);
        PlayingManager.Instance.DestroyBlockSecondChance();
//#endif
        //GoogleMobileAdsScript.instance.ShowRewardBasedVideo(() => {
         //   PlayingManager.Instance.IsGameOver = false;
         //   Hide(false);
         //   PlayingManager.Instance.DestroyBlockSecondChance();
         //  
       // });
    }

    public void OnEventNoTks()
    {
        Hide(false);
        Timer.Schedule(this, 0.2f, () => { GameManager.Instance.GameOver(); });
      
    }

    private IEnumerator StartCountTime()
    {
        yield return new WaitForSeconds(.4f);
        isUpdate = true;
        duration = timeSecondChance;
       
    }

    private void FixedUpdate()
    {
        if (!isUpdate) return;
        duration -= Time.deltaTime;
        durationText.text = Mathf.FloorToInt(duration).ToString();
        fillSecondChance.fillAmount = (1f / timeSecondChance) * duration;
        if (duration <= 0)
        {
            durationText.text = "0";
            OnEventNoTks();
          
            fillSecondChance.fillAmount = 0;
            isUpdate = false;
        }
    }
}
