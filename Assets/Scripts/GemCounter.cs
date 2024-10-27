using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GemCounter : MonoBehaviour
{
    [SerializeField] private TMP_Text countText;
    [SerializeField] private Image gemIcon;
    [SerializeField] private int neededAmount;
    [SerializeField] private int currentAmount;
    [SerializeField] private float receiveAnimDuration = 0.5f;
    [SerializeField] private float flyOverDuration = 1f;
    private Vector3 iconScale;
    
    // Start is called before the first frame update
    void Start()
    {
        currentAmount = neededAmount;
        iconScale = gemIcon.transform.localScale;
        UpdateText();
    }

    private void UpdateText()
    {
        countText.text = currentAmount.ToString();
    }

    private void ReduceCount()
    {
        currentAmount--;
        UpdateText();
    }

    public void ReceiveGem(GameObject receivedGem, float delay, int confirmSortOrder)
    {
        GameObject copiedGem = Instantiate(receivedGem, receivedGem.transform.position, Quaternion.identity);
        
        //Usually sortingOrder would be copied on instantiate, but not in Luna, lovely
        //So we have to assign it again for Luna
        //Also, we can't have the instantiation variable be SpriteRenderer, only GameObject,
        //or Luna gets a null error when trying to reference it, so we can't avoid this GetComponent
        SpriteRenderer tempSR = copiedGem.GetComponent<SpriteRenderer>();
        tempSR.sortingOrder = confirmSortOrder;
        tempSR.color = Color.white;

        Sequence seq = DOTween.Sequence();

        seq
            .AppendInterval(delay)
            .Append(copiedGem.transform.DOMove(gemIcon.transform.position, flyOverDuration).SetEase(Ease.InQuad))
            .Join(copiedGem.transform.DOScale(1.5f, flyOverDuration))
            .AppendCallback(() => ResetIconSize())
            .AppendCallback(() => ReduceCount())
            .AppendCallback(() => copiedGem.SetActive(false))
            .Append(gemIcon.transform.DOScale(iconScale * 1.2f, receiveAnimDuration).SetLoops(2, LoopType.Yoyo))
            .Join(tempSR.DOColor(Color.yellow, receiveAnimDuration).SetLoops(2, LoopType.Yoyo));
    }

    private void ResetIconSize()
    {
        gemIcon.transform.DOKill();
        gemIcon.transform.localScale = iconScale;
    }
    
    public bool CheckMatch(Sprite spr)
    {
        return (gemIcon.sprite == spr);
    }
}
