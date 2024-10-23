using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using PopUpFrameWork;
using UnityEngine.UI;

public class SettingPopup : Popup
{

    [SerializeField]
    private Sprite on;
    [SerializeField]
    private Sprite off;
    [SerializeField]
    private Image musicIcon;
    [SerializeField]
    private Image soundIcon;

    [SerializeField] private string rateURL = "https://www.google.com/";


    private void Start()
    {
        musicIcon.sprite = (GameManager.Instance.GetGameSetting.muteMusic) ? off : on;
        soundIcon.sprite = (GameManager.Instance.GetGameSetting.muteSound) ? off : on;
    }

    public void OnEventMusic()
    {
        GameManager.Instance.GetGameSetting.muteMusic = !GameManager.Instance.GetGameSetting.muteMusic;
        musicIcon.sprite = (GameManager.Instance.GetGameSetting.muteMusic) ? off : on;

        //GameManager.Instance.SaveSetting();
        SoundManager.Instance.MuteSource(false);
    }

    public void OnEventSound()
    {
        GameManager.Instance.GetGameSetting.muteSound = !GameManager.Instance.GetGameSetting.muteSound;
        soundIcon.sprite = (GameManager.Instance.GetGameSetting.muteSound) ? off : on;

        //GameManager.Instance.SaveSetting();
        SoundManager.Instance.MuteSource(true);
    }
   
}
