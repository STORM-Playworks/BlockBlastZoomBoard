using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EffectDestroyBlock3D : MonoHandler
{

    private bool jump = false;
    private bool isUpdate = false;
    private Rigidbody rigidbody;
    [SerializeField]
    private Vector3 jumpForce;
    [SerializeField]
    private Vector3 m_EulerAngleVelocity;
    private Rigidbody GetRigidbody {
        get
        {
            if (rigidbody == null) rigidbody = GetComponent<Rigidbody>();
            return rigidbody;
        }
    }
   public void Acitve()
    {
        jump = true;
        isUpdate = true;
    }

    private void OnDisable()
    {
        isUpdate = false;
        jump = false;
        GetRigidbody.useGravity = false;
        GetRigidbody.velocity = Vector3.zero;
        transform.rotation = Quaternion.identity;
    }

    private void Update()
    {
        if (!isUpdate) return;
        if (jump)
        {
            float x = Random.Range(-100, 100);
            jumpForce.x = x;
            GetRigidbody.AddForce(jumpForce);
            GetRigidbody.useGravity = true;
            jump = false;
        }

        Quaternion deltaRotation = Quaternion.Euler(m_EulerAngleVelocity * Time.deltaTime);
        GetRigidbody.MoveRotation(GetRigidbody.rotation * deltaRotation);
    }

#if UNITY_EDITOR
    public override void GUIEditor()
    {
        if (GUILayout.Button("Jump")) Acitve();
        base.GUIEditor();
    }

#endif
}
