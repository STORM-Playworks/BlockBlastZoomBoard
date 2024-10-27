using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using DG.Tweening;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    [LunaPlaygroundField("Camera Zoom", 1, "Game Settings")]
    [SerializeField] private bool doCameraZoom;
    [SerializeField] private CameraSizeByResolution csr;
    [SerializeField] private float[] cameraZoomLevels;
    [SerializeField] private float[] landscapeOffset;
    [SerializeField] private float zoomOutDuration = 0.25f;
    private int currentZoomIndex;

    private void Start()
    {
        InitializeCam();
    }

    private void InitializeCam()
    {
        if (!doCameraZoom) return;
        
        csr.UpdateTargetSizes(cameraZoomLevels[0], cameraZoomLevels[0] + landscapeOffset[0]);
        currentZoomIndex++;
    }
    
    public async Task UpdateCameraZoom()
    {
        if (doCameraZoom && currentZoomIndex < cameraZoomLevels.Length)
        {
            float portraitZoomSize = cameraZoomLevels[currentZoomIndex];
            float lsOffset =  landscapeOffset[currentZoomIndex];

            float currentZoom = csr.GetCurrentSize();
            Tween zoomTween = DOTween.To(() => currentZoom, x => currentZoom = x, portraitZoomSize, zoomOutDuration)
                    .OnUpdate(()=>
                        csr.UpdateTargetSizes(currentZoom, currentZoom + lsOffset)
                    )
                ;

            currentZoomIndex++;
            await zoomTween.AsyncWait();
        }
        else
        {
            await Task.Delay(1);
        }
    }
}
