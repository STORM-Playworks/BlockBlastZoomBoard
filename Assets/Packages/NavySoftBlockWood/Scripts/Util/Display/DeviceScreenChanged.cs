using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
public class DeviceScreenChanged : MonoBehaviour
{

    public static DeviceScreenChanged instance;
    private int currentWidth;
    private int currentHeight;


    private float beginUpdate = 0;

    private float durationUpdate = 3;

    public event Action OnScreenChangedStart;

    public event Action OnScreenChangedUpdate;


 
    
    private void Awake()
    {
        instance = this;
        currentHeight = Screen.height;
        currentWidth = Screen.width;
    }

    private void Update()
    {
        if(currentHeight!=Screen.height || currentWidth != Screen.width)
        {
            currentHeight = Screen.height;
            currentWidth = Screen.width;


            if (OnScreenChangedStart != null)
            {
                OnScreenChangedStart();
            }

            beginUpdate = Time.time + durationUpdate;





        }

        if(beginUpdate-Time.time>=0)
        {

            if (OnScreenChangedUpdate != null)
            {
                OnScreenChangedUpdate();
            }
        }
    }
}
