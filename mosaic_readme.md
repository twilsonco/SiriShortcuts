![banner](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_banner.png?raw=true)

A photo mosaic is a picture made out of smaller pictures. This shortcut creates a photo mosaic from a subject image and a library of smaller images. The subject image is divided into a grid of tiles, and each tile is replaced with a smaller image from the library that best matches the original tile. The result is a mosaic that looks like the subject image from a distance, but is made up of smaller images up close.

# Notes/Limitations

- 100% vanilla shortcut, utilizing built-in JavaScript support to perform advanced mosaic tile color matching
- If the shortcut crashes ("There was a problem running Photo mosaic"), try preprocessing mosaic tiles (step 2) to lower image size
- I won't tell you _how_ to use this tool, but if you want my opinion, a good mosaic requires more than just a large tile library and a subject image. The subject image should have a good balance of colors and contrast, and should be a "good" image/photo; ideally something meaningful. Then the tile library should be able to reproduce the colors and contract of the subject image, but should also contextually match the subject image. For example, a mosaic of the moon made from images from NASA's Apollo missions, or from other space images. [Here's a blog post on what makes a good mosaic.](https://intellithoughts.wordpress.com/2011/03/08/photo-mosaic-tips/)

# Instructions

1. Collect a dozen or more images to use as a mosaic tile library. It takes hundreds of unique tiles to create a nice-looking mosaic, but you can get by with just a dozen or so thanks to the optional tile subdivision feature in step 2. You can store these in a photo album in the Photos app or optionally, for macOS users, in a folder on your computer.
2. Preprocess mosaic tiles. This step converts the images you collected in step 1 into smaller, square tiles. If your tile library is very small (fewer than 70-100 tiles), consider using the "stacked" subdivision option to create more unique tiles from the library you've prepared. When you're done, the preprocessed tiles will be saved to a new photo album or optionally, for macOS users, to a folder on your computer.
3. Specify subject image, mosaic grid size, tile-matching color space, and **_one or more tile libraries_**. The subject image is the image you want to convert into a mosaic. The mosaic grid size is the number of tiles that will be used to represent the subject image. The tile-matching color space is the color space used to compare the colors of the subject image and the tiles in the library. The tile library is the photo album or folder containing the preprocessed tiles from step 2.
4. That's it! The mosaic will be created, and you'll be prompted to view/save the result.

# Credits

- Used @atnbueno's [Autocrop Screenshot Stitcher](https://routinehub.co/shortcut/17347/) as inspiration for being able to perform pixel-level image analysis in JavaScript in a shortcut.

# Features

- **_Preprocess tile library_** from full size images to smaller, square tiles. This step isn't strictly necessary, but is strongly recommended to improve output quality and performance. You may also experience crashes due to memory limitations if you don't preprocess tiles.

![grid size](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_grid%20size.png?raw=true)

- The mosaic **_grid size_** can be adjusted to create a more detailed or more abstract mosaic.

![tile subdivision](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_tile%20subdivision.png?raw=true)

- **_Subdivide tiles_** to create more unique tiles from a small tile library. This is "cheating" but who will know? As the image below shows, using subdivision improves the quality of the mosaic, even when the same mosaic grid is used. In the image below, a tile library of only 16 images was used, but the quality of the mosaic after maximum subdivision still looks good. Of course, it's better to have a larger tile library of truly unique tiles, but this feature can help you get by with fewer tiles.

![long and tall tile images](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_long%20and%20tall%20images.png?raw=true)

- **_Handling of long/tall images_**. When preprocessing the tile library, the shortcut will make the most of long/tall images by creating multiple tiles from them. This is performed regardless of subdivision setting. The result is one square tile centered on the long/tall image, and additional tiles starting from the left/top of the image.
  - When a long/tall image is subdivided, the subregions are also long/tall. Those are also subdivided in this way so that no part of the original image goes to waste.

![multi-point tile matching](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_tile%20matching.png?raw=true)

- **_Multi-point tile matching_**. Rather than simply finding the tile whose average color best matches that of the each mosaic tile, the shortcut uses a more sophisticated, optimized, algorithm to compare multiple points in each library tile to find the best match.

![color spaces](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_color%20space.png?raw=true)

- The **_tile-matching color space_** can be chosen from four options
  - [(CIE)LAB](https://www.datacolor.com/business-solutions/blog/what-is-cielab): A color space that approximates human vision
  - [HSV](https://www.lifewire.com/what-is-hsv-in-design-1078068): A color space that separates color into hue, saturation, and value, which can be useful for matching colors that are similar but have different brightness
  - RGB: The standard color space used in digital images
  - [RGB+](https://www.compuphase.com/cmetric.htm): RGB enhanced with a gamma correction to make it more perceptually uniform

![progress indication with remaining time and mosaic preview](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_progress.png?raw=true)

- **_Progress indication_**. The shortcut will show you progress notifications as it performs long tasks. When creating the mosaic, the progress notifications will also show a preview of the mosaic so you can see how it's coming along.

![tile usage](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_tile%20useage.png?raw=true)

- **_Visualize tile usage in the mosaic_**. After a mosaic has been created, you can save/view the results, as well as generate a visualization of the tile usage in the mosaic. This visualization shows the tiles used in the mosaic, and how many times each tile was used. This can be useful for identifying tiles that are overused. When a tile is overused, you can add similar unique images to the tile library to give the shortcut perhaps more options to choose from.
- **_Additional expert options_**: Open the shortcut to find the configuration dictionary at the top. Here you can modify default values, and access some additional options that are not exposed in the shortcut's main interface.
- **_Debug logging_**: If you're having trouble with the shortcut, you can enable debug logging in the configuration dictionary to get more information about where the problem occurs. This is especially helpful if you want to ask for support using the shortcut.

## Example log output

```log
2024-06-23 16:26:10 Starting on Mac (macOS 14.5)
2024-06-23 16:26:13 Mac user selecting subject image...
2024-06-23 16:26:25 User running image with output mosaic size = 5000 and grid size = 30, comparing in the LAB color space. User now selecting mosaic tile image album(s)...
2024-06-23 16:26:33 Precomputing image colors for 225 tiles in 3 batches. Resizing to thumbnails of size 49 and then using a 7x7 sampling grid.
2024-06-23 16:26:33 Processing batch 1 of 3...
2024-06-23 16:26:35 Processing batch 2 of 3...
2024-06-23 16:26:37 Processing batch 3 of 3...
2024-06-23 16:26:38 Finished precomputing color grids for tiles. Now running JS routine to segment subject image and match with tiles. Precomputed average color grid: [[[79,-3,3],[51,-14,9],[36,-20,13],[37,-21,14],[36,-19,12],[35,-20,12],[36,-19,1...[17,-17,19],[19,-15,12],[24,-16,11],[35,-16,8],[39,-17,7],[38,-18,7],[37,-17,6]]]
2024-06-23 16:26:41 JS routine finished. Now assembling mosaic. Normalized mean distance: 0.149425610026727. Solution dictionary: {"24,1":170,"1,27":26,"26,14":135,"15,10":87,"26,22":112,"3,36":26,"24,2":170,"2...:182,"13,39":35,"26,13":115,"10,9":108,"26,21":23,"3,34":26,"1,26":182,"3,35":26}
2024-06-23 16:26:41 Processing row 1 of 30...
...
2024-06-23 16:26:54 Processing row 21 of 30...
2024-06-23 16:26:55 Sending progress notification...
2024-06-23 16:26:55 Processing row 22 of 30...
...
2024-06-23 16:27:01 Processing row 30 of 30...
2024-06-23 16:27:01 Finished combining rows.
  Now combining rows into final image.
  Cache usage was 95.4%.
  Used 55 unique tiles out of 225.
  Making a 40x30 = 1200 tile mosaic of size 5000x3750.
  Comparing by LAB color.
2024-06-23 16:27:02 Finished with mosaic. Preparing comparison image and prompting user.
Timing:
  5s to process tile library
    45 tiles per second
  1s to compute best matches for mosaic
    270000 tile checks per second
  22s to construct mosaic
    54.5 mosaic tiles per second
2024-06-23 16:27:10 User quit.
```

# Examples

![examples](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_examples.png?raw=true)

# Want an app instead?

| Name | Price |
| ----- | ----- |
| [Photo Mosaica](https://apps.apple.com/us/app/photo-mosaica/id437992891) | $0.99 to unlock deluxe features |
| [Pro Photo Mosaic Creator](https://apps.apple.com/us/app/pro-photo-mosaic-creator/id1219025715) | Free |
| [mosaicPro: Photo Mosaic App](https://apps.apple.com/us/app/mosaicpro-photo-mosaic-app/id1616212938) | $9.99 to unlock full app |