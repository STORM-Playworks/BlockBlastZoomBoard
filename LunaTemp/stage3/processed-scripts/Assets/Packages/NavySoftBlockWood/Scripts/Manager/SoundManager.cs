    using System;
    using System.Collections;
using System.Collections.Generic;
    using System.Threading.Tasks;
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

    [SerializeField] 
    private AudioSource countLoop;

    private bool bgmPlaying;

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

    private void Update()
    {
        if (bgmPlaying) return;

        if (Input.GetMouseButtonUp(0))
        {
            bgmPlaying = true;
            musicSource.Play();
        }
    }

    public void ToggleCountLoop(bool on)
    {
        if (on)
        {
            countLoop.Play();
        }
        else
        {
            countLoop.Stop();
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
    
    public async void SoundPlayOneShot(string nameSound, float delay)
    {
        await Task.Delay((int)(1000 * delay));
        SoundClipInfor button = soundClipInfors.Find(x => x.id.Equals(nameSound));
        soundSource.PlayOneShot(button.audioClip);
    }
}
