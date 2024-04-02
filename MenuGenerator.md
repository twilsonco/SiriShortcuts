![Menu Generator Banner](https://raw.githubusercontent.com/jpasholk/SiriShortcuts/main/img/menu-generator-banner.png)

Easily create menus for your Shortcuts without any external apps.

Menu Generator can be embedded or run from the `Run Shortcut` action to create stunning feature-rich menus. 

Feed it the command and menu data in a dictionary or text field, the it does the rest!

***

![Menu Generator Screenshots](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-hero-image.png?raw=true)

## Menu Generator Features

**Flexible Icons:** With four different types of icon choices, it should be easy to find an icon for any menu option.

**Supported Icons:**

- Base64 icons (e.g. created from photos, or bring your own)
- Font Awesome icons
- Emoji icons
- Photo icons

**Icon caching:** Icons are cached to a file in your iCloud to increase performance.

**Quick menus:** Create simple menus with a text field similar to Toolbox Pro.

**Advanced menus:** Use data stored in a dictionary for optimized menus that cut down on clutter in your Shortcuts. (Structure of menu item dictionary inspired by [Toolbox Pro for Shortcuts](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977)).

**Unlimited Custom Fields:** Include "hidden" fields to store data with menu items that is not shown in the created menu, and that can be accessed after a menu option is tapped. You can define as many custom fields as needed.

## Limited Permission Prompts

![Menu Generator Permissions Screenshots](https://raw.githubusercontent.com/jpasholk/SiriShortcuts/main/img/menu-generator-permissions.png)

 Limits permission prompts to just:

- Running another Shortcut (unless embedded within shortcut), and 
- Loading web content (for Font Awesome icons).

## How To Use Menu Generator

![Menu Generator Menu Examples Screenshots](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-example.png?raw=true)

### Creating Advanced Menus Using Dictionaries

Using a dictionary to make menus allows for the most functionality and is a bit quicker than using the text-based quick menu.

### Creating The Dictionary

To make an advanced menu you need to use a `Dictionary` action with the following text keys:

1. `title` - This will be the larger bold text title for each menu option.
2. `sub` - This will be the smaller text below that.
3. `icon` - Here is where you will specify either the base64 icon, emoji, or Font Awesome class name for the icons you want to use. 

![Menu Generator - Menu Command Image](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-advanced-menu.png?raw=true)

### Using The `menu` Command To Generate The Menu

1. Below the first dictionary you created with the data for your menu, make another one with a text key named `command` with the value `menu`. 
2. Next, add a `Set Dictionary` action and set the name of `Menu item list` to `menu`.
3. Below that, use the `Run Shortcut` action to run Menu Generator.

### Tell Shortcuts That The Output Is A vCard File

1. Then, use a `Set Name` action to set the name of the `Shortcut Result` to `Menu.vcf`.
2. Finally, add a `Choose From List` action to choose from `Renamed Item`, and make sure the type is set to `contact`.

### Retrieving Data From The Chosen Menu Option

1. Create another dictionary with the following text keys:
	- `command` - With the value `get menu item details`.
	- `title` - With the value `Name` pulled from a magic variable of the `Renamed Item`.
	- `sub` - With the value `Company` also pulled from a magic variable of the `Renamed Item`.

### Create A Menu With The Quick Menu Tool

![Menu Generator Quick Menu](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-quick-menu-example.png?raw=true)

If you need a quick and simple method of making menus then you can just throw everything into a `Text` action and call it good.

### Using A Text Field To Make A Menu

1. Define your icon with base64, Font Awesome, or an emoji.
2. Enter the text for each menu item.
	- Use `title`, `sub`, and `icon`, followed by a colon like so `title: Hellow World!`.
	- Make sure there is a line separating each menu option like the screenshot above.
3. Add a `Dictionary` action under the `text` action.
4. In that `Dictionary`, add two `Text` keys with the following values:
	- `command` With the value `quick menu`.
	- `menu` With the value `Quick menu text` pulled from the magic variable of the `Text` action.
5. Now, place a `Run Shortcut` action below that and select Menu Generator.
6. Then, use a `Set Name` action to set the name of the Shortcut Result to `menu.vcf`.
7. Next, add a `Choose From List` action to choose from the `Renamed Item`,  and make sure the type is set to `contact`.

After that, you can then use `If` actions to perform tasks based on the option selected.

***

## Example Shortcuts

- [Menu Generator Example - Menu](https://www.icloud.com/shortcuts/faf299dcdb0845a6aaf3957e7ad54e3b)
    - Creates an advanced menu with Menu Generator using the different types of icons (base64, Font Awesome, Emoji, and Photos).
- [Toolbox Pro Menu Generator](https://www.icloud.com/shortcuts/895d5aea0129459aa5204c312742206e) - (*Requires Toolbox Pro*)
    - Uses Toolbox Pro to create an advanced menu.
- [Menu Generator Example - Menu Items](https://www.icloud.com/shortcuts/effd803e7aae4421b79c3026838c8f3c)
    - Creates an advanced menu with Menu Generator, then uses the cache to present another menu without the need to regenerate anything.
- [Menu Generator - Quick Menu](https://www.icloud.com/shortcuts/6d01003ff5bd4e91b784bef436385b6b)
    - Creates a quick menu utilizing a `text` action.
- [Toolbox Pro Quick Menu](https://www.icloud.com/shortcuts/3bdb5b49dfb44884afc5472b6386919f)
    - Uses Toolbox Pro's `Quick menu` action.
- [Menu Generator - Photo Menu](https://www.icloud.com/shortcuts/3862685e4e5348c7be3fae3326a41960)
    - Pulls the last 10 photos from your Photo Library to create a menu with photos for icons.

## Credits

- [jpasholk’s “vCard Menu Helper”](https://routinehub.co/shortcut/18220) (Inspiration for this shortcut, though other great vCard menu shortcuts also exist).
- [DylanShortcuts’ “Emoji to Image”](https://routinehub.co/shortcut/14899) adapted to turn an emoji into an image.
- [SACUL_6’s “Create Menu Using Font Awesome”](https://routinehub.co/shortcut/17750) adapted for Font Awesome icon fetching.
- [Toolbox Pro for Shortcuts](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977) (Inspiration for structure of Quick Menu feature and of menu items when a dictionary is used as input).

## Attribution 

If you use Menu Generator in any of your Shortcuts please place a comment with the below text at or near the top of your Shortcut:

> Menus created by Menu Generator by @twilsonco.

If you publish your Shortcut to RoutineHub or any other Shortcuts sharing platform please use this badge:

![Menu Generator Badge](https://github.com/jpasholk/SiriShortcuts/blob/main/img/made-with-menu-generator-badge.png?raw=true)

### You Can Copy This Markdown To Make It Easier

`![Menu Generator by @twilsonco](https://i.imgur.com/PFJzmKV_d.webp?maxwidth=1520&fidelity=grand)`

> Markdown for GitHub & RoutineHub created with &#x2665; by [jpasholk](https://routinehub.co/user/jpasholk).

***

Thanks for stopping by, and if you have any questions don’t hesitate to reach out!