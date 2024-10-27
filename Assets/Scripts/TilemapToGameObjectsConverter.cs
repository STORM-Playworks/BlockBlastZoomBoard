using UnityEngine;
using UnityEngine.Tilemaps;

public class TilemapToGameObjectsConverter : MonoBehaviour
{
    public Tilemap tilemap;

    void Start()
    {
        if (tilemap == null)
        {
            Debug.LogError("Tilemap is not assigned!");
            return;
        }

        ConvertTilemapToGameObjects();
    }

    void ConvertTilemapToGameObjects()
    {
        BoundsInt bounds = tilemap.cellBounds;
        TileBase[] allTiles = tilemap.GetTilesBlock(bounds);

        for (int x = bounds.xMin; x < bounds.xMax; x++)
        {
            for (int y = bounds.yMin; y < bounds.yMax; y++)
            {
                for (int z = bounds.zMin; z < bounds.zMax; z++)
                {
                    Vector3Int localPlace = new Vector3Int(x, y, z);
                    TileBase tile = tilemap.GetTile(localPlace);
                    if (tile != null)
                    {
                        CreateGameObjectFromTile(tile, localPlace);
                    }
                }
            }
        }
    }

    void CreateGameObjectFromTile(TileBase tile, Vector3Int localPlace)
    {
        GameObject tileObject = new GameObject("Tile_" + tile.name);
        tileObject.transform.position = tilemap.CellToWorld(localPlace);

        SpriteRenderer spriteRenderer = tileObject.AddComponent<SpriteRenderer>();
        if (tile is Tile)
        {
            spriteRenderer.sprite = ((Tile)tile).sprite;
        }
        // Add additional checks if you have other types of tiles, e.g., RuleTile.

        // Optionally, adjust the sorting order or layer if needed
        // spriteRenderer.sortingOrder = someValue;

        // Set the tileObject's parent to the parent of the original tilemap (optional, provides better hierarchy in the scene)
        tileObject.transform.SetParent(tilemap.transform.parent);
    }
}