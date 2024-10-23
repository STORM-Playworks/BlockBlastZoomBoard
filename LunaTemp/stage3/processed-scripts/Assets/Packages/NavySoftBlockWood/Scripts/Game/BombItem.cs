using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class BombItem : MonoBehaviour
{
    [SerializeField]
    private GameObject bugStandObj;
 

    [SerializeField]
    private ParticleSystem eff_warning;
    [SerializeField]
    private TextMeshProUGUI stepText;


    private BlockBoard blockBoard;

    private int step;
    private int stepWarning;

    private BombDetail bombDetail;

    private bool destroy = false;
    private void RemoveBomb()
    {
        gameObject.SetActive(false);

        GameManager.Instance.GetCurrentDataMode.bombDetails.Remove(bombDetail);
        //GameManager.Instance.SaveDataMode();
    }


    public void Setup(BlockBoard blockBoard, int step  ,BombDetail bombDetail)
    {
        this.bombDetail = bombDetail;
        this.blockBoard = blockBoard;
        this.step = step;
        UpdateStepBomb(0);
        bugStandObj.gameObject.SetActive(true);
        destroy = false;
        eff_warning.gameObject.SetActive(false);
        stepWarning = Mathf.FloorToInt((float)GameManager.MAX_STEPS_BOMB_ITEM / 3);

    }

    public void UpdateStepBomb(int value)
    {
        step -= value;

        if (step <= stepWarning)
        {
            //Show Warning
            if (!eff_warning.gameObject.activeInHierarchy)
            {
                eff_warning.gameObject.SetActive(true);
                eff_warning.Play();
            }
        }

        if (step <= 0)
        {
            //Destroy Block and Game Over
            PlayingManager.Instance.DestroyOneBlock(blockBoard);
            bugStandObj.SetActive(false);
            GameManager.Instance.VisibleButton(false);
            Timer.Schedule(this, 0.7f, () =>
            {
                if (destroy) return;
                GameManager.Instance.GameOverProccess();
                DestroyBomb(destroy);
            });


        }
        stepText.text = step.ToString();
    }


    public void DestroyBomb(bool destroy =false)
    {
        this.destroy = destroy;
       
        if (step <= 0)
        {
            Timer.Schedule(this, 1.5f, () => {
                RemoveBomb();
            });
        }
        else
        {
          
            Timer.StopSchedule(this);
            RemoveBomb();
        }
    }

 
}
