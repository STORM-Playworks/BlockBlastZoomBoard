using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class DotweenPulseTapRotation : MonoBehaviour
{
    [SerializeField] private float baseSpeed = 1f;
    [SerializeField] private Transform pointer;
    [SerializeField] private Transform pointerGFX;
    [SerializeField] private Transform[] rotationItems;
    [SerializeField] private float itemScaleIncrease = 1.5f;
    [SerializeField] private float fingerScaleIncrease = 1.5f;

    private void OnEnable()
    {
        KillALl();
        pointer.DOMove(rotationItems[0].position, 0.1f);
        StartCoroutine(DoRotationAnimation());
    }
    private IEnumerator DoRotationAnimation()
    {
        yield return new WaitForSeconds(0.2f);
        
        while (gameObject.activeInHierarchy)
        {
            for (int i = 0; i < rotationItems.Length; i++)
            {
                Transform item = rotationItems[i];
                Sequence seq = DOTween.Sequence();

                seq
                    .Append(item.DOScale(item.localScale * itemScaleIncrease, baseSpeed))
                    .Join(pointer.DOMove(item.position, baseSpeed))
                    .Append(pointerGFX.DOScale(fingerScaleIncrease, baseSpeed * 0.25f).SetLoops(4, LoopType.Yoyo))
                    .Join(item.DOScale(item.localScale, baseSpeed * 0.5f).SetDelay(0.75f * baseSpeed));

                yield return seq.WaitForCompletion();
            }

            yield return null;
        }


        {
            
        }
    }

    private void OnDisable()
    {
        KillALl();
    }

    private void KillALl()
    {
        foreach (var item in rotationItems)
        {
            item.DOKill();
        }

        pointer.DOKill();
        pointerGFX.DOKill();
        pointerGFX.localScale = Vector3.one;
    }
}
