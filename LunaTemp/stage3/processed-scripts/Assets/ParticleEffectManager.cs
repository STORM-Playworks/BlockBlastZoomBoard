using UnityEngine;
using System.Collections.Generic;

public class ParticleEffectManager : MonoBehaviour
{
    // Enum representing effect types
    public enum EffectType
    {
        Dust,
        BlockPlace
    }

    // Singleton instance
    public static ParticleEffectManager Instance { get; private set; }

    // Particle system prefabs
    [SerializeField]
    private GameObject dustPrefab;
    [SerializeField]
    private GameObject blockPlacePrefab;

    // Initial amount of objects to be spawned
    [SerializeField]
    private int initialPoolSize = 10;

    // Dictionary to hold the particle pools
    private Dictionary<EffectType, Queue<GameObject>> particlePools;

    private void Awake()
    {
        // Enforce the singleton pattern
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
            InitializePools();
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void InitializePools()
    {
        particlePools = new Dictionary<EffectType, Queue<GameObject>>();

        InitializePool(EffectType.Dust, dustPrefab);
        InitializePool(EffectType.BlockPlace, blockPlacePrefab);
    }

    private void InitializePool(EffectType effectType, GameObject prefab)
    {
        Queue<GameObject> pool = new Queue<GameObject>();

        for (int i = 0; i < initialPoolSize; i++)
        {
            GameObject particleObject = Instantiate(prefab);
            particleObject.SetActive(false);
            pool.Enqueue(particleObject);
        }

        particlePools[effectType] = pool;
    }

    public GameObject RequestParticleSystem(EffectType effectType, [Bridge.Ref] Vector3 position, [Bridge.Ref] Quaternion rotation)
    {
        GameObject particleObject;
        Queue<GameObject> pool = particlePools[effectType];

        if (pool.Count > 0)
        {
            particleObject = pool.Dequeue();
            particleObject.transform.position = position;
            particleObject.transform.rotation = rotation;
            particleObject.SetActive(true);
        }
        else
        {
            switch (effectType)
            {
                case EffectType.Dust:
                    particleObject = Instantiate(dustPrefab, position, rotation);
                    break;
                case EffectType.BlockPlace:
                    particleObject = Instantiate(blockPlacePrefab, position, rotation);
                    break;
                default:
                    particleObject = null;
                    break;
            }
        }

        return particleObject;
    }

    public void ReturnParticleSystem(EffectType effectType, GameObject particleObject)
    {
        particleObject.SetActive(false);
        particlePools[effectType].Enqueue(particleObject);
    }
}
