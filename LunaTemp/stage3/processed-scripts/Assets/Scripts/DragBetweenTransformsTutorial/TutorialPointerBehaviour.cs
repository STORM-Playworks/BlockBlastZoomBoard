using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using DG.Tweening;
using UnityEngine;

public class TutorialPointerBehaviour : MonoBehaviour
{
    [SerializeField] private Animator anim;
    [SerializeField] private float dragAnimLength;
    [SerializeField] private Vector3 offset;
    [SerializeField] private Transform[] moveableTransforms;
    private Coroutine dragCoro;
    private bool isDragging;
    public Transform dragStartTrans;
    private Transform dragTargetTrans;
    private float lerpValue;


    private void Start()
    {
        OrientationManager.OrientationUpdateEvent += RefreshPositioning;
    }

    private void RefreshPositioning()
    {
        if (!isDragging) return;
        
        DisableTutorial();
        DragBetweenTransforms(dragStartTrans, dragTargetTrans);
    }

    private IEnumerator DoDrag()
    {
        float dragStartAnimLength = 0.5f;
        float dragEndAnimLength = 0.5f;

        float currentAnim = 0;
        float lerpValue = 0;
        while (isDragging)
        {
            if (currentAnim == 0)
            {
                anim.SetBool("Drag", true);
                transform.position = dragStartTrans.position + offset;
            }

            if (currentAnim > dragStartAnimLength)
            {
                lerpValue = (currentAnim - dragStartAnimLength) / dragAnimLength;
                //print(currentAnim);
                lerpValue = Mathf.Clamp(lerpValue, 0, 1);
                Vector3 targetPos = Vector3.Lerp(dragStartTrans.position, dragTargetTrans.position, lerpValue);
                transform.position = targetPos + offset;

                if (currentAnim > (dragStartAnimLength + dragAnimLength))
                {
                    anim.SetBool("Drag", false);
                }
            }
            currentAnim += Time.deltaTime;

            if (currentAnim > (dragStartAnimLength + dragAnimLength + dragEndAnimLength))
            {
                currentAnim = 0;
            }

            yield return null;
        }
    }

    public void DragBetweenPositions([Bridge.Ref] Vector3 startPos, [Bridge.Ref] Vector3 targetPos)
    {
        moveableTransforms[0].position = startPos;
        moveableTransforms[1].position = targetPos;
        
        DragBetweenTransforms(moveableTransforms[0], moveableTransforms[1]);
    }

    public void DragBetweenTransforms(Transform startT, Transform targetT)
    {
        anim.gameObject.SetActive(true);
        ResetAnim();
        isDragging = true;
        dragStartTrans = startT;
        dragTargetTrans = targetT;
        if (dragCoro != null) StopCoroutine(dragCoro);
        
        dragCoro = StartCoroutine(DoDrag());
    }

    public void TapTransform(Transform tapTarget)
    {
        ResetAnim();
        anim.SetBool("Tap", true);
        transform.DOKill();
        transform.DOMove(tapTarget.position + offset, 0.25f);
    }

    public void DisableTutorial()
    {
        ResetAnim();
        anim.gameObject.SetActive(false);
    }

    public void ResetAnim()
    {
        anim.SetBool("Drag", false);
        anim.SetBool("Tap", false);
        isDragging = false;
        lerpValue = 0;
    }
}
