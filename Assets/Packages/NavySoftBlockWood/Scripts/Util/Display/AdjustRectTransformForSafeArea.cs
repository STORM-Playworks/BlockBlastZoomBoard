    using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AdjustRectTransformForSafeArea : MonoHandler
{

    private RectTransform rectT;
    [HideInInspector]
    public float widthScreenSafe;
    [HideInInspector]
    public float heightScreenSafe;
    [SerializeField]
    private bool adjustForBannerAd;
    [SerializeField]
    private float bannerHeightMobile = 100;
    [SerializeField]
    private float bannerHeightLarge2 = 100;
    [SerializeField]
    private float bannerHeightTable = 100;
    [SerializeField]
    private float ratio = 2;


    private float widthTestSafe;

    private float heightTestSafe;

    [SerializeField]
    private Vector2 originOffSetMax;
    [SerializeField]
    private Vector2 originOffSetMin;
    [Header("Mobile Normal")]

    [SerializeField]
    private float addWidthScreenNormal = 0;
    [SerializeField]
    private float addHeightScreenNormal = 0;

    [Header("Ratio > 2 (iphoneX)")]
    [SerializeField]
    private float addWidthScreenRatioLarge2 = 0;
    [SerializeField]
    private float addHeightcreenRatioLarge2 = 0;
    [SerializeField]
    private Vector2 addOffSetMaxLarge2;
    [SerializeField]
    private Vector2 addOffSetMinLarge2;


    [Header("Ratio == 2 (other mobile)")]
    [SerializeField]
    private float addWidthScreenRatioEqual2 = 0;
    [SerializeField]
    private float addHeightcreenRatioEqual2 = 0;
    [SerializeField]
    private Vector2 addOffSetMaxEqual2;
    [SerializeField]
    private Vector2 addOffSetMinEqual2;

    [Header("Ratio <= 1.5(tablet)")]
    [SerializeField]
    private float addWidthScreenRatioTablet = 0;
    [SerializeField]
    private float addHeightcreenRatioTablet = 0;



    [SerializeField]
    private Vector2 addOffSetMaxTablet;
    [SerializeField]

    private Vector2 addOffSetMinTablet;

    private float widthSafe, heightSafe;
    [HideInInspector]
    public int resolution = -1;

    private float bannerHeight = 0;
    private float ratioTablet = 1.5f;

    private Vector2 offSetMax;
    private Vector2 offSetMin;
    private float originWidthRatioLarge2;
    private float originHeightRatioLarge2;
    private Rect[] cutouts;

    private void Start()
    {

        rectT = GetComponent<RectTransform>();
    }

    private void Update()
    {
//#if !UNITY_EDITOR
        UpdateUI();
//#else
        //ConvertResolution();
//#endif

    }




    private void UpdateUI()
    {

#if UNITY_EDITOR
        int width = (int)GetMainGameViewSize().x;
        int height = (int)GetMainGameViewSize().y;
#else
        int width = Screen.width;
        int height =  Screen.height;
#endif

        if (ratio <= 0) return;

        if (width > height)
        {
            rectT.offsetMax = new Vector2(-widthSafe / ratio, offSetMax.y);

            rectT.offsetMin = new Vector2(heightSafe / ratio, offSetMin.y + bannerHeight);
 
        }
        else
        {
            rectT.offsetMax = new Vector2(offSetMax.x, -widthSafe / ratio);

            rectT.offsetMin = new Vector2(offSetMin.x, (heightSafe / ratio) + bannerHeight);

        }
    }

    public static Vector2 GetMainGameViewSize()
    {
        System.Type T = System.Type.GetType("UnityEditor.GameView,UnityEditor");
        System.Reflection.MethodInfo GetSizeOfMainGameView = T.GetMethod("GetSizeOfMainGameView", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
        System.Object Res = GetSizeOfMainGameView.Invoke(null, null);
        return (Vector2)Res;
    }

}
