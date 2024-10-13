using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameScreen : ScreenFrameWork.Screen
{
    public override void Hide(bool back, bool immediate)
    {
        GameManager.Instance.GoHome();
        base.Hide(back, immediate);
    }
}
