using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using PopUpFrameWork;
using ScreenFrameWork;
using TMPro;

public class GameOverPopup : Popup
{
    [SerializeField]
    private TextMeshProUGUI scoreText;

    [SerializeField]
    private TextMeshProUGUI bestScoreText;

    public override void OnShowing(object[] inData)
    {
        //GoogleMobileAdsScript.instance.ShowInterstitial();
        scoreText.text = inData[0].ToString();
        bestScoreText.text = inData[1].ToString();
        base.OnShowing(inData);
    }


    public void OnEventHome()
    {
        Hide(false);
       
        ScreenManager.Instance.Show("menu");
    }

    public void OnEventReplay()
    {
        Hide(false);
        GameManager.Instance.ReplayGame();
    }

    public void OnEventRate()
    {
        //Application.OpenURL(GameManager.Instance.GetRateURL);
    }
}
