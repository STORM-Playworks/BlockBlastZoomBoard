using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlockColorApplier : MonoBehaviour
{
    public float rayLength = 5.0f;

    // The direction in which the ray will be cast
    public Vector2 rayDirection = Vector2.right;

    public string targetTag = "Block";

    public BlockColor currentColor;
    public BlockGemColor currentGemColor;

    [SerializeField] private BlockBoard[] previewBlocks;
    [SerializeField] private BlockBoard[] previewGemBlocks;
    private bool deleteMode;

    private void Start()
    {
        foreach (var b in previewBlocks)
        {
            b.SetBlockImage(SpriteManager.Instance.GetSpriteByColor(b.color));
        }
    }

    void Update()
    {
        foreach (var b in previewBlocks)
        {
            b.ShowPlaceBlock(currentColor == b.color);
        }
        
        foreach (var b in previewGemBlocks)
        {
            b.ShowPlaceBlock(currentGemColor == b.gemColor);
        }
        
        BlockColor col = currentColor;
        BlockGemColor gemCol = currentGemColor;
        if (Input.GetMouseButton(1))
        {
            col = BlockColor.Empty;
            gemCol = BlockGemColor.Empty;
        }
        
        
        if (Input.GetMouseButton(0) || Input.GetMouseButton(1))
        {
            // Get the mouse position in world space
            Vector2 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);

            // Perform the Raycast
            RaycastHit2D hit = Physics2D.Raycast(mousePosition, Vector2.zero, rayLength);

            // If the raycast hits something
            if (hit.collider != null)
            {
                // Check if the object has the specified tag
                if (hit.collider.CompareTag(targetTag))
                {
                    // Check if the object has a BoxCollider2D
                    BlockBoard block = hit.collider.GetComponent<BlockBoard>();

                    bool previewBlock = false;
                    foreach (var b in previewBlocks)
                    {
                        if (block == b)
                        {
                            currentColor = block.color;
                            previewBlock = true;
                            break;
                        }
                    }

                    if (!previewBlock)
                    {
                        foreach (var b in previewGemBlocks)
                        {
                            if (block == b)
                            {
                                currentGemColor = block.gemColor;
                                previewBlock = true;
                                break;
                            }
                        }
                    }

                    
                    if(previewBlock) return;
                    
                    if (block != null)
                    {
                        if (col == BlockColor.Empty)
                        {
                            block.VisibleBlock(false);
                        }
                        else
                        {
                            block.VisibleBlock(true);
                            block.color = col;
                            block.SetBlockImage(SpriteManager.Instance.GetSpriteByColor(block.color));
                        }
                        
                        block.SetBlockGem(gemCol);
                    }
                }
            }
        }
        
        if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            currentColor = BlockColor.Purple;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha2))
        {
            currentColor = BlockColor.Blue;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha3))
        {
            currentColor = BlockColor.Cyan;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha4))
        {
            currentColor = BlockColor.Green;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha5))
        {
            currentColor = BlockColor.Yellow;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha6))
        {
            currentColor = BlockColor.Orange;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha7))
        {
            currentColor = BlockColor.Red;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha8))
        {
            currentColor = BlockColor.White;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha9))
        {
            currentColor = BlockColor.Brown;
        }
        else if (Input.GetKeyDown(KeyCode.Alpha0))
        {
            currentColor = BlockColor.Empty;
        }
    }
}
