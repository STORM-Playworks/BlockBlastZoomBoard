using UnityEngine;
using DG.Tweening;
using System.Threading.Tasks;

public static class DOTweenExtensions
{
    public static Task AsyncWait(this Tween tween)
    {
        var tcs = new TaskCompletionSource<bool>();

        tween.OnComplete(() => tcs.SetResult(true));
        tween.OnKill(() => tcs.SetResult(true));  // Handle cases where the tween is killed

        return tcs.Task;
    }
}