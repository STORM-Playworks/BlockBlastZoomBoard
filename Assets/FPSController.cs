using UnityEngine;
using TMPro; // Importing TextMeshPro namespace

public class FPSController : MonoBehaviour
{
    [SerializeField] private TMP_Text fpsText; // Reference to the TMP_Text component

    // Define possible frame rates
    private readonly int[] frameRates = { 10, 20, 30, 40, 50, 60 };

    private float deltaTime = 0.0f;

    void Update()
    {
        // Listen for number key presses from 1 to 6
        for (int i = 0; i < frameRates.Length; i++)
        {
            if (Input.GetKeyDown(KeyCode.Alpha1 + i))
            {
                SetFrameRate(frameRates[i]);
            }
        }

        // Calculate and display the current FPS
        deltaTime += (Time.unscaledDeltaTime - deltaTime) * 0.1f;
        float fps = 1.0f / deltaTime;
        fpsText.text = string.Format("FPS: {0:0.}", fps);
    }

    void SetFrameRate(int frameRate)
    {
        // Set the target frame rate
        Application.targetFrameRate = frameRate;
        Debug.Log("Frame rate set to: " + frameRate);
    }
}