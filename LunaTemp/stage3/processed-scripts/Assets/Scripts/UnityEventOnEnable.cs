using UnityEngine;
using UnityEngine.Events;

public class UnityEventOnEnable : MonoBehaviour
{
    [SerializeField] private UnityEvent events;

    // Start is called before the first frame update
    void OnEnable()
    {
        events?.Invoke();
    }

}
