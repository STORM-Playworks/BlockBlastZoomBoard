using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
public class SoundButton : MonoBehaviour,IPointerDownHandler
{
    public void OnPointerDown(PointerEventData eventData)
    {
        SoundManager.Instance.ButtonClickedSound();
    }
}
