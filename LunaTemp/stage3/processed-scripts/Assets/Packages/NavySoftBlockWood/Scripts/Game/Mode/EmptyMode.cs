using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EmptyMode : MonoBehaviour, IGameMode
{
    [SerializeField]
    private GameMode gameMode;

    [SerializeField]
    private List<GameObject> objsUsedInMode = new List<GameObject>();


    private void Start()
    {
        PlayingManager.Instance.AddGameMode(this);
    }
    private void VisibleObjs(bool visible)
    {
        return;
        for (int i = 0; i < objsUsedInMode.Count; i++)
        {
            objsUsedInMode[i].gameObject.SetActive(visible);
        }
    }

    public GameMode GetGameMode()
    {
        return gameMode;
    }
    public bool NextPiece() { return false; }

    public void Setup()
    {
       
        VisibleObjs(true);
    }
    public void ActionDestroyBlock() { }
    public void ActionPlacePiece()
    {
      
    }

    public void Reset()
    {
       

    }

    public void ReturnHome() { VisibleObjs(false); }
}
