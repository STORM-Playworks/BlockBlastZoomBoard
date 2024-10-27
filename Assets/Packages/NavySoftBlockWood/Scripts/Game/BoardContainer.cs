using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DG.Tweening;
using UnityEngine;

public class BoardContainer : MonoHandler
{
    [SerializeField]
    private int width = 8;
    [SerializeField]
    private int height = 12;
    [SerializeField]
    private List<BlockBoard> blocks = new List<BlockBoard>();
    [SerializeField]
    private List<BlockBoard> allBlocksInBoard = new List<BlockBoard>();
    [SerializeField]
    private float blockScale = 0;
    [SerializeField]
    private Transform placeBlockPoint;
    [SerializeField]
    private GameObject blockPrefab;
    [SerializeField]
    private Animation shake;

    [SerializeField] private GemCounter[] gemCounters;

    [SerializeField] private int[] gridSizeSteps;
    private int currentGridSizeIndex;


    public int GetWidth => width;
    public int GetHeight => height;
    public List<BlockBoard> GetBlocks =>   blocks;
    public List<BlockBoard> GetAllBlocks => allBlocksInBoard;
    public float GetBlockScale => blockScale;

    [Header("Animation")] 
    [SerializeField] 
    public bool AnimateBoardGrow;
    [SerializeField] private float blockRiseTime;
    [SerializeField] private float[] totalBlockAnimationTimes;
    private int currentBlockAnimationTimeIndex = 0;
    [SerializeField] private AnimationCurve blockLandAnimCurve;
    private bool resizeInProgress;
    [SerializeField] 
    private CameraController cameraController;
    
    [Header("Border control")] 
    [SerializeField] 
    private SpriteRenderer border;
    [SerializeField] 
    private float borderSizePerUnit = 1.02f;
    [SerializeField] 
    private float borderSizeOffset = 0.18f;
    [SerializeField] 
    private float boardOffsetPerStep = 0.1f;


    private void Start()
    {
        if (gridSizeSteps.Length > 0)
        {
            ChangeGridSize(gridSizeSteps[0]);
        }
    }

    public async Task NextGridSize()
    {
        if (resizeInProgress) return;
        
        currentGridSizeIndex++;
        if (currentGridSizeIndex < gridSizeSteps.Length)
        {
            if (!AnimateBoardGrow)
            {
                ChangeGridSize(gridSizeSteps[currentGridSizeIndex]);
            }
            else
            {
                resizeInProgress = true;
                Vector2 nextBlockPos = GetNextBlockPos();
                float animDuration = blockRiseTime *2f;
                float animScale = 1.25f;
                
                for (int i = gridSizeSteps[currentGridSizeIndex-1] + 2; i <= gridSizeSteps[currentGridSizeIndex]; i += 2)
                {
                    List<BlockBoard> blocksToAnimate = GetBlocks;
                    ChangeGridSize(i);
                    blocksToAnimate = GetBlocks.Except(blocksToAnimate).ToList();
                    
                    foreach (var block in blocksToAnimate)
                    {
                        Vector3 newPos = GetBlockPosition(block.x, block.y, nextBlockPos);
                        newPos = Vector3.Scale(newPos, Vector3.one * animScale);
                        block.transform.DOLocalMove(newPos, animDuration / 2f)
                            .SetEase(Ease.OutBack)
                            .SetLoops(2, LoopType.Yoyo)
                            .OnComplete(() => CameraShake());
                        block.MultiplySortingOrder(2);
                        
                        block.transform.DOScale(animScale, animDuration / 2f)
                            .SetEase(Ease.OutBack)
                            .SetLoops(2, LoopType.Yoyo)
                            .OnComplete(() => block.OnBlockLand(0.5f, true, block.transform.position));
                    }
                    await Task.Delay((int)(1000* animDuration / 2f));

                    print($"change to size {i}");
                }
                resizeInProgress = false;
            }
        }
        
        await Task.Delay((int)(1000* blockRiseTime));
    }

