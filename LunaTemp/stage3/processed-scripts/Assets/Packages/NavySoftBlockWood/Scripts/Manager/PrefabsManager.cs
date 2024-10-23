using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PrefabsManager : SingletonComponent<PrefabsManager>
{
    public BlockObj blockPrefab;
    public BlockObj blockHexaPrefab;
    public EffectObj effDestroyBlockPrefab;
    public EffectObj effDestroyBlockHexaPrefab;
    public BoosterMoveDestroy swordPrefab;
    public Rigidbody2D scoreTextEffect;
    public BoosterMoveDestroy arrowPrefab;
    public BombItem bombItemPrefab;
    public EffectObj effectTime;
 
    public List<Piece> piecesClassicPrefab;
    public List<Piece> piecesHexaPrefab;

#if UNITY_EDITOR
    [SerializeField]
    private GameObject piecesContainer;
    [SerializeField]
    private GameObject piecesHexaContainer;
    [SerializeField]
    private float scalePiece =.6f;
    public override void GUIEditor()
    {
      
        if (GUILayout.Button("Get All Piece Classic Shape"))
        {
            piecesClassicPrefab.Clear();
            for (int i = 0; i < piecesContainer.transform.childCount; i++)
            {
                Piece piece = piecesContainer.transform.GetChild(i).GetComponent<Piece>();
                piece.transform.localScale = Vector3.one * scalePiece;
                piecesClassicPrefab.Add(piece);
            }
        }
        if (GUILayout.Button("Get All Piece Hexa Shape"))
        {
            piecesHexaPrefab.Clear();
            for (int i = 0; i < piecesHexaContainer.transform.childCount; i++)
            {
                Piece piece = piecesHexaContainer.transform.GetChild(i).GetComponent<Piece>();
                piece.transform.localScale = Vector3.one * scalePiece;
                piecesHexaPrefab.Add(piece);
            }
        }

     


        base.GUIEditor();
    }
#endif

}
