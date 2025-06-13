# Lucy: Your Configurable Siri Shortcut Assistant

Lucy is a Siri Shortcut for iOS, iPadOS, and macOS that integrates with any OpenAI API-compatible Large Language Model (LLM) endpoint. It operates by utilizing other shortcuts as tools to accomplish tasks. Lucy works with full control over planning and execution, calling tools sequentially without requiring user input or oversight. This is similar to the model context protocol (MCP) that's gaining popularity in the AI community, where a model can call other models or tools to complete tasks.

This shortcut was initially introduced by r/Neurogram. I improved things by creating expanding Lucy's toolset and enhancing the capabilities its existing tools. Other improvements include:

* Improved user communication (including presenting lists of choices where appropriate)
* Automatic downloading of missing or updated tools
* JSON validation of LLM responses to prevent errors or crashes
* Debug logging

**Configurability:**
Lucy is configurable to meet user preferences:

*   **Tool Access:** Users can select which tools Lucy has access to, either for a single run or on a persistent basis by configuring the shortcut.
*   **Permissions:** Each tool can be configured to require user permission before use. If enabled, approval can be granted for each individual usage or once per tool per Lucy run.
*   **Notifications:** Notifications can be configured to show when each tool is used.

**Tool Management:**
Lucy's tools are separate Siri Shortcuts. They download automatically when you run Lucy if they've been updated or are not yet installed.

### Lucy's Toolset

1.  **Contacts**: Manages contacts, including searching and adding entries.
2.  **Reminders**: Manages tasks and reminders within the Reminders app.
3.  **Maps**: Searches places, provides navigation, and retrieves current location using map applications.
4.  **Notes**: Manages notes, allowing creation, modification, organization, and searching.
5.  **Weather**: Retrieves current and forecasted weather for specified locations.
6.  **Calendar**: Manages events, including searching, creating, and editing entries in the Calendar app.
7.  **Messages**: Sends messages to specified recipients via the Messages app.
8.  **Mail**: Sends emails to specified recipients via the Mail app.
9.  **Web**: Performs web searches and retrieves content from webpages. Requires a free API key for a Google Programmable Search Engine.
10. **SummarizeText**: Summarizes text and webpage content to reduce token usage. Requires LLM API information.
11. **Terminal**: Executes Unix shell commands in a local terminal environment.
12. **RunJavaScript**: Executes custom JavaScript code for computational tasks and string processing.
13. **Pythonista**: Executes Python code in the Pythonista app.
14. **DeepResearch**: Conducts in-depth research by aggregating data from multiple sources to create informative reports.
15. **RecipeCataloger**: Catalogs recipes by finding, extracting, and organizing them from web sources into a personal collection.
16. **VoiceMode**: Manages voice communication, enabling spoken interactions with the user.
17. **Memory**: Stores, retrieves, and searches for important information (memories) about the user.

---

### Examples of What Lucy Can Do

**Example:**
- **You:** "Text Jake to let him know which day we should meet next week for frisbee golf, and include some recommendations for good courses near me."
- **Lucy:**
    1. Call 'Weather' Shortcut to check next week's weather.
    2. Call 'Calendar' Shortcut to find free days.
    3. Call 'Contacts' Shortcut to get Jake's phone number, handling multiple "Jakes".
    4. Call 'Maps' Shortcut to find nearby frisbee golf courses.
    5. Call 'Web' Shortcut to search for reviews of those courses.
    6. Call 'Messages' Shortcut to send the message to Jake with the chosen day and course recommendations.

**Example:**
- **You:** "Should I take eastern or southern route from Denver to Houston next Tuesday? Which has better driving weather?"
- **Lucy:**
    1. Call 'Maps' Shortcut to identify intermediate locations along both routes.
    2. Call 'Weather' Shortcut to get the forecast for those locations for next Tuesday.
    3. Respond with the route that has better driving weather.

**Example:**
- **You:** "Is now a good time to upgrade my Mac?"
- **Lucy:**
    1. Call 'Web' Shortcut to search for articles and forums regarding Mac product cycles and community consensus.
    2. If needed, call 'SummarizeText' Shortcut or 'Web' Shortcut (get_webpage_content) to fetch full or summarized website content.
    3. Present the user with the results.

