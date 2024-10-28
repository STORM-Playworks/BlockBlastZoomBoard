using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TransformByOrientation : MonoBehaviour
{
    [SerializeField] private Transform portraitTrans;
    [SerializeField] private Transform landscapeTrans;
    [SerializeField] private bool tossOut;

    // Start is called before the first frame update
    void Start()
    {
        OrientationManager.OrientationChangeEvent += ChangeTransformOrientation;
        ChangeTransformOrientation(OrientationManager.Instance.IsCurrentlyPortrait);
    }

    private void ChangeTransformOrientation(bool isPortrait)
    {
        Transform newParent = isPortrait ? portraitTrans : landscapeTrans;

        transform.SetParent(newParent);
        transform.localScale = Vector3.one;
        transform.localPosition = Vector3.zero;

        if (tossOut) transform.SetParent(null);
    }
}
