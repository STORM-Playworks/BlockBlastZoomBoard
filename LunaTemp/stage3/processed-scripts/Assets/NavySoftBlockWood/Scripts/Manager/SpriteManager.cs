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
}
