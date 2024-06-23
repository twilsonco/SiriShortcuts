![banner](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_banner.png?raw=true)

A photo mosaic is a picture made out of smaller pictures. This shortcut creates a photo mosaic from a subject image and a library of smaller images. The subject image is divided into a grid of tiles, and each tile is replaced with a smaller image from the library that best matches the original tile. The result is a mosaic that looks like the subject image from a distance, but is made up of smaller images up close.

# Notes/Limitations

- 100% vanilla shortcut, utilizing build-in JavaScript support to perform advanced mosaic tile color matching
- If the shortcut crashes ("There was a problem running Photo mosaic"), try preprocessing mosaic tiles (step 2) to lower image size
- I won't tell you *how* to use this tool, but if you want my opinion, a good mosaic requires more than just a large tile library and a subject image. The subject image should have a good balance of colors and contrast, and should be a "good" image/photo; ideally something meaningful. Then the tile library should be able to reproduce the colors and contract of the subject image, but should also contextually match the subject image. For example, a mosaic of the moon made from images from NASA's Apollo missions, or from other space images. [Here's a blog post on what makes a good mosaic.](https://intellithoughts.wordpress.com/2011/03/08/photo-mosaic-tips/)

# Instructions

1. Collect a dozen or more images to use as a mosaic tile library. It takes hundreds of unique tiles to create a nice-looking mosaic, but you can get by with just a dozen or so thanks to the optional tile subdivision feature in step 2. You can store these in a photo album in the Photos app or optionally, for macOS users, in a folder on your computer.
2. Preprocess mosaic tiles. This step converts the images you collected in step 1 into smaller, square tiles. If your tile library is very small (fewer than 70-100 tiles), consider using the "stacked" subdivision option to create more unique tiles from the library you've prepared. When you're done, the preprocessed tiles will be saved to a new photo album or optionally, for macOS users, to a folder on your computer.
3. Specify subject image, mosasic grid size, tile-matching color space, and ***one or more tile libraries***. The subject image is the image you want to convert into a mosaic. The mosaic grid size is the number of tiles that will be used to represent the subject image. The tile-matching color space is the color space used to compare the colors of the subject image and the tiles in the library. The tile library is the photo album or folder containing the preprocessed tiles from step 2.
4. That's it! The mosaic will be created and you'll be prompted to view/save the result.

# Credits

- Used @atnbueno's [Autocrop Screenshot Stitcher](https://routinehub.co/shortcut/17347/) as inspiration for being able to perform pixel-level image analysis in JavaScript in a shortcut.

# Features

- The mosaic ***grid size*** can be adjusted to create a more detailed or more abstract mosaic.
- The ***tile-matching color space*** can be chosen from four options
  - [(CIE)LAB](https://www.datacolor.com/business-solutions/blog/what-is-cielab): A color space that approximates human vision
  - [HSV](https://www.lifewire.com/what-is-hsv-in-design-1078068): A color space that separates color into hue, saturation, and value, which can be useful for matching colors that are similar but have different brightness
  - RGB: The standard color space used in digital images
  - [RGB+](https://www.compuphase.com/cmetric.htm): RGB enhanced with a gamma correction to make it more perceptually uniform
- ***Subdivide tiles*** to create more unique tiles from a small tile library. This is "cheating" but who will know? As the image below shows, using subdivision improves the quality of the mosaic, even when the same mosaic grid is used. In the image below, a tile library of only 16 images was used, but the quality of the mosaic after maximum subdivision still looks good. Of course, it's better to have a larger tile library of truly unique tiles, but this feature can help you get by with fewer tiles.
- ***Preprocess tile library*** from full size images to smaller, square tiles. This step isn't strictly necessary, but is strongly recommended to improve output quality and performance. You may also experience crashes due to memory limitations if you don't preprocess tiles.
- ***Visualize tile usage in the mosaic***. After a mosaic has been created, you can save/view the results, as well as generate a visualization of the tile useage in the mosaic. This visualization shows the tiles used in the mosaic, and how many times each tile was used. This can be useful for identifying tiles that are overused or underused, and for identifying tiles that are not a good match for the subject image.
- ***Handling of long/tall images***. When preprocessing the tile library, the shortcut will make the most of long/tall images by creating multiple tiles from them. This is performed regardless of subdivision setting.
  - When a long/tall image is subdivided, the subregions are also long/tall. Those are also subdivided in this way so that no part of the original image goes to waste.
- ***Additional expert options***: Open the shortcut to find the configuration dictionary at the top. Here you can modify default values, and access some additional options that are not exposed in the shortcut's main interface.

![grid size](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_grid%20size.png?raw=true)

![tile subdivision](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_tile%20subdivision.png?raw=true)

![long and tall tile images](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_long%20and%20tall%20images.png?raw=true)

![tile matching](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_tile%20matching.png?raw=true)

![color spaces](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_color%20space.png?raw=true)

![tile usage](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_tile%20useage.png?raw=true)

# Examples

![examples](https://github.com/twilsonco/SiriShortcuts/blob/main/img/Mosaic_examples.png?raw=true)