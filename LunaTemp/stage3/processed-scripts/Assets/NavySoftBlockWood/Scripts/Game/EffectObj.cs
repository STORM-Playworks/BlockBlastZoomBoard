using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EffectObj : MonoBehaviour
{
    private ParticleSystem[] particleSystems;

    private CurveMove curveMove;

    public CurveMove GetCurveMove
    {
        get
        {
            if(curveMove==null)
            {
                curveMove = GetComponent<CurveMove>();
            }
            return curveMove;
        }
    }

    public void Setup()
    {
        particleSystems = GetComponentsInChildren<ParticleSystem>();
    }

    public void Play()
    {
        for (int i = 0; i < particleSystems.Length; i++)
        {
            particleSystems[i].Play();
        }
    }
}
