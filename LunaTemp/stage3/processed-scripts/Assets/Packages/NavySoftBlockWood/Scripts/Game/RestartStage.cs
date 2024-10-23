using UnityEngine;
using UnityEngine.SceneManagement;

public class RestartStage : MonoBehaviour
{
    public void RestartCurrentStage()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

    public void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            RestartCurrentStage();
        }
    }
}
