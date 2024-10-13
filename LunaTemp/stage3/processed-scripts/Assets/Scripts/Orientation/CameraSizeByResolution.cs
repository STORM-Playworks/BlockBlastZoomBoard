using UnityEngine;

public class CameraSizeByResolution : MonoBehaviour
{
    [SerializeField] private bool DebugUpdateCam;
    [SerializeField] private Vector2 referencePortraitResolution;
    [SerializeField] private float portraitTargetSize;
    [SerializeField] private float landscapeTargetSize;
    Camera cam;
    
    // Start is called before the first frame update
    void Start()
    {
        cam = Camera.main;
        OrientationManager.OrientationChangeEvent += UpdateCameraSize;
        UpdateCameraSize(OrientationManager.Instance.IsCurrentlyPortrait);
    }

    // Update is called once per frame
    void Update()
    {
        if(DebugUpdateCam)
            UpdateCameraSize(OrientationManager.Instance.IsCurrentlyPortrait);
    }

    private void UpdateCameraSize(bool isPortrait)
    {
        float targetSize = isPortrait ? portraitTargetSize : landscapeTargetSize;
        float fixedRatio = referencePortraitResolution.x / referencePortraitResolution.y;
        float screenRatio =  (float)Screen.height / (float)Screen.width;
        float modifiedSize = isPortrait? (targetSize / fixedRatio) : (targetSize * fixedRatio);
        Camera.main.orthographicSize = (modifiedSize * screenRatio);
    }
}