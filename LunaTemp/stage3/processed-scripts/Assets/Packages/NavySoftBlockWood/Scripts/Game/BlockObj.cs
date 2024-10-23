using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
 
[System.Serializable]
public class BottomObj
{
    public List<GameObject> objs = new List<GameObject>();
    public int positionY = 0;


}
public class BlockObj : MonoBehaviour
{
    [SerializeField]
    private SpriteRenderer block;
    [SerializeField]
    private SpriteRenderer blockDestroyLine;
    public bool canMoveBlock { get; set; }

    private int sortingOrder;
    public void Setup()
    {
        sortingOrder = block.sortingOrder;
    }

    public void SetBlockImage(Sprite image)
    {
        block.sprite = image;
    }

    public void SetBlockColor([Bridge.Ref] Color newCol)
    {
        block.color = newCol;
    }
    
    public void BlockCanMove()
    {
        canMoveBlock = true;
    }

    public void SetSelected(bool selected)
    {

        block.sortingOrder = block.sortingOrder + ((selected) ? 20 : -20);
    }

    public void SetSortingOrder(int sorting)
    {
        block.sortingOrder = sorting;
        blockDestroyLine.sortingOrder = sorting+1;
    }
    public void VisibleBlockDestroyLine(bool visible)
    {
        blockDestroyLine.gameObject.SetActive(visible);
        block.gameObject.SetActive(!visible);
    }


    

    
}

