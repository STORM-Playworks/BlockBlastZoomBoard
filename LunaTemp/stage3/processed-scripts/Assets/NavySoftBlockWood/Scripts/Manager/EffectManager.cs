using ScreenFrameWork;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EffectManager : SingletonComponent<EffectManager>
{

    private List<EffectObj> destroyBlocks = new List<EffectObj>();
    private List<EffectObj> destroyBlocksHexa = new List<EffectObj>();
    private List<BoosterMoveDestroy> swordsDestroy = new List<BoosterMoveDestroy>();
    private List<BoosterMoveDestroy> ArrowsDestroy = new List<BoosterMoveDestroy>();
    private List<BombItem> bombItems = new List<BombItem>();
    private List<EffectObj> effectsTime = new List<EffectObj>();
    private List<Rigidbody2D> scoresTextEffect = new List<Rigidbody2D>();
    public EffectObj RegisterEffectDestroyBlock()
    {
        for (int i = 0; i < destroyBlocks.Count; i++)
        {
            if (!destroyBlocks[i].gameObject.activeInHierarchy)
            {
                destroyBlocks[i].gameObject.SetActive(true);
                return destroyBlocks[i];
            }
        }


        EffectObj effDestroy = Instantiate(PrefabsManager.Instance.effDestroyBlockPrefab);
        effDestroy.transform.SetParent(transform, false);
        effDestroy.Setup();
        effDestroy.gameObject.SetActive(true);
        destroyBlocks.Add(effDestroy);
        return effDestroy;
    }
    public Rigidbody2D RegisterScoreTextEffect()
    {
        for (int i = 0; i < scoresTextEffect.Count; i++)
        {
            if (!scoresTextEffect[i].gameObject.activeInHierarchy)
            {
                scoresTextEffect[i].gameObject.SetActive(true);
                return scoresTextEffect[i];
            }
        }


        Rigidbody2D scoreText = Instantiate(PrefabsManager.Instance.scoreTextEffect);
        scoreText.transform.SetParent(transform, false);
        scoreText.gameObject.SetActive(true);
        scoresTextEffect.Add(scoreText);
        return scoreText;
    }
    public EffectObj RegisterEffectDestroyBlockHexa()
    {
        for (int i = 0; i < destroyBlocksHexa.Count; i++)
        {
            if (!destroyBlocksHexa[i].gameObject.activeInHierarchy)
            {
                destroyBlocksHexa[i].gameObject.SetActive(true);
                return destroyBlocksHexa[i];
            }
        }


        EffectObj effDestroy = Instantiate(PrefabsManager.Instance.effDestroyBlockHexaPrefab);
        effDestroy.transform.SetParent(transform, false);
        effDestroy.Setup();
        effDestroy.gameObject.SetActive(true);
        destroyBlocksHexa.Add(effDestroy);
        return effDestroy;
    }

    public EffectObj RegisterEffectTime()
    {
        for (int i = 0; i < effectsTime.Count; i++)
        {
            if (!effectsTime[i].gameObject.activeInHierarchy)
            {
                effectsTime[i].gameObject.SetActive(true);
                return effectsTime[i];
            }
        }


        EffectObj effTime = Instantiate(PrefabsManager.Instance.effectTime);
        effTime.transform.SetParent(transform, false);
        effTime.Setup();
        effTime.gameObject.SetActive(true);
        effectsTime.Add(effTime);
        return effTime;
    }

    public BoosterMoveDestroy RegisterSwordObj()
    {
        for (int i = 0; i < swordsDestroy.Count; i++)
        {
            if (!swordsDestroy[i].gameObject.activeInHierarchy)
            {
                swordsDestroy[i].gameObject.SetActive(true);
                return swordsDestroy[i];
            }
        }


        BoosterMoveDestroy sword = Instantiate(PrefabsManager.Instance.swordPrefab);
        sword.transform.SetParent(transform, false);
        sword.gameObject.SetActive(true);
        sword.Setup();
        swordsDestroy.Add(sword);
        return sword;
    }


    public BoosterMoveDestroy RegisterArrowObj()
    {
        for (int i = 0; i < ArrowsDestroy.Count; i++)
        {
            if (!ArrowsDestroy[i].gameObject.activeInHierarchy)
            {
                ArrowsDestroy[i].gameObject.SetActive(true);
                return ArrowsDestroy[i];
            }
        }


        BoosterMoveDestroy arrow = Instantiate(PrefabsManager.Instance.arrowPrefab);
        arrow.transform.SetParent(transform, false);
        arrow.Setup();
        arrow.gameObject.SetActive(true);
        ArrowsDestroy.Add(arrow);
        return arrow;
    }

    public BombItem RegisterBombItem()
    {
        for (int i = 0; i < bombItems.Count; i++)
        {
            if (!bombItems[i].gameObject.activeInHierarchy)
            {
                bombItems[i].gameObject.SetActive(true);
                return bombItems[i];
            }
        }


        BombItem bomb = Instantiate(PrefabsManager.Instance.bombItemPrefab);
        bomb.transform.SetParent(transform, false);
       
        bomb.gameObject.SetActive(true);
        bombItems.Add(bomb);
        return bomb;
    }
}
