using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using TMPro;
using System;

public class CurveMove : MonoBehaviour
{
    [SerializeField]
    private float speed = 1;

    private float elapsedTime = 0;
    private bool isUpdate = false;
    private Vector3 p0, p1, p2;

    private Transform target; 
    private UnityAction triggerFinish;



    public Transform GetTarget => target;
 
    public void Move(Transform target,Vector3 position,UnityAction action)
    {
        isUpdate = true;
        p0 = transform.position;

        p2 = target.position;

        p1 = new Vector3(p2.x + UnityEngine.Random.Range(1f, 3f), p0.y * 1.2f);


        triggerFinish = action;
         this.target = target;
        transform.position = position;
        elapsedTime = 0;
    }

    private void Update()
    {
        if (!isUpdate) return;

        elapsedTime += Time.deltaTime * speed;
        Vector3 position = (1.0f - elapsedTime) * (1.0f - elapsedTime) * p0
         + 2.0f * (1.0f - elapsedTime) * elapsedTime * p1 + elapsedTime * elapsedTime * p2;

        transform.position = position;
        if (elapsedTime >= 1)
        {
            transform.position = p2;

            if (triggerFinish != null)
            {
                triggerFinish();
            }
       
            isUpdate = false;
        }
    }
}
