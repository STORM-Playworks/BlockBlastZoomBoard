using System.Collections.Generic;
using System;
using UnityEngine;
[System.Serializable]
public enum DataGameMode
{
    CLASSIC_8X8 =0,
    CLASSIC_10X10,
    TIME_8X8,
    TIME_10X10,
    BOMB_8X8,
    BOMB_10X10,
    HEXA
}

[System.Serializable]
public class DataInGame
{
    public List<DataMode> dataGameModes = new List<DataMode>();
 
    [HideInInspector]
    public string jsonGameMode;
    public void Save()
    {
        for (int i = 0; i < dataGameModes.Count; i++)
        {
            dataGameModes[i].Save();
        }
        jsonGameMode = JsonArray.ToJson<DataMode>(dataGameModes.ToArray());

    }
    public void SaveDataMode(DataMode dataMode)
    {

        dataMode.Save();

        jsonGameMode = JsonArray.ToJson<DataMode>(dataGameModes.ToArray());

    }

    public void Load()
    {
        dataGameModes.Clear();

        if (!string.IsNullOrEmpty(jsonGameMode))
        {
            DataMode[] datas = JsonArray.FromJson<DataMode>(jsonGameMode);
            for (int i = 0; i < datas.Length; i++)
            {
                dataGameModes.Add(datas[i]);
            }
        }
        else
        {
            foreach (var enumValue in Enum.GetValues(typeof(DataGameMode)))
            {
                DataMode mode = new DataMode();
                mode.dataGameMode = (DataGameMode)enumValue;
                mode.bestScore = 0;
                dataGameModes.Add(mode);
            }
            Save();
        }
    }


    public DataMode FindDataMode(DataGameMode dataGameMode)
    {
        return dataGameModes.Find(x => x.dataGameMode == dataGameMode);
    }
}

[System.Serializable]
public class DataMode
{
    public DataGameMode dataGameMode;
    public int currentScore;
    public int bestScore;
    public List<DataPlacePiece> dataPlacePieces = new List<DataPlacePiece>();
    public List<int> blocksModeIndex = new List<int>();
    public int[] piecesId = new int[3];
    public List<BombDetail> bombDetails = new List<BombDetail>();
    public int stepBomb = 0;
    [HideInInspector]
    public string jsonPlacePieces;


    public void AddDataPlacePiece(DataPlacePiece data)
    {
        if(dataPlacePieces.Count>=4)
        {
            dataPlacePieces.RemoveAt(0);
        }
        dataPlacePieces.Add(data);
    }

    public void ClearData()
    {
        currentScore = 0;
        dataPlacePieces.Clear();
        blocksModeIndex.Clear();
        for (int i = 0; i < piecesId.Length; i++)
        {
            piecesId[i]=PieceManager.Instance.GetRandomPieceId();
        }
    }


    

    public void Save()
    {
        for (int i = 0; i < dataPlacePieces.Count; i++)
        {
            dataPlacePieces[i].Save();
        }
        jsonPlacePieces = JsonArray.ToJson<DataPlacePiece>(dataPlacePieces.ToArray());
         
    }

    public void Load()
    {
        dataPlacePieces.Clear();
       
        if (!string.IsNullOrEmpty(jsonPlacePieces))
        {
            DataPlacePiece[] datas = JsonArray.FromJson<DataPlacePiece>(jsonPlacePieces);
            for (int i = 0; i < datas.Length; i++)
            {
                dataPlacePieces.Add(datas[i]);
            }
        }
    }


}

[System.Serializable]
public class BombDetail
{
    public int bombIndex = 0;
    public int stepBomb = 0;
}
[System.Serializable]
public class DataPlacePiece
{


    public List<int> blocksShowIndex = new List<int>();
    public List<int> blocksHideIndex = new List<int>();
    public int[] pieces = new int[3];

    public bool DestroyLine = false;
    [HideInInspector]
    public string dataPosition;
    [HideInInspector]
    public string dataPieces;
    [HideInInspector]
    public string dataPiecesShape;
    [HideInInspector]
    public string datablocksHideIndex;
    [HideInInspector]
    public string datablocksShowIndex;
    [HideInInspector]
    public string dataBombsIndex;
    public void Save()
    {

        dataPieces = JsonArray.ToJson<int>(pieces);

        datablocksHideIndex = JsonArray.ToJson<int>(blocksHideIndex.ToArray());
        datablocksShowIndex = JsonArray.ToJson<int>(blocksShowIndex.ToArray());
    }

    public void Load()
    {
        if (!string.IsNullOrEmpty(dataPieces))
        {
            pieces = JsonArray.FromJson<int>(dataPieces);
        }
    }

}



[System.Serializable]
public class GameSetting
{
    public bool muteMusic;
    public bool muteSound;
    public bool tutorialClassic;
    public bool tutorialHexa;
    public float fillTimer = 0;
}
