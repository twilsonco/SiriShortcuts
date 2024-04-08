![Menu Generator Banner](https://raw.githubusercontent.com/twilsonco/SiriShortcuts/main/img/menu-generator-banner.png)

![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Froutinehub.co%2Fapi%2Fv1%2Fshortcuts%2F18397%2Fversions%2Flatest&query=%24.Version&label=Version&labelColor=green&color=%23320932.png) [![Download on RoutineHub](https://img.shields.io/badge/Download_On-RoutineHub-%23ee3535)](https://routinehub.co/shortcut/18397/)

Easily create menus for your Shortcuts **without any external apps**.

Menu Generator can be embedded or run from the `Run Shortcut` action to create stunning, feature-rich menus.

Feed it the command and menu data in a dictionary or text field, then it does the rest!

***

![Menu Generator Screenshots](https://github.com/twilsonco/SiriShortcuts/blob/main/img/menu-generator-hero-image.png?raw=true)

## Menu Generator Features

**Flexible Icons:** With four different types of icon choices, it should be easy to find an icon for any menu option. Supported Icons:

- Base64 icons (e.g., created from photos, or bring your own).
- Font Awesome icons.
- Emoji icons.
- Photo icons (resized to 123x123 pixels and converted to base64).

**Quick menus:** Create simple menus using a single text field similar to [Toolbox Pro's](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977) Quick Menu feature.

**Advanced menus:** Define menu items individually using dictionaries for optimized menus with maximal customization, again like [Toolbox Pro](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977).

**Unlimited Custom Fields:** Include "hidden" fields to store data with menu items that is not shown in the created menu, and that can be accessed after a menu option is tapped. You can define as many custom fields as needed.

**Create menus or base64 for later:** Use to create full menus or convert images to base64 for other uses.

**Embeddable:** Put this shortcut inside any shortcut to add picture/icon menus without complicating installation/distribution.

**Icon caching:** Icons are cached to a file in your iCloud to increase performance.

## Limited Permission Prompts

![Menu Generator Permissions Screenshots](https://raw.githubusercontent.com/twilsonco/SiriShortcuts/main/img/menu-generator-permissions.png)

Because no external apps (e.g. Toolbox Pro or Actions) are used, permission prompts are limited to just:

- Running another Shortcut (unless embedded within a shortcut).
- Loading web content (for Font Awesome icons).

## How To Use Menu Generator

Every time you run Menu Generator, you'll use an input dictionary that contains the command to run along with any necessary/optional information that goes along with the command. The commands and their inputs are listed below:

-----

### Commands

- `menu`
    - Create vCard menu as single text string
    - Inputs: `"menu"`: list of valid menu item dictionaries
    - Output: vCard menu as a text string
- `menu items`
    - Create list of vCard menu text strings
    - Inputs: `"menu"`: list of valid menu item dictionaries (described below)
    - Output: list of vCard items as text strings
- `get menu item details`
    - Get a chosen menu item's dictionary using its `title` and `sub` (corresponding to `Name` and `Company` inside a `Contact` object), in order to easily access its properties.
    - Inputs: 
        - `"title"` and `"sub"`: title and subtitle of menu item to get details for. 
        - `"menu items"`: list of menu item dictionaries used to make the menu in the first place, and that will be searched to find the specified title and subtitle
    - Output: the found menu item matching the specified title and subtitle
- `quick menu`
    - Create vCard menu as single text string using quick menu string
    - Inputs: `"menu"`: text string describing the quick menu
    - Output: vCard menu as a text string
- `quick menu items`
    - Create list of vCard menu item text strings from quick menu string
    - Inputs: `"menu"`: text string describing the quick menu
    - Output: list of vCard items as text strings
- `base64 overlay`
    - Prepare icon base64 by overlaying transparent PNG image on the specified background color
    - Inputs:
        - `"icon"`: base64 string of a png image with some transparency
        - `"background"`: hex string or valid HTML color name
        - `"size"`: text or number, relative size of image in resulting icon (0 to 1 as ratio of resulting image)
    - Output: base64 text string of overlaid image
- `emoji icon`
    - Prepare icon base64 from emoji
    - Inputs:
        - `“icon”`: text, the emoji to create image from
        - `“size”`: optional: number, the size of the resulting image, between 0.0 and 1.0. Defaults to global shortcut default in config dictionary.
        - `“background”`: optional: hex color or HTML color name of background. Defaults to transparent on macOS and dark/light based on device dark mode setting on iOS.
    - Output: base64 text string of emoji icon
- `font awesome icon`
    - Prepare icon base64 from specified Font Awesome icon name
    - HTML colors: https://www.w3schools.com/tags/ref_colornames.asp
    - Inputs:
        - `“icon”`: font awesome icon type and name, e.g. “fa-solid fa-font-awesome”
        - `“size”`: size of icon, from 0.0 to 1.0
        - `“color”`: hex color or HTML color name of icon, e.g. #1E3050
        - `“background”`: hex color or HTML color name of icon, e.g. #fff
    - Outputs: base64 text string of emoji icon

-----

![Menu Generator Menu Examples Screenshots](https://github.com/twilsonco/SiriShortcuts/blob/main/img/menu-generator-example.png?raw=true)

### Creating Advanced Menus

You can use a list of menu item dictionaries to make menus, providing the most functionality and better performance than the text-based quick menus.

#### Creating The List of Menu Item Dictionaries

To make an advanced menu, you need to construct a list of dictionaries. Each dictionary can be created using the `Dictionary` action with the following text keys (see also the above images):

1. `title` - This will be the larger, bold text title for each menu option.
2. `sub` - This will be the smaller text below the title.
3. `icon` - Here is where you will specify either the base64 icon, emoji, or Font Awesome class name for the icon you want to use.
4. *[optional]* You can add additional fields that contain whatever information you want. These will not be printed in the created menu, and can be fetched later in order to drive more advanced behavior based on user selection. Here we use `field1` and `field2` as examples.

![Menu Generator - Menu Command Image](https://github.com/twilsonco/SiriShortcuts/blob/main/img/menu-generator-advanced-menu.png?raw=true)

##### The class name of a Font Awesome icon can be found on their website as in the image below.

![Menu Generator - Font Awesome icon class name](https://github.com/twilsonco/SiriShortcuts/blob/main/img/menu-generator-font-awesome-site.png?raw=true)

#### Using The `menu` Command To Generate The Menu

Once you've prepared your list of menu item dictionaries, we prepare an input dictionary for Menu Generator:

1. Make a new dictionary with a text key named `command` with the value `menu`.
2. Next, add a `Set Dictionary` action and set the value of the `menu` key to your list of menu item dictionaries (here we've named the list variable `Menu item list`).
3. Below that, use the `Run Shortcut` action to run Menu Generator, and pass the dictionary from step 1 as input.

#### Tell Shortcuts That The Output Is A vCard File

The output of the `Run Shortcut` action will be a single text object that contains the created menu.

1. Use a `Set Name` action to set the name of the `Shortcut Result` to `menu.vcf`.
2. Finally, add a `Choose From List` action to choose from `Renamed Item`, and make sure the type of `Renamed Item` is set to `contact`.

#### Retrieving Data From The Chosen Menu Option

If you added any non-printed "extra" fields to your menu (we added `field1` and `field2` in our example), you can use the `get menu item details` command to fetch that data from the user-selected item.

1. Create another dictionary with the following text keys:
    - `command` - With the value `get menu item details`.
    - `title` - With the value `Name` pulled from a magic variable of the `Renamed Item`.
    - `sub` - With the value `Company` also pulled from a magic variable of the `Renamed Item`.
2. Pass this dictionary as input to a `Run Shortcut` action pointing to Menu Generator.
3. The `Shortcut Result` will be the menu item dictionary corresponding to the user-selected menu item.
4. Using the returned dictionary, you can then access any of the extra fields you defined earlier.

### Create A Menu With The Quick Menu Tool

![Menu Generator Quick Menu](https://github.com/twilsonco/SiriShortcuts/blob/main/img/menu-generator-quick-menu-example.png?raw=true)

If you need a quick and simple method of making menus, then you can just throw everything into a `Text` action.

#### Using A Text Field To Make A Menu

1. Define your icon with base64, Font Awesome, or an emoji.
2. Enter the text for each menu item.
    - Use `title`, `sub`, and `icon`, followed by a colon like so: `title: Hello World!`.
    - Make sure there is a line separating each menu option like the screenshot above.
3. Add a `Dictionary` action under the `text` action.
4. In that `Dictionary`, add two `Text` keys with the following values:
    - `command` With the value `quick menu`.
    - `menu` With the value `Quick menu text` pulled from the magic variable of the `Text` action.
5. Now, place a `Run Shortcut` action below that and select Menu Generator.
6. Then, use a `Set Name` action to set the name of the Shortcut Result to `menu.vcf`.
7. Next, add a `Choose From List` action to choose from the `Renamed Item`, and make sure the type is set to `contact`.

After that, you can then use `If` actions to perform tasks based on the option selected.

- When using quick menus, you cannot define extra, non-printed fields.
- The `title` and `sub` values of the selected menu item are accessed using the `Name` and `Company` values of the selected menu item (a Contact object).

***

## Example Shortcuts

The below example shortcuts demonstrate all of Menu Generator's features. Some analogous shortcuts doing the same things but using Toolbox Pro's menu capabilities are also provided, in order to make clear how similar the functionality and use are.

- [Menu Generator Example - Menu](https://www.icloud.com/shortcuts/5e61965f9c06486ea42940958a7f44f3)
    - Creates an advanced menu with Menu Generator using the different types of icons (base64, Font Awesome, and Emoji).
- [Toolbox Pro Menu Generator](https://www.icloud.com/shortcuts/895d5aea0129459aa5204c312742206e) - (*Requires Toolbox Pro*)
    - Uses Toolbox Pro to create an advanced menu.
- [Menu Generator Example - Menu Items](https://www.icloud.com/shortcuts/effd803e7aae4421b79c3026838c8f3c)
    - Creates an advanced menu with Menu Generator, then uses the cache to present another menu without the need to regenerate anything.
- [Menu Generator Example - Quick Menu](https://www.icloud.com/shortcuts/6d01003ff5bd4e91b784bef436385b6b)
    - Creates a quick menu utilizing a `text` action.
- [Toolbox Pro Quick Menu](https://www.icloud.com/shortcuts/3bdb5b49dfb44884afc5472b6386919f)
    - Uses Toolbox Pro's `Quick menu` action.
- [Menu Generator Example - Photo Menu](https://www.icloud.com/shortcuts/3862685e4e5348c7be3fae3326a41960)
    - Pulls the last 10 photos from your Photo Library to create a menu with photos for icons.
- [Menu Generator Example - Convert to base64](https://www.icloud.com/shortcuts/5222bcac2ad644c5b7c075fa788901b3)

## Embed Menu Generator inside your shortcut

Use the [Join Shortcuts](https://routinehub.co/shortcut/10038/) shortcut by [gluebyte](https://routinehub.co/user/gluebyte) to embed Menu Generator inside your own shortcut.

- Simplify installation and distribution of your shortcut by removing the need for the user to install Menu Generator as a separate shortcut
- Simplify running of your shortcut by removing the permissions prompt to "run another shortcut"
- *Join Shortcuts works best on macOS, where it can sign the resulting merged shortcut*
- As an alternative, you could start your own shortcut from a duplicate of the Menu Generator shortcut
  - Make sure to collapse the If action in order to hide all the Menu Generator actions and simplify subsequent shortcut development
- As alternatives, you could
    - Use the recently released [Action Editor](https://routinehub.co/shortcut/18280/), also by gluebyte, or,
    - Use the recently released [Copy Shortcut Actions +++](https://routinehub.co/shortcut/18369/) by [robric18](https://routinehub.co/user/robric18).
    - Start your own shortcut from a duplicate of the Menu Generator shortcut. Make sure to collapse the If action in order to hide all the Menu Generator actions and simplify subsequent shortcut development.

**As an example, my [Gemini Chat Manager](https://routinehub.co/shortcut/17671/) shortcut has Menu Generator embedded inside it.**

1. Install Menu Generator (this Shortcut) and the [Join Shortcuts](https://routinehub.co/shortcut/10038/) Shortcut:
   - Join Shortcuts works by allowing you to insert one Shortcut inside another.
   - Each Comment action in the destination Shortcut serves as a placeholder for inserting a source Shortcut.
2. Create a Comment action near the top of your Shortcut. Inside, put something like "menu generator".
3. Run the Join Shortcuts Shortcut.
4. Select your Shortcut at the destination Shortcut.
5. Select the comment made in step 2 as the place to insert the source Shortcut.
6. Select the Menu Generator Shortcut as the source Shortcut.
7. Select "Finish Joining" and save the resulting Shortcut as a copy or by replacing your Shortcut with the joined version.
8. Change any "Run Shortcut" actions to point to your Shortcut (so that it runs itself) instead of Menu Generator, and now your Shortcut has built-in pretty menus!

## Credits

- [jpasholk’s “vCard Menu Helper”](https://routinehub.co/shortcut/18220) (Inspiration for this shortcut, though other great vCard menu shortcuts also exist).
- [DylanShortcuts’ “Emoji to Image”](https://routinehub.co/shortcut/14899) adapted to turn an emoji into an image.
- [SACUL_6’s “Create Menu Using Font Awesome”](https://routinehub.co/shortcut/17750) adapted for Font Awesome icon fetching.
- [gluebyte's Join Shortcuts]((https://routinehub.co/shortcut/10038/)) shortcut was used in the development of this shortcut.
- Though unrelated, see also [gluebyte's SF Emoji Menu Builder](https://routinehub.co/shortcut/8841/) shortcut if you're looking for making pretty menus using SF icons.
- [Toolbox Pro for Shortcuts](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977) (Inspiration for the structure of Quick Menu feature and of menu items when a dictionary is used as input).
- jpasholk wrote this description, and was pivotal in the preliminary design of this shortcut.

## Attribution

If you use Menu Generator in any of your Shortcuts, please place a comment with the below text at or near the top of your Shortcut:

> Menus created by Menu Generator by @twilsonco.

If you publish your Shortcut to RoutineHub or any other Shortcuts sharing platform, please use this badge:

![Menu Generator Badge](https://github.com/twilsonco/SiriShortcuts/blob/main/img/made-with-menu-generator-badge.png?raw=true)

### You Can Copy This Markdown To Make It Easier

```![Menu Generator by @twilsonco](https://github.com/twilsonco/SiriShortcuts/blob/main/img/made-with-menu-generator-badge.png?raw=true)```

> Markdown for GitHub & RoutineHub created with ♥ by [jpasholk](https://routinehub.co/user/jpasholk).

***

Thanks for stopping by, and if you have any questions don’t hesitate to reach out!
