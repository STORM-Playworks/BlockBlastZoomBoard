using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class FadeOutCanvasGroup : MonoBehaviour
{
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private float fadeOutTime;
    [SerializeField] private bool deactivateOnFinish;
    [SerializeField] private bool fadeInOnActivation;

    // Start is called before the first frame update
    private void OnEnable()
    {
        canvasGroup.alpha = 0;
        if(fadeInOnActivation)
            ToggleFade(true);
    }

    public void DoFadeOut()
    {
        ToggleFade(false);
    }

    private void ToggleFade(bool on)
    {
        float alphaValue = on ? 0 : 1;
        float targetAlpha = on ? 1 : 0;
        Tween tweenAlpha = DOTween.To(() => alphaValue, x => alphaValue = x, targetAlpha, fadeOutTime).OnUpdate(() => canvasGroup.alpha = alphaValue);

        if(!on && deactivateOnFinish) 
                tweenAlpha.OnComplete(() => canvasGroup.gameObject.SetActive(false));
    }
}