    private IEnumerator SetBlockScale()
    {
        yield return new WaitForSeconds(.04f);
        blockPrefab.transform.SetParent(placeBlockPoint, true);
        blockScale = blockPrefab.transform.localScale.x * transform.localScale.x;
    }

    private void ChangeGridSize(int newSize)
    {
        foreach (var b in allBlocksInBoard)
        {
            b.ToggleActiveBlockGFX(false);
        }

        blocks = MinimizeGrid(allBlocksInBoard, newSize);
        
        foreach (var b in blocks)
        {
            b.ToggleActiveBlockGFX(true);
        }

        ScaleBorder(newSize);
    }
    
    List<BlockBoard> MinimizeGrid(List<BlockBoard> originalGrid, int newGridSize)
    {
        List<BlockBoard> centerBlocks = new List<BlockBoard>();

        // Find the starting index for the center 3x3 grid
        int gridSize = 15;
        int startX = (gridSize - newGridSize) / 2;
        int startY = (gridSize - newGridSize) / 2;

        for (int y = startY; y < startY + newGridSize; y++)
        {
            for (int x = startX; x < startX + newGridSize; x++)
            {
                int index = y * gridSize + x;
                centerBlocks.Add(originalGrid[index]);
            }
        }

        return centerBlocks;
    }

    private void ScaleBorder(int blockAmount)
    {
        float borderSize = borderSizePerUnit * blockAmount + borderSizeOffset + (boardOffsetPerStep * currentGridSizeIndex);
        border.size = borderSize * Vector2.one;
    }



    public IEnumerator BlocksFall()
    {
        yield return new WaitForSeconds(0.4f);
        int step = 0;
        for (int i = 0; i < width ; i++)
        {
            for (int j = 0; j < width; j++)
            {
                if (!blocks[(width * j) + i].CanPlace)
                {
                    step++;

                }
                BlockBoard blockBoard = blocks[(width * j) + i];
                Debug.Log("Hide 2");
                blockBoard.VisibleBlock(false);
                PlayingManager.Instance.gridInGame[blockBoard.x, blockBoard.y] = null;
            }

            for (int h = 0; h <  step; h++)
            {
                BlockBoard blockBoard = blocks[(width * h) + i];
                blockBoard.VisibleBlock(true);
                blockBoard.ShowPlaceBlock(true);
                PlayingManager.Instance.gridInGame[blockBoard.x, blockBoard.y] = blockBoard;
                yield return new WaitForSeconds(0.01f);
            }
           
           
            step = 0;
        }

        yield return new WaitForSeconds(0.1f);

        PlayingManager.Instance.DestroyBlocksFall();
    }

    public void ShakeBoard()
    {
        if(shake!=null)
        shake.Play();
    }
    public void Reset()
    {
        StartCoroutine(SetBlockScale());

        Debug.Log("Hide 3");
        for (int i = 0; i < blocks.Count; i++)
        { 
            //blocks[i].VisibleBlock(false);
            
            blocks[i].VisibleHightLight(false);
            //blocks[i].SetBlockImage(SpriteManager.Instance.GetBlockShow2D[0]);
            blocks[i].SetBlockImage(SpriteManager.Instance.GetSpriteByColor(blocks[i].color));
        }
    }

