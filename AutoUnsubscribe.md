# Auto Unsubscribe

*Google Gemini version using Gemini via API*

Auto Unsubscribe is a shortcut for automatically sending opt-out responses (e.g. "STOP") to spam text messages.
I made it because I get far too many political texts, but needed a tool that wouldn't auto-unsubscribe from *everything*, just the spam I don't want.

So far it's worked pretty good with 100% accuracy for the spam texts I receive. \*knocks wood

## How it works

Incoming messages are screened for spam and categorized, and the chosen categories are automatically replied to.

1. You set it up as an automation, triggered by messages with the word "stop" in them, because the spam I get often contains some variation of "stop to quit" at the end.
   1. You also define a list of types of spam that you want to use as categories,
   2. and the spam types that should be auto-responded to.

| ![Basic setup](https://github.com/twilsonco/SiriShortcuts/blob/main/img/auto%20unsub%20method1.png?raw=true) | ![Check methods](https://github.com/twilsonco/SiriShortcuts/blob/main/img/auto%20unsub%20method2.png?raw=true) |
| ----- | ----- |
| Define basic opt-out phrase list, detection/capture [regex](https://regex101.com) string, define spam types. | More opt-out phrase checking and Google Gemini via API\* spam classification. |

1. When a message triggers the automation, it's checked a bit more rigorously for a matching opt-out phrase at the end of the message.
2. If a match is found, then Google Gemini is used as a classifier to determine the type of unsubscribability.
3. If the spam type is in the list of defined auto-respond types, then the opt out phrase is automatically sent in response.

\* *Google via API could be swapped out with any other similar service. You could replace the `Dictionary` and `Run Gemini via API` actions with the `Ask ChatGPT` action from the ChatGPT app or use some other API*

## Installation

### 1. Set up automation

1. In the Shortcuts app on iOS/iPadOS, go to the Automations tab and tap the "+" button to create a new automation.
2. Select a "Messages" automation type, and then set the "Message Contains" option to be triggered by the word "stop".
3. Tap "Next".

![Install 1](https://github.com/twilsonco/SiriShortcuts/blob/main/img/auto%20unsub%20automation1.png?raw=true)
4. Now we'll select the automation action. Tap "New Blank Automation"
5. In the new shortcut that opens, add a `Dictionary` action and add "from" and "body" keys to the dictionary, both text items.
   1. In the text field of each, tap and hold and select "Shortcut Input".
   2. Tap on the "Shortcut Input" for the "from" key and set it to "Sender".
   3. Tap on the "Shortcut Input" for the "body" key and set it to "Content".
6. Add a `Run Shortcut` action and point it to `Auto Unsubscribe`.

![Install 2](https://github.com/twilsonco/SiriShortcuts/blob/main/img/auto%20unsub%20automation2.png?raw=true)

### 2. Run Auto Unsubscribe in test mode

Run Auto Unsubscribe manually to allow it to acquire necessary permissions. It will run using some predefined test data, and generate a log file in your iCloud Drive/Shortcuts folder. This log will record everything Auto Unsubscribe does.

![Log](https://github.com/twilsonco/SiriShortcuts/blob/main/img/auto%20unsub%20logged.png?raw=true)

## Notes

* When run manually, the shortcut checks for updates and dependencies.
* I thought about having this do email too, but for email it's not as easy as replying with an opt-out phrase (you can often reply with subject "UNSUBSCRIBE" but it's not very dependable, and you often have a link to follow), so I probably won't try. At the very least I think it would take additional permissions each time it ran.
* It would be cool to have Google Gemini determine the correct opt-out phrase to use, but I worry about it messing up.
* Please let me know how this works for you, and feel free to offer suggestions and complaints.

| [![MediaKit](https://github.com/twilsonco/SiriShortcuts/blob/main/img/MediaKitCred.PNG?raw=true)](https://routinehub.co/shortcut/1911/) | [![Gemini via API](https://github.com/twilsonco/SiriShortcuts/blob/main/img/powered%20by%20gemini%20via%20api.PNG?raw=true)](https://routinehub.co/shortcut/17624/) |
| ----- | ----- |
