# Lucy

**[Direct download link](https://www.icloud.com/shortcuts/bd8a27f658d74b0d9b11310c2c782cfe)**

Lucy is a Siri Shortcut for iOS, iPadOS, and macOS that integrates with any OpenAI API-compatible Large Language Model (LLM) endpoint. It operates by utilizing other shortcuts as tools to accomplish tasks. Lucy works with full control over planning and execution, calling tools sequentially without requiring user input or oversight. This is similar to the model context protocol (MCP) that's gaining popularity in the AI community, where a model can call other models or tools to complete tasks.

You can run the Lucy shortcut directly, or share text/image to Lucy to use it as context.

Try running Lucy and ask her what she can do!

This shortcut was initially introduced by u/Neurogram. I improved things by creating expanding Lucy's toolset and enhancing its existing tools. Other improvements include:

- Image input support
- Improved user communication (including presenting lists of choices where appropriate)
- Automatic downloading of missing or updated tools
- JSON validation of LLM responses to prevent errors or crashes
- Optional debug logging (requires the free ["Logger for Shortcuts" app](https://apps.apple.com/us/app/logger-for-shortcuts/id1611554653))

**Configurability:**
Lucy is configurable to meet user preferences:

- **Tool Access:** Users can select which tools Lucy has access to, either for a single run or on a persistent basis by configuring the shortcut.
- **Permissions:** Each tool can be configured to require user permission before use. If enabled, approval can be granted for each individual usage or once per tool per Lucy run.
- **Notifications:** Notifications can be configured to show when each tool is used.

**Tool Management:**
Lucy's tools are separate Siri Shortcuts. You get to decide which tools will be loaded. Enabled tools download automatically when you run Lucy if they've been updated or are not yet installed.

### Lucy's Toolset

1.  **Alarms**: Create/enable/disable/delete or get information about alarms in the Clock app.
2.  **App Store**: Search for iOS/iPad/Mac apps
3.  **Calendar**: Manages events, including searching, creating, and editing entries in the Calendar app.
4.  **Contacts**: Manages contacts, including searching and adding entries.
5.  **DeepResearch**: Conducts in-depth research by aggregating data from multiple sources to create informative reports saved to Notes.
6.  **Device**: Controls device settings and retrieves device info.
    - Settings that can be changed (*italics means not on Mac*):  *`accessibility_assistive_touch`*, `accessibility_audio_descriptions`, `accessibility_captions_shd`, `accessibility_color_filters`, `accessibility_increased_ui_contrast`, `accessibility_live_captions`, `accessibility_mono_audio`, *`accessibility_reduce_white_point`, `accessibility_start_guided_access`*, `accessibility_voice_control`, `accessibility_voice_over`, `airdrop_receive_contacts_only`, `airdrop_receive_everyone_10_minutes`, *`airplane_mode`, `auto_answer_calls`*, `bluetooth`, *`cellular_data`, `cellular_data_roaming`, `flashlight`, `font_size`, `LED_flash_for_calls_notifications`*, `lock_screen`, *`low_power_mode`*, `media_volume`, *`orientation_lock`, `personal_hotspot_password`, `personal_wifi_hotspot`, `play_background_sounds`, `play_background_sounds_when_media_is_playing`*, `reboot_device`, `recognize_ambient_sounds`, `reduce_ui_motion`, `reduce_ui_transparency`, *`reset_cellular_data_statistics`*, `ringtone_volume`, `screen_brightness`, `screen_night_shift_warm_colors`, `screen_true_tone_color`, `shutdown_device`, `ui_classic_invert_colors`, `ui_dark_mode`, `ui_smart_invert_colors`, `vpn`, `vpn_on_demand`, `wifi`
    - Info that can be retrieved: `battery`, `current_focus_mode`, `device_and_OS_info`, `display_info`, `network_info`, *`personal_hotspot_password`*, `volume`
7.  **Mail**: Sends emails to specified recipients via the Mail app.
8.  **Maps**: Searches places, provides navigation, and retrieves current location using Maps app.
9.  **Memory**: Stores, retrieves, and searches for important information (memories) about the user.
10. **Messages**: Sends messages to specified recipients via the Messages app.
11. **MorseCode**: Converts text messages to Morse code and transmits them using the device's flashlight and/or screen flashing. This tool can be used for fun or in emergencies.
12. **Notes**: Manages Apple Notes app, allowing creation, modification, organization, and searching.
13. **Pythonista**: Executes Python code using the [Pythonista app](https://apps.apple.com/us/app/pythonista-3/id1085978097).
14. **RecipeCataloger**: Catalogs recipes by finding, extracting, and organizing them from web sources into a personal collection. Each recipe gets a Note and its ingredients list added to "Lucy's Shopping List" in Reminders.
15. **Reminders**: Manages tasks and reminders within the Reminders app.
16. **RunJavaScript**: Executes custom JavaScript code for computational tasks and string processing.
17. **Summarize**: Summarizes text, webpage content (including PDF and other files), or YouTube video transcripts to reduce token usage for the main model. Requires LLM API information.
18. **Terminal**: Executes Unix shell commands in a local terminal environment (using the [A-Shell Mini app](https://apps.apple.com/us/app/a-shell-mini/id1543537943) on iOS/iPadOS, but uses Terminal on macOS (no admin privileges) for more power).
19. **Timers**: Set a timer or pause/resume/cancel/check current timer in the Clock app.
20. **VoiceMode**: Switches a text conversation to a voice conversation. Ask to leave voice mode and it will return to text mode.
21. **Weather**: Retrieves current and forecasted weather for specified locations.
22. **Web**: Performs web searches (Google, ArXiv, ChemRxiv), retrieves content from webpages, and retrieves YouTube video transcripts. Requires a free API key for a Google Programmable Search Engine to do google searches.

### Auxiliary Shortcuts (not tools)

1. [Create task/note/event with Lucy](https://www.icloud.com/shortcuts/92fb1c2d8554436880db12c24f6600da): Share text or an image to Lucy which will create a task, note, or event based on the content.
2. [Create contact from image with Lucy](https://www.icloud.com/shortcuts/51cb272474a24b33845142a12e45b9fb): Run directly to take photo(s) or share images to the shortcut to have Lucy create a new contact from the info in the image/photo.

---

### Examples of What Lucy Can Do

##### "Are there any good videos about neural networks on YouTube?"

- **Lucy:**
  1. Call 'Web' to perform Google search for relevant YouTube videos
  2. Present results to user
- **User:** "Tell me about the contents of the first video."
- **Lucy:**
  1. Call 'Summarize' to get a summary of the YouTube video transcript and present it to the user

##### "Set a 7am alarm on weekdays and an 8am alarm on weekends"

- **Lucy:**
  1. Call 'Alarms' to set the requested alarms

##### "Text Jake to let him know which day we should meet next week for frisbee golf, and include some recommendations for good courses near me."

- **Lucy:**
  1. Call 'Weather' to check next week's weather.
  2. Call 'Calendar' to find free days.
  3. Call 'Contacts' to get Jake's phone number, handling multiple "Jakes".
  4. Call 'Maps' to find nearby frisbee golf courses.
  5. Call 'Web' to search for reviews of those courses.
  6. Call 'Messages' to send the message to Jake with the chosen day and course recommendations.
  7. [Depending on the value of the "preview" options in the Messages tool shortcut]
     - [preview enabled] Messages compose preview windows opens with the drafted message, allowing you to review and send it.
     - [preview disabled] Messages sends the message directly without preview.

##### "Let's plan a hike-party up Pike's Peak for Steve next month in my Hiking group sometime the week after next. Find a good day, put it on my calendar, put necessary supplies on my shopping list, and text Steve and the group."

- **Lucy:**
  1. Call 'Weather' to check the weather forecast for Pike's Peak for the week after next.
  2. Call 'Calendar' to find a free day in your schedule.
  3. Call 'Calendar' to create an event for the hike-party on the chosen day.
  4. Call 'Contacts' to get Steve's contact information and the Hiking group.
  5. Call 'Reminders' to add necessary supplies to "Lucy's Shopping List".
  6. Call 'Messages' to draft a message to Steve and the Hiking group with the planned date and details.
  7. [Depending on the value of the "preview" options in the Messages tool shortcut]
     - [preview enabled] Messages compose preview windows opens with the drafted message, allowing you to review and send it.
     - [preview disabled] Messages sends the message directly without preview.

##### "I have to pick between Seattle and Denver for some work next week. Which city has better weather?"

- **Lucy:**
  1. Call 'Weather' to get the forecast for Seattle and Denver for next week.
  2. Compare the weather conditions and respond with the city that has better weather.

##### "Is now a good time to upgrade my Mac?"

- **Lucy:**
  1. Call 'Web' to search for articles and forums regarding Mac product cycles and community consensus.
  2. If needed, call 'SummarizeText' Shortcut or 'Web' (get_webpage_content) to fetch full or summarized website content.
  3. Present the user with the results.

##### "Plan my San Francisco trip next month. Find flights and hotels, suggest 3 attractions, and add trip details to my calendar."

- **Lucy:**
  1. Call 'Web' to search for flights, hotels, and attractions within specified parameters.
  2. If needed, call 'SummarizeText' to process travel information from multiple sources.
  3. Call 'Calendar' to create events for the trip dates.
  4. Call 'Notes' to store the full itinerary including flight/hotel bookings and chosen attractions.

##### "Send a thank-you email to everyone who attended my birthday party last weekend. Find their contact info first."

- **Lucy:**
  1. Call 'Calendar' to find the "Birthday Party" event from last weekend and identify attendees.
  2. Call 'Contacts' to retrieve the email addresses for each attendee.
  3. Call 'Mail' to draft and send personalized thank-you emails.

##### "I love racing movies."

- **Lucy:**
  1. Call 'Memory' to store this information as a memory.

##### "Are there any good movies coming out this weekend I might like?"

- **Lucy:**
  1. Call 'Memory' to retrieve the user's preferences.
  2. Call 'Web' to search for upcoming movie releases.
  3. Call 'SummarizeText' to summarize relevant movie reviews.
  4. Present the user with a list of recommended movies based on their preferences.

### Getting Started and Setup

Setting up Lucy involves configuring its options within the main Lucy shortcut. These settings are found in a Dictionary action at the top of the shortcut:

![Main Lucy configuration](https://raw.githubusercontent.com/twilsonco/SiriShortcuts/refs/heads/main/Lucy/img/config.webp)

1.  **LLM Settings:**

    - `provider`: Text (e.g., "Google" for Google models)
    - `url`: Text (the API endpoint URL)
    - `text_model`: Text (the specific LLM model ID)
    - `api_key`: Text (your API key for the chosen LLM provider)
    - `temperature`: Number between 0-2. Lower values yield more consistent, less error-prone, but less creative responses.
    - `reasoning_model`: Boolean. Set to `True` if the LLM you are using is a "reasoning model"; set to `False` if unsure.

2.  **Tool and Interaction Settings:**

    - `choose_tools`: Boolean. If `True`, Lucy will present a list of tools for you to enable on each run.
    - `choose_select_all`: Boolean. If `choose_tools` is `True`, setting this to `True` will initially select all tools in the list presented to the user.
    - `install_tools`: Boolean. If `True`, Lucy will check that all enabled tools are installed on startup. Missing or updated tools will automatically download.
    - `token_usage_notification`: Boolean. If `True`, displays a notification showing token usage after a run.
    - `approve_tools`: Boolean. If `False`, disables tool approval dialogs completely.
    - `debug_logging`: Boolean. If `True`, logging is enabled and requires the free ["Logger for Shortcuts" App](https://apps.apple.com/us/app/logger-for-shortcuts/id1611554653).
    - `update_check_freq`: Number. How often (in days) to check for updates to Lucy and its tools. Set to `0` to check every run, or `-1` to disable update checks.

3.  **Tool Configuration:**
    - Each tool has three options: `enable`, `run_confirmation`, and `run_notification`.
    - Only the tools you enable will download and be available for use.

![Example of tool configuration](https://raw.githubusercontent.com/twilsonco/SiriShortcuts/refs/heads/main/Lucy/img/tool_config.webp)

1.  **Initial Run:** After configuring your LLM settings, run Lucy. It will automatically download and install all enabled tools.

2.  **Individual Tool Setup:** Some tools require their own specific configuration. For example, the **Web** tool requires a free API key for a Google Programmable Search Engine, and the **SummarizeText** tool requires LLM API information.

### Contributing

Contributions are welcome. If you have ideas for new tools, improvements, or bug fixes, please comment below!

### Acknowledgments

Lucy was inspired by the original concept from r/Neurogram.