    public async Task BoardGrowBlockAnimation()
    {
        await cameraController.UpdateCameraZoom();
        
        Vector2 nextBlockPos = GetNextBlockPos();
        List<BlockBoard> spiralBlocks = GetBlocks;
        spiralBlocks = SortInSpiralOrder(spiralBlocks);

        if (currentBlockAnimationTimeIndex >= totalBlockAnimationTimes.Length)
        {
            Debug.Log("Win!");
            EndcardManagement.Instance.ActivateEndcard();
            PlayingManager.Instance.IsGameOver = true;
            return;
        }
        
        float totalBlockAnimationTime = totalBlockAnimationTimes[currentBlockAnimationTimeIndex];
        currentBlockAnimationTimeIndex++;
        
        // Delay between blocks in milliseconds
        float delayBetweenBlocks = totalBlockAnimationTime / spiralBlocks.Count;

        float animDelay = delayBetweenBlocks;
        
        for (var index = 0; index < spiralBlocks.Count; index++)
        {
            var block = spiralBlocks[index];
            block.transform.DOScale(1.5f, blockRiseTime).SetEase(Ease.OutElastic).SetDelay(animDelay);
            Vector3 newPos = GetBlockPosition(block.x, block.y, nextBlockPos);
            newPos = Vector3.Scale(newPos, Vector3.one * 1.5f);
            block.transform.DOLocalMove(newPos, blockRiseTime * 0.8f).SetDelay(animDelay);
            block.MultiplySortingOrder(2);

            if (block.gemColor != BlockGemColor.Empty)
            {
                CollectGem(block.gemSR, animDelay);
                block.SetBlockGem(BlockGemColor.Empty);
            }

            animDelay += delayBetweenBlocks;
        }

        await Task.Delay((int)((totalBlockAnimationTime + delayBetweenBlocks) * 1000));

        int outerBlocksAmount = (width * 4) - 3;
        int currentBlockCount = 0;
        
        foreach (var block in spiralBlocks)
        {
            currentBlockCount++;
            bool spawnParticle = (currentBlockCount <= outerBlocksAmount);

            block.transform.DOScale(1f, blockRiseTime).SetEase(blockLandAnimCurve);
            Vector3 newPos = GetBlockPosition(block.x, block.y, nextBlockPos);
            block.transform.DOLocalMove(newPos, blockRiseTime).SetEase(blockLandAnimCurve)
                .OnComplete(() => block.OnBlockLand(0.5f, spawnParticle, newPos));
        }
        
        await Task.Delay((int)((blockRiseTime * 0.7f) * 1000));

        
        CameraShake();
    }

    private void CollectGem(SpriteRenderer gem, float delay)
    {
        bool collected = false;
        foreach (var gemCollector in gemCounters)
        {
            if (gemCollector.CheckMatch(gem.sprite))
            {
                collected = true;
                gemCollector.ReceiveGem(gem.gameObject, delay, gem.sortingOrder);
            }

            if (collected) break;
        }
    }

    [Header("Camere shake")] 
    [SerializeField]
    private float duration = 0.25f;

    [SerializeField] 
    private Vector3 strength = Vector3.one;
    