**Example:**
- **You:** "Research the best exercise/diet routine for a guy in their 20s."
- **Lucy:**
    1. Call 'DeepResearch' Shortcut to begin an in-depth analysis.
    2. This involves calling 'Web' Shortcut for multiple Google searches.
    3. This involves calling 'SummarizeText' Shortcut to summarize dozens of relevant websites.
    4. Compile and answer the user's request.

**Example:**
- **You:** "Plan my San Francisco trip next month. Find flights and hotels, suggest 3 attractions, and add trip details to my calendar."
- **Lucy:**
    1. Call 'Web' Shortcut to search for flights, hotels, and attractions within specified parameters.
    2. If needed, call 'SummarizeText' Shortcut to process travel information from multiple sources.
    3. Call 'Calendar' Shortcut to create events for the trip dates.
    4. Call 'Notes' Shortcut to store the full itinerary including flight/hotel bookings and chosen attractions.

**Example:**
- **You:** "Send a thank-you email to everyone who attended my birthday party last weekend. Find their contact info first."
- **Lucy:**
    1. Call 'Calendar' Shortcut to find the "Birthday Party" event from last weekend and identify attendees.
    2. Call 'Contacts' Shortcut to retrieve the email addresses for each attendee.
    3. Call 'Mail' Shortcut to draft and send personalized thank-you emails.

**Example:**
- **You:** "I love racing movies."
- **Lucy:**
    1. Call 'Memory' Shortcut to store this information as a memory.
    
**Example:**
- **You:** "Are there any good movies coming out this weekend I might like?"
- **Lucy:**
    1. Call 'Memory' Shortcut to retrieve the user's preferences.
    2. Call 'Web' Shortcut to search for upcoming movie releases.
    3. Call 'SummarizeText' Shortcut to summarize relevant movie reviews.
    4. Present the user with a list of recommended movies based on their preferences.

### Getting Started and Setup

Setting up Lucy involves configuring its options within the main Lucy shortcut. These settings are found in a Dictionary action at the top of the shortcut:

![Main Lucy configuration](https://raw.githubusercontent.com/twilsonco/SiriShortcuts/refs/heads/main/Lucy/img/config.webp)

1.  **LLM Settings:**
    *   `provider`: Text (e.g., "Google" for Google models)
    *   `url`: Text (the API endpoint URL)
    *   `text_model`: Text (the specific LLM model ID)
    *   `api_key`: Text (your API key for the chosen LLM provider)
    *   `temperature`: Number between 0-2. Lower values yield more consistent, less error-prone, but less creative responses.
    *   `reasoning_model`: Boolean. Set to `True` if the LLM you are using is a "reasoning model"; set to `False` if unsure.

2.  **Tool and Interaction Settings:**
    *   `choose_tools`: Boolean. If `True`, Lucy will present a list of tools for you to enable on each run.
    *   `choose_select_all`: Boolean. If `choose_tools` is `True`, setting this to `True` will initially select all tools in the list presented to the user.
    *   `install_tools`: Boolean. If `True`, Lucy will check that all enabled tools are installed on startup. Missing or updated tools will automatically download.
    *   `token_usage_notification`: Boolean. If `True`, displays a notification showing token usage after a run.
    *   `approve_tools`: Boolean. If `False`, disables tool approval dialogs completely.
    *   `debug_logging`: Boolean. If `True`, logging is enabled and requires the free "Logger for Shortcuts" App.
    *   `update_check_freq`: Number. How often (in days) to check for updates to Lucy and its tools. Set to `0` to check every run, or `-1` to disable update checks.

3. **Tool Configuration:**
    *   Each tool has three options: `enable`, `run_confirmation`, and `run_notification`.
    *   Only the tools you enable will download and be available for use.

![Example of tool configuration](https://raw.githubusercontent.com/twilsonco/SiriShortcuts/refs/heads/main/Lucy/img/tool_config.webp)

1.  **Initial Run:** After configuring your LLM settings, run Lucy. It will automatically download and install all enabled tools.

2.  **Individual Tool Setup:** Some tools require their own specific configuration. For example, the **Web** tool requires a free API key for a Google Programmable Search Engine, and the **SummarizeText** tool requires LLM API information.

### Contributing
Contributions are welcome! If you have ideas for new tools, improvements, or bug fixes, please submit a pull request or open an issue.

### Acknowledgments
Lucy was inspired by the original concept from r/Neurogram.