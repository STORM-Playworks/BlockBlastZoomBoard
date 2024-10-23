using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoosterMoveDestroy : MonoHandler
{
    [SerializeField]
    private float speed = 1;

    [SerializeField]
    private bool horizontal = false;

    private Rigidbody2D rig2D;

    private bool isUpdate = false;
   
 

    public void Setup()
    {
        rig2D = GetComponent<Rigidbody2D>();
    }
    private void OnEnable()
    {
        isUpdate = false;
    }

    public void Move([Bridge.Ref] Vector3 position)
    {
        transform.position = position;
        isUpdate = true;
       

        Timer.Schedule(this, 0.8f, () => {
            PlayingManager.Instance.SaveNewStepWhenUseBooster();
            StartCoroutine(PieceManager.Instance.CheckPieceCanPlaceBoard());
        });
    }
    private void Update()
    {
        if (!isUpdate) return;
        if (horizontal)
        {
            rig2D.velocity = transform.right * speed;
        }
        else
        {
            rig2D.velocity = transform.up * speed;
        }
    }

   
    private void OnTriggerEnter2D(Collider2D collision)
    {
        BlockBoard blockBoard = collision.GetComponent<BlockBoard>();
        if (blockBoard != null)
        {


            if (!blockBoard.CanPlace)
            {
                PlayingManager.Instance.DestroyOneBlock(blockBoard);
        
            }
         
        }
    }

    public override void GUIEditor()
    {
        if(GUILayout.Button("Test"))
        {
            Move(transform.position);
        }
        base.GUIEditor();
    }
}
