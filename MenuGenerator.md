![Menu Generator Banner](https://raw.githubusercontent.com/jpasholk/SiriShortcuts/main/img/menu-generator-banner.png)

Easily create menus for your Shortcuts without any external apps.

Menu Generator can be embedded or run from the `Run Shortcut` action to create stunning, feature-rich menus.

Feed it the command and menu data in a dictionary or text field, then it does the rest!

![RoutineHub Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Froutinehub.co%2Fapi%2Fv1%2Fshortcuts%2F18397%2Fversions%2Flatest&query=%24.Version&label=RoutineHub%20Version&labelColor=%23ee3535&color=%23320932)
<a href="https://routinehub.co/shortcut/18397/"><img alt="Download on RoutineHub" src="https://img.shields.io/badge/Download_On-RoutineHub-%23ee3535"></a>

***

![Menu Generator Screenshots](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-hero-image.png?raw=true)

## Menu Generator Features

**Embeddable:** Put this shortcut inside any shortcut to add picture/icon menus without complicating installation/distribution.

**Flexible Icons:** With four different types of icon choices, it should be easy to find an icon for any menu option.

**Supported Icons:**

- Base64 icons (e.g., created from photos, or bring your own)
- Font Awesome icons
- Emoji icons
- Photo icons (resized to 123x123 pixels and converted to base64)

**Icon caching:** Icons are cached to a file in your iCloud to increase performance.

**Quick menus:** Create simple menus with a text field similar to Toolbox Pro.

**Advanced menus:** Use data stored in a dictionary for optimized menus that cut down on clutter in your Shortcuts. (structure of menu item dictionary inspired by [Toolbox Pro for Shortcuts](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977)).

**Unlimited Custom Fields:** Include "hidden" fields to store data with menu items that is not shown in the created menu, and that can be accessed after a menu option is tapped. You can define as many custom fields as needed.

## Limited Permission Prompts

![Menu Generator Permissions Screenshots](https://raw.githubusercontent.com/jpasholk/SiriShortcuts/main/img/menu-generator-permissions.png)

Limits permission prompts to just:

- Running another Shortcut (unless embedded within a shortcut), and
- Loading web content (for Font Awesome icons)

## How To Use Menu Generator

![Menu Generator Menu Examples Screenshots](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-example.png?raw=true)

### Creating Advanced Menus

You can use a list of menu item dictionaries to make menus, providing the most functionality and better performance than the text-based quick menus.

#### Creating The List of Menu Item Dictionaries

To make an advanced menu, you need to construct a list of dictionaries. Each dictionary can be created using the `Dictionary` action with the following text keys (see also the above images):

1. `title` - This will be the larger, bold text title for each menu option
2. `sub` - This will be the smaller text below the title
3. `icon` - Here is where you will specify either the base64 icon, emoji, or Font Awesome class name for the icon you want to use
4. *[optional] You can add additional fields that contain whatever information you want. These will not be printed in the created menu, and can be fetched later in order to drive more advanced behavior based on user selection. Here we use `field1` and `field2` as examples*

![Menu Generator - Menu Command Image](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-advanced-menu.png?raw=true)

#### Using The `menu` Command To Generate The Menu

Once you've prepared your list of menu item dictionaries, we prepare an input dictionary for Menu Generator:

1. Make a new dictionary with a text key named `command` with the value `menu`
2. Next, add a `Set Dictionary` action and set the value of the `menu` key to your list of menu item dictionaries (here we've named the list variable `Menu item list`)
3. Below that, use the `Run Shortcut` action to run Menu Generator, and pass the dictionary from (1) as input

#### Tell Shortcuts That The Output Is A vCard File

The output of the `Run Shortcut` action will be a single text object that contains the created menu.

1. Use a `Set Name` action to set the name of the `Shortcut Result` to `menu.vcf`
2. Finally, add a `Choose From List` action to choose from `Renamed Item`, and make sure the type of `Renamed Item` is set to `contact`

#### Retrieving Data From The Chosen Menu Option

If you added any non-printed "extra" fields to your menu (we added `field1` and `field2` in our example), you can use the `get menu item details` command to fetch that data from the user-selected item.

1. Create another dictionary with the following text keys:
    - `command` - With the value `get menu item details`
    - `title` - With the value `Name` pulled from a magic variable of the `Renamed Item`
    - `sub` - With the value `Company` also pulled from a magic variable of the `Renamed Item`
2. Pass this dictionary as input to a `Run Shortcut` action pointing to Menu Generator
3. The `Shortcut Result` will be the menu item dictionary corresponding to the user-selected menu item
4. Using the returned dictionary, you can then access any of the extra fields you defined earlier

### Create A Menu With The Quick Menu Tool

![Menu Generator Quick Menu](https://github.com/jpasholk/SiriShortcuts/blob/main/img/menu-generator-quick-menu-example.png?raw=true)

If you need a quick and simple method of making menus, then you can just throw everything into a `Text` action.

#### Using A Text Field To Make A Menu

1. Define your icon with base64, Font Awesome, or an emoji
2. Enter the text for each menu item
    - Use `title`, `sub`, and `icon`, followed by a colon like so: `title: Hello World!`
    - Make sure there is a line separating each menu option like the screenshot above
3. Add a `Dictionary` action under the `text` action
4. In that `Dictionary`, add two `Text` keys with the following values:
    - `command` With the value `quick menu`
    - `menu` With the value `Quick menu text` pulled from the magic variable of the `Text` action
5. Now, place a `Run Shortcut` action below that and select Menu Generator
6. Then, use a `Set Name` action to set the name of the Shortcut Result to `menu.vcf`
7. Next, add a `Choose From List` action to choose from the `Renamed Item`, and make sure the type is set to `contact`

After that, you can then use `If` actions to perform tasks based on the option selected.

- When using quick menus, you cannot define extra, non-printed fields.
- The `title` and `sub` values of the selected menu item are accessed using the `Name` and `Company` values of the selected menu item (a Contact object)

***

## Example Shortcuts

- [Menu Generator Example - Menu](https://www.icloud.com/shortcuts/faf299dcdb0845a6aaf3957e7ad54e3b)
    - Creates an advanced menu with Menu Generator using the different types of icons (base64, Font Awesome, Emoji, and Photos)
- [Toolbox Pro Menu Generator](https://www.icloud.com/shortcuts/895d5aea0129459aa5204c312742206e) - (*Requires Toolbox Pro*)
    - Uses Toolbox Pro to create an advanced menu
    - *Provided for comparison*
- [Menu Generator Example - Menu Items](https://www.icloud.com/shortcuts/effd803e7aae4421b79c3026838c8f3c)
    - Creates an advanced menu with Menu Generator, then uses the cache to present another menu without the need to regenerate anything
- [Menu Generator - Quick Menu](https://www.icloud.com/shortcuts/6d01003ff5bd4e91b784bef436385b6b)
    - Creates a quick menu utilizing a `text` action
- [Toolbox Pro Quick Menu](https://www.icloud.com/shortcuts/3bdb5b49dfb44884afc5472b6386919f)
    - Uses Toolbox Pro's `Quick menu` action
    - *Provided for comparison*
- [Menu Generator - Photo Menu](https://www.icloud.com/shortcuts/3862685e4e5348c7be3fae3326a41960)
    - Pulls the last 10 photos from your Photo Library to create a menu with photos for icons

## Embed Menu Generator Inside Your Shortcut

Use the [Join Shortcuts](https://routinehub.co/shortcut/10038/) shortcut by [gluebyte](https://routinehub.co/user/gluebyte) to embed Menu Generator inside your own shortcut.

- Simplify installation and distribution of your shortcut by removing the need for the user to install Menu Generator as a separate shortcut
- Simplify running of your shortcut by removing the permissions prompt to "run another shortcut"
- *Join Shortcuts works best on macOS, where it can sign the resulting merged shortcut*
- As an alternative, you could start your own shortcut from a duplicate of the Menu Generator shortcut
  - Make sure to collapse the If action in order to hide all the Menu Generator actions and simplify subsequent shortcut development

**As An example, My [Gemini Chat Manager](https://routinehub.co/shortcut/17671/) shortcut has Menu Generator embedded inside it.**

1. Install Menu Generator (this shortcut) and the [Join Shortcuts](https://routinehub.co/shortcut/10038/). shortcut
   - Join Shortcuts works by allowing you to insert one shortcut inside another.
   - Each Comment action in the destination shortcut serves as a placeholder for inserting a source shortcut.
2. Create a Comment action near the top of your shortcut. Inside, put something like "menu generator".
3. Run the Join Shortcuts shortcut.
4. Select your shortcut at the destination shortcut.
5. Select the comment made in step 2 as the place to insert the source shortcut.
6. Select the Menu Generator shortcut as the source shortcut.
7. Select "Finish Joining" and save the resulting shortcut as a copy or by replacing your shortcut with the joined version.
8. Change any "Run Shortcut" actions to point to your shortcut (so that it runs itself) instead of Menu Generator, and now your shortcut has built-in pretty menus!

## Credits

- [jpasholk’s “vCard Menu Helper”](https://routinehub.co/shortcut/18220) (Inspiration for this shortcut, though other great vCard menu shortcuts also exist)
- [DylanShortcuts’ “Emoji to Image”](https://routinehub.co/shortcut/14899) adapted to turn an emoji into an image
- [SACUL_6’s “Create Menu Using Font Awesome”](https://routinehub.co/shortcut/17750) adapted for Font Awesome icon fetching
- [Toolbox Pro for Shortcuts](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977) (Inspiration for structure of Quick Menu feature and of menu items when a dictionary is used as input).
- jpasholk wrote this description, and was pivotal in the preliminary design of the Shortcut.

## Attribution

If you use Menu Generator in any of your Shortcuts please place a comment with the below text at or near the top of your Shortcut:

> Menus created by Menu Generator by @twilsonco.

If you publish your Shortcut to RoutineHub or any other Shortcuts sharing platform please use this badge:

![Menu Generator Badge](https://github.com/jpasholk/SiriShortcuts/blob/main/img/made-with-menu-generator-badge.png?raw=true)

### You Can Copy This Markdown To Make It Easier

```![Menu Generator by @twilsonco](https://github.com/jpasholk/SiriShortcuts/blob/main/img/made-with-menu-generator-badge.png?raw=true)```

> Markdown for GitHub & RoutineHub created with &#x2665; by [jpasholk](https://routinehub.co/user/jpasholk).

***

Thanks for stopping by, and if you have any questions don’t hesitate to reach out!