using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RectTransformByOrientation : MonoBehaviour
{
    //[SerializeField] Vector4 portraitLeftTopRightBottom;
    [SerializeField] private Vector3 portraitScale;
    //[SerializeField] Vector4 landscapeLeftTopRightBottom;
    [SerializeField] private Vector3 landscapeScale;
    private RectTransform trans;

    // Start is called before the first frame update
    void Start()
    {
        trans = GetComponent<RectTransform>();
        OrientationManager.OrientationChangeEvent += UpdateRect;
        InitializeRect();
    }

    private void InitializeRect()
    {
        float screenRatio = (Screen.width / Screen.height);
        bool isPortrait = screenRatio < 1 ? true : false;
        UpdateRect(isPortrait);
    }

    private void UpdateRect(bool isPortrait)
    {
        if (isPortrait)
        {
            //UpdateRectPos(portraitLeftTopRightBottom);
            trans.localScale = portraitScale;
        }
        else if (!isPortrait)
        {
            //UpdateRectPos(landscapeLeftTopRightBottom);
            trans.localScale = landscapeScale;
        }
    }

    private void UpdateRectPos([Bridge.Ref] Vector4 leftTopRightBottom)
    {
        float left = leftTopRightBottom.x;
        float top = leftTopRightBottom.y;
        float right = leftTopRightBottom.z;
        float bottom = leftTopRightBottom.w;
        trans.offsetMin = new Vector2(left, bottom);
        trans.offsetMax = new Vector2(-right, -top);
    }
}
