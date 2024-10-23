using System;
using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SpriteManager : SingletonComponent<SpriteManager>
{
    [SerializeField]
    private List<Sprite> blocksContainer3D = new List<Sprite>();

    [SerializeField]
    private List<Sprite> blocksContainer2D = new List<Sprite>();

    [SerializeField]
    private List<Sprite> blockShow2D = new List<Sprite>();
    [SerializeField]
    private List<Sprite> blockShow3D = new List<Sprite>();

    [SerializeField]
    private List<Sprite> textEffects = new List<Sprite>();

    [SerializeField] 
    private Sprite[] blockColorSprites;

    [SerializeField] 
    private Sprite[] blockGemSprites;
    
    public List<Sprite> GetBlockShow2D => blockShow2D;

    public List<Sprite> GetBlocksShow3D => blockShow3D;

    public void ShowTextEffect(Image textImage, int index,[Bridge.Ref] Vector3 position)
    {
        if (index > textEffects.Count - 1) index = textEffects.Count - 1;
        textImage.sprite = textEffects[index];
    }


    public void SetupImage()
    {
        blockShow2D.Clear();
        blockShow3D.Clear();
        if (GameManager.Instance.GetBoardType== BoardType.Hexa)
        {
            blockShow2D.Add(blocksContainer2D[2]);
            blockShow2D.Add(blocksContainer2D[3]);

            blockShow3D.Add(blocksContainer3D[2]);
            blockShow3D.Add(blocksContainer3D[3]);
        }
        else
        {
            blockShow2D.Add(blocksContainer2D[0]);
            blockShow2D.Add(blocksContainer2D[1]);

            blockShow3D.Add(blocksContainer3D[0]);
            blockShow3D.Add(blocksContainer3D[1]);
        }
    }

    public Sprite GetSpriteByColor(BlockColor col)
    {
        Sprite spr = blockColorSprites[7];

        switch (col)
        {
            case BlockColor.Purple:
                spr = blockColorSprites[0];
                break;
            case BlockColor.Blue:
                spr = blockColorSprites[1];
                break;
            case BlockColor.Cyan:
                spr = blockColorSprites[2];
                break;
            case BlockColor.Green:
                spr = blockColorSprites[3];
                break;
            case BlockColor.Yellow:
                spr = blockColorSprites[4];
                break;
            case BlockColor.Orange:
                spr = blockColorSprites[5];
                break;
            case BlockColor.Red:
                spr = blockColorSprites[6];
                break;
            case BlockColor.White:
                spr = blockColorSprites[7];
                break;
            case BlockColor.Brown:
                spr = blockColorSprites[8];
                break;
        }

        return spr;
    }

    public Sprite GetGemSpriteByColor(BlockGemColor col)
    {
        Sprite spr = null;
        
        switch (col)
        {
            case BlockGemColor.Empty:
                spr = null;
                break;
            case BlockGemColor.Cyan:
                spr = blockGemSprites[0];
                break;
            case BlockGemColor.Red:
                spr = blockGemSprites[1];
                break;
            case BlockGemColor.Purple:
                spr = blockGemSprites[2];
                break;
        }

        return spr;
    }
}

public enum BlockColor
{
    Purple,
    Blue,
    Cyan,
    Green,
    Yellow,
    Orange,
    Red,
    White,
    Brown,
    Empty
}

public enum BlockGemColor
{
    Empty,
    Cyan,
    Red,
    Purple
}