    [SerializeField]
    private int vibrato = 10;

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.H))
        {
            CameraShake();
        }
    }

    private void CameraShake()
    {
        Camera.main.DOKill();
        Camera.main.DOShakePosition(duration, strength, vibrato);
    }


    // public IEnumerator BoardGrowBlockAnimation()
    // {
    //     Vector2 nextBlockPos = GetNextBlockPos();
    //     List<BlockBoard> spiralBlocks = GetBlocks;
    //     spiralBlocks = SortInSpiralOrder(spiralBlocks);
    //
    //     float delayBetweenBlocks = totalBlockAnimationTime / spiralBlocks.Count;
    //     print("delayy" + delayBetweenBlocks);
    //
    //     currentTimer = 0;
    //     tempTimerRun = true;
    //     StartCoroutine(TimerBlah());
    //
    //     foreach (var block in spiralBlocks)
    //     {
    //         block.transform.DOScale(1.5f, blockRiseTime).SetEase(Ease.OutElastic);
    //         Vector3 newPos = GetBlockPosition(block.x, block.y, nextBlockPos);
    //         newPos = Vector3.Scale(newPos, Vector3.one * 1.5f);
    //         block.transform.DOLocalMove(newPos, blockRiseTime * 0.8f);
    //         block.MultiplySortingOrder(2);
    //         print((int)(delayBetweenBlocks * 1000));
    //         //yield return new WaitForSeconds(delayBetweenBlocks);
    //         yield return null;
    //     }
    //
    //     tempTimerRun = false;
    //
    //     yield return new WaitForSeconds(blockRiseTime - delayBetweenBlocks);
    //
    //     foreach (var block in spiralBlocks)
    //     {
    //         block.transform.DOScale(1f, blockRiseTime).SetEase(blockLandAnimCurve);
    //         Vector3 newPos = GetBlockPosition(block.x, block.y, nextBlockPos);
    //         block.transform.DOLocalMove(newPos, blockRiseTime).SetEase(blockLandAnimCurve)
    //             .OnComplete(() => block.MultiplySortingOrder(0.5f));
    //     }
    //
    //     yield return new WaitForSeconds(blockRiseTime * 0.5f);
    //
    //     ShakeBoard();
    // }


    public static List<BlockBoard> SortInSpiralOrder(List<BlockBoard> blocks)
    {
        // Find the bounds of the grid
        int minX = int.MaxValue, minY = int.MaxValue;
        int maxX = int.MinValue, maxY = int.MinValue;

        foreach (var block in blocks)
        {
            if (block.x < minX) minX = block.x;
            if (block.x > maxX) maxX = block.x;
            if (block.y < minY) minY = block.y;
            if (block.y > maxY) maxY = block.y;
        }

        // Create a 2D array to place blocks more conveniently
        var grid = new BlockBoard[maxX - minX + 1, maxY - minY + 1];
        foreach (var block in blocks)
        {
            grid[block.x - minX, block.y - minY] = block;
        }

        List<BlockBoard> sortedBlocks = new List<BlockBoard>();

        int startX = 0;
        int startY = 0;
        int endX = maxX - minX;
        int endY = maxY - minY;

        while (startX <= endX && startY <= endY)
        {
            // Traverse from left to right
            for (int i = startX; i <= endX; i++)
            {
                sortedBlocks.Add(grid[i, startY]);
            }
            startY++;

            // Traverse from top to bottom
            for (int i = startY; i <= endY; i++)
            {
                sortedBlocks.Add(grid[endX, i]);
            }
            endX--;

            // Traverse from right to left
            if (startY <= endY)
            {
                for (int i = endX; i >= startX; i--)
                {
                    sortedBlocks.Add(grid[i, endY]);
                }
                endY--;
            }

            // Traverse from bottom to top
            if (startX <= endX)
            {
                for (int i = endY; i >= startY; i--)
                {
                    sortedBlocks.Add(grid[startX, i]);
                }
                startX++;
            }
        }

        return sortedBlocks; // Return the sorted spiral order list
    }

    public List<BlockBoard> BlocksHasChild()
    {
        List<BlockBoard> blockBoards = new List<BlockBoard>();
        for (int i = 0; i < blocks.Count; i++)
        {
            if(!blocks[i].CanPlace)
            {
                blockBoards.Add(blocks[i]);
            }
        }
        return blockBoards;
    }

    public void SetBlockImage(Sprite image)
    {
        for (int i = 0; i < blocks.Count; i++)
        {
            if (blocks[i].CanPlace) continue;
            blocks[i].SetBlockImage(image);
        }
    }

    public BlockBoard VisibleBlock(int index, bool visible)
    {
      
        allBlocksInBoard[index].VisibleBlock(visible);
        if(visible)
        {
            allBlocksInBoard[index].ShowPlaceBlock(true);
        }
        else
        {
            Debug.Log("Hide 4");
        }
        return allBlocksInBoard[index];
    }

    public IEnumerator GameOver()
    {
        List<BlockBoard> temp = new List<BlockBoard>();
        temp.AddRange(blocks);
        temp.Shuffle();
        GameManager.Instance.VisibleButton(false);
        for (int i = 0; i < temp.Count; i++)
        {
            if (temp[i].CanPlace) continue;
            temp[i].SetBlockImage(SpriteManager.Instance.GetBlockShow2D[1]);
            yield return new WaitForSeconds(.02f);

        }

        Timer.Schedule(this,0.2f,()=>{

            //Show Game Over
            GameManager.Instance.GameOverProccess();
        });
      
    }

    public Vector3 GetBlockPosition(int x, int y, Vector2 nextBlock)
    {
        Vector3 pos = new Vector3(
            blockPrefab.transform.position.x + (nextBlock.x * y),
            blockPrefab.transform.position.y + (nextBlock.y * x),
            0);

        return pos;
    }

    public Vector2 GetNextBlockPos()
    {
        float xNextBlock = nextBlockWidth.position.x - blockPrefab.transform.position.x;
        float yNextBlock = nextBlockHeight.position.y - blockPrefab.transform.position.y;
        Vector2 NextBlockPos = new Vector2(xNextBlock, yNextBlock);

        return NextBlockPos;
    }
    [SerializeField]
    private Transform nextBlockWidth;
    [SerializeField]
    private Transform nextBlockHeight;
    
