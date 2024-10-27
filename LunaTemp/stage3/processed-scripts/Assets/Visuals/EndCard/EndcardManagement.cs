using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndcardManagement : MonoBehaviour
{

    [SerializeField] private GameObject endcard;
    
    [SerializeField] private float automaticRedirectTimeWindow = 6f;
    private float currentRedirectTimeWindow;
    
    [LunaPlaygroundField("Endcard Autoredirect", 14, "Game Settings")]
    [SerializeField] private bool autoRedirectEndcard;
    
    [LunaPlaygroundField("Config Name", 15, "Game Settings")]
    [SerializeField] private string configName = "default";

    public static EndcardManagement Instance;
    
    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(Instance);
        }
        else
        {
            Instance = this;
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        Luna.Unity.Analytics.LogEvent("config_" + configName, 0);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButton(0))
        {
            currentRedirectTimeWindow = automaticRedirectTimeWindow;
        }
        else
        {
            currentRedirectTimeWindow -= Time.deltaTime;
        }
    }
    
    public void ActivateEndcard()
    {
        endcard.SetActive(true);

        if (autoRedirectEndcard)
        {
            if (currentRedirectTimeWindow > 0)
            {
                SendToStore();
            }
            else
            {
                Luna.Unity.Analytics.LogEvent("FailedAutoRedirect", 0);
            }
        }
    }
    
    public void SendToStore()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
