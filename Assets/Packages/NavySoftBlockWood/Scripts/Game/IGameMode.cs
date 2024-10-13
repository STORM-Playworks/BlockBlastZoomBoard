using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IGameMode 
{
    GameMode GetGameMode();
    bool NextPiece();
    void Setup();
    void ActionPlacePiece(); 

    void ActionDestroyBlock();

    void Reset();

    void ReturnHome();
}