#if UNITY_EDITOR
    [Header("Editor")]
    [SerializeField]
    private bool hexaBoard;
    [SerializeField]
    private float dstXHexaMode = -.5f;
    [SerializeField]
    private List<bool> dataBlocksHexa = new List<bool>();


   
    public override void GUIEditor()
    {
        if(GUILayout.Button("Make Board"))
        {
            for (int i = 0; i < blocks.Count; i++)
            {
                DestroyImmediate( blocks[i]);
            }
            blocks.Clear();
            allBlocksInBoard.Clear();
            Vector2 nextBlockPos = GetNextBlockPos();
            int count = 0;
            for (int i = 0; i < height; i++)
            {
                for (int j = 0; j < width; j++)
                {
                    GameObject block = Instantiate(blockPrefab, Vector3.zero, Quaternion.identity);
                    block.SetActive(true);
                    block.transform.SetParent(transform, false);
                    float range = 0;
                    if (hexaBoard && i % 2 == 0)
                    {
                        range = dstXHexaMode;
                    }
                    //block.transform.position = new Vector3(blockPrefab.transform.position.x + (xNextBlock * j) + range, blockPrefab.transform.position.y + (yNextBlock * i), 0);
                    block.transform.position = GetBlockPosition(i, j, nextBlockPos);
                    block.name = string.Format("Block_{0}_{1}", i, j);
                    block.transform.GetChild(1).GetComponent<SpriteRenderer>().sortingOrder = GetWidth + 6 - i;
                    block.GetComponent<BlockBoard>().x = i;
                    block.GetComponent<BlockBoard>().y = j;
                    block.GetComponent<BlockBoard>().blockIndex = count;
                    if (hexaBoard)
                    {
                        block.gameObject.SetActive(dataBlocksHexa[count]);
                        if (dataBlocksHexa[count])
                            blocks.Add(block.GetComponent<BlockBoard>());
                    }
                    else
                    {
                        block.gameObject.SetActive(true);
                        blocks.Add(block.GetComponent<BlockBoard>());
                    }
                    count++;
                    if (!block.gameObject.activeInHierarchy)
                        block.GetComponent<BlockBoard>().VisibleBlock(true);

                    allBlocksInBoard.Add(block.GetComponent<BlockBoard>());

                }
            }
        }
        if (GUILayout.Button("Delete Board"))
        {
           
            for (int i = 0; i < allBlocksInBoard.Count; i++)
            {
                DestroyImmediate(allBlocksInBoard[i].gameObject);
            }
            allBlocksInBoard.Clear();
        }
        if (GUILayout.Button("Load Block Connect"))
        {
          
            for (int i = 0; i < blocks.Count; i++)
            {
                blocks[i].LoadConnect();
            }

        }
        if (GUILayout.Button("Block Fall"))
        {

            StartCoroutine(BlocksFall());

        }


        base.GUIEditor();

    }
    
#endif
}
