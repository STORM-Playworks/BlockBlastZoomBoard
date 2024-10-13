using System;
using UnityEngine;

public class CameraSize : MonoBehaviour
{
    [SerializeField]
    private Camera cameraObj;
 
    [SerializeField]
    private float sizeCamera = 1;

    private float aspect = 1;
    private Vector3 originPosition;
 
    private float sizeCameraInBoard10x10 = 0;

 

    private void Start()
    {
        originPosition = transform.position;

        GameManager.Instance.SetupPlayGame +=  SetupPlayGame;
    }

    private void SetupPlayGame()
    {
        Vector3 position = originPosition;
       
        sizeCameraInBoard10x10 = 0;
        if (GameManager.Instance.GetBoardType == BoardType.Classic_10x10)
        {
            
         
           
            sizeCameraInBoard10x10 = 2f;
        }
        if (GameManager.Instance.GetBoardType == BoardType.Hexa)
        {
           


            sizeCameraInBoard10x10 = 2f;
        }
        transform.position = position;
       
        Initialize();
       
    }

    private void Initialize()
    {
        aspect = (float)Screen.height / (float)Screen.width;
        aspect = (float)Math.Round(aspect, 2);
        float size = sizeCamera;
        if (aspect>1.1f && aspect <= 1.5f)
        {
            size = (sizeCamera + aspect + 0.5f) -.8f;
        }
        else if(aspect <=1.1f)
        {
            size = sizeCamera + aspect + 0.5f;
            size += 2;
        }
        cameraObj.orthographicSize = aspect * size + sizeCameraInBoard10x10;
    }

   


    
   
}
