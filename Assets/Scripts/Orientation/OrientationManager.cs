using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OrientationManager : MonoBehaviour
{
    private float lastScreenRatio;
    private bool isCurrentlyPortrait;
    public bool IsCurrentlyPortrait { get {
            CheckIfPortrait();
            return isCurrentlyPortrait; 
        } }
    public static event Action<bool> OrientationChangeEvent;
    public static event Action OrientationUpdateEvent;

    #region Singleton
    public static OrientationManager Instance;

    private void Awake()
    {
        if (Instance != null && Instance != this) Destroy(this);
        else Instance = this;

    }
    #endregion

    private void Start()
    {
        StartCoroutine(InitializeOrientation());
        
        string analytic = isCurrentlyPortrait ? "Portrait" : "Landscape";
        Luna.Unity.Analytics.LogEvent(analytic, 0);
    }

    private IEnumerator InitializeOrientation()
    {
        yield return null;
        CheckIfPortrait();
        UpdateOrientation(isCurrentlyPortrait);
    }

    private void Update()
    {
        HandleScreenOrientationChange();
    }

    private void UpdateOrientation(bool portrait)
    {
        OrientationChangeEvent?.Invoke(portrait);
        //One frame after the orientation changes, update cached positions
        //The one frame is for a proper update of parent/child transforms who change with the orientation change event
        ////// ^ I ended up changing it for now, no frame between the two actions
        StartCoroutine(OrientationUpdate());
    }

    private IEnumerator OrientationUpdate()
    {
        OrientationUpdateEvent?.Invoke();
        yield return null;
    }

    private void HandleScreenOrientationChange()
    {
        if(CheckIfPortrait())
            UpdateOrientation(isCurrentlyPortrait);
    }

    private bool CheckIfPortrait()
    {
        bool changedOrientation = false;
        float screenRatio = ((float)Screen.width / (float)Screen.height);   

        if (screenRatio != lastScreenRatio)
        {
            changedOrientation = true;

            if (screenRatio >= 1)
                // Landscape Layout
                isCurrentlyPortrait = false;

            else if (screenRatio < 1)
                // Portrait Layout
                isCurrentlyPortrait = true;
        }

        lastScreenRatio = screenRatio;

        return changedOrientation;
    }

    private void OnDestroy()
    {
        OrientationChangeEvent = null;
        OrientationUpdateEvent = null;
    }
}

