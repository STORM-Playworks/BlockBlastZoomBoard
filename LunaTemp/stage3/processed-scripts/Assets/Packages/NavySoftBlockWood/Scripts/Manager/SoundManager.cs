    using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using ScreenFrameWork;
[System.Serializable]
public class SoundClipInfor
{
    public string id = "";
    public AudioClip audioClip = null;
    [Range(0, 1)] public float clipVolume = 1;
}
public class SoundManager : SingletonComponent<SoundManager>
{
    [SerializeField]
    private List<SoundClipInfor> soundClipInfors = new List<SoundClipInfor>();

    [SerializeField]
    private AudioSource musicSource;
    [SerializeField]
    private AudioSource soundSource;


    private void Start()
    {
        MuteSource(false);
        MuteSource(true);
    }

    public void MuteSource(bool sound)
    {
        if(sound)
        {
            soundSource.mute = GameManager.Instance.GetGameSetting.muteSound;
        }
        else
        {
            musicSource.mute = GameManager.Instance.GetGameSetting.muteMusic;
        }
    }

    public void ButtonClickedSound()
    {
        SoundClipInfor button = soundClipInfors.Find(x => x.id.Equals("Button"));
        soundSource.PlayOneShot(button.audioClip);
    }

    public void SoundPlayOneShot(string nameSound)
    {
        SoundClipInfor button = soundClipInfors.Find(x => x.id.Equals(nameSound));
        soundSource.PlayOneShot(button.audioClip);
    }
}
