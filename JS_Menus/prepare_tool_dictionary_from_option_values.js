const tool_options = {
      "enabled": {
        "Alarms": true,
        "AppStore": true,
        "Calendar": true,
        "Clock": true,
        "Contacts": true,
        "DeepResearch": true,
        "Device": true,
        "Mail": true,
        "Maps": true,
        "Memory": true,
        "Messages": true,
        "MorseCode": true,
        "Notes": true,
        "Pythonista": true,
        "RecipeCataloger": true,
        "Reminders": true,
        "RunJavaScript": true,
        "Summarize": true,
        "Terminal": true,
        "Timers": true,
        "VoiceMode": true,
        "Weather": true,
        "Web": true
      },
      "config": {
        "Alarms": {
          "run_confirmation": false,
          "run_notification": true
        },
        "AppStore": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Calendar": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Contacts": {
          "run_confirmation": false,
          "run_notification": true
        },
        "DeepResearch": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Device": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Mail": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Maps": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Memory": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Messages": {
          "run_confirmation": false,
          "run_notification": true
        },
        "MorseCode": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Notes": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Pythonista": {
          "run_confirmation": false,
          "run_notification": true
        },
        "RecipeCataloger": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Reminders": {
          "run_confirmation": false,
          "run_notification": true
        },
        "RunJavaScript": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Summarize": {
          "run_confirmation": false,
          "run_notification": true,
          "parameters": {
            "provider": "Goodle",
            "api_key": "your_api_key_here",
            "url": "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions/",
            "model": "models/gemini-2.5-flash"
          }
        },
        "Terminal": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Timers": {
          "run_confirmation": false,
          "run_notification": true
        },
        "VoiceMode": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Weather": {
          "run_confirmation": false,
          "run_notification": true
        },
        "Web": {
          "run_confirmation": false,
          "run_notification": true,
          "parameters": {
            "search_engine_id": "",
            "api_key": ""
          }
        }
      },
      "choose_tools": false,
      "choose_select_all": true,
      "install_tools": true,
      "approve_tools": false
    };

const tool_urls = {
    "Device_v1-0":"https:\/\/www.icloud.com\/shortcuts\/875681d63c0e46d88e00d280e56f6b15","Alarms_v1-0":"https:\/\/www.icloud.com\/shortcuts\/1c895d4a1eb343a6b467dc659bbb55c5","Memory_v1-2":"https:\/\/www.icloud.com\/shortcuts\/a7150a7d9f6a4d9f90dbfcc871cbf7d1","Messages_v1-1":"https:\/\/www.icloud.com\/shortcuts\/05c45719e0ff44deabc7e9f18e68106b","Summarize_v1-2":"https:\/\/www.icloud.com\/shortcuts\/bfd0dc989f9142f691c3d5f1929cdc2b","Terminal_v1-1":"https:\/\/www.icloud.com\/shortcuts\/4d275920264a4111b37600e793c140db","VoiceMode_v1-0":"https:\/\/www.icloud.com\/shortcuts\/53812561932446f6b83e16ef7b469b9c","Maps_v1-2":"https:\/\/www.icloud.com\/shortcuts\/7d8498566a0f4369aafaabee836ce4b0","Pythonista_v1-1":"https:\/\/www.icloud.com\/shortcuts\/4879e7c9daa947cfbcd6a517415304d4","Notes_v1-2":"https:\/\/www.icloud.com\/shortcuts\/7a6c17f3659a4f26a67a8489dcb388e4","AppStore_v1-0":"https:\/\/www.icloud.com\/shortcuts\/4d531b8de0404ba783e41873eaefdbd4","DeepResearch_v1-2":"https:\/\/www.icloud.com\/shortcuts\/14f24c9a251b4323a30e5f7f9c4bc1ba","RunJavaScript_v1-1":"https:\/\/www.icloud.com\/shortcuts\/9d65f594ff10419b9daaf8dde6e09b52","RecipeCataloger_v1-0":"https:\/\/www.icloud.com\/shortcuts\/4aedae38060348a6868ffa720faab7bf","Mail_v1-1":"https:\/\/www.icloud.com\/shortcuts\/4715a81960fb46ab9acda0a0343fb7e8","MorseCode_v1-0":"https:\/\/www.icloud.com\/shortcuts\/b0a361cd5dea4fd087e1b0868b983fd5","Timers_v1-0":"https:\/\/www.icloud.com\/shortcuts\/960bd73a2d58463da1a29cff4a3526f6","Reminders_v1-4":"https:\/\/www.icloud.com\/shortcuts\/14ff9e42af8b43edb2d3d462f283a828","Web_v1-3":"https:\/\/www.icloud.com\/shortcuts\/ab8d6a84736e4ea1a99931f4df5561e0","Calendar_v1-1":"https:\/\/www.icloud.com\/shortcuts\/8f5e1f2974cc462e9ffc87bb4c9871b0","Contacts_v1-1":"https:\/\/www.icloud.com\/shortcuts\/62e234a8cec741428cbfc658e4100107","Weather_v1-3":"https:\/\/www.icloud.com\/shortcuts\/b622f0f6af7b467589d80f18262fc113"
};

const tools = {};

for (const [toolKey, url] of Object.entries(tool_urls)) {
    const toolName = toolKey.split('_')[0];
    
    tools[toolKey] = {
        enable: tool_options.enabled[toolName] || false,
        url: url
    };
    
    // Add all key/value pairs from tool_options, copying them into tools with the same key
    for (const [key, value] of Object.entries(tool_options.config[toolName] || {})) {
        tools[toolKey][key] = value;
    }
}

console.log(JSON.stringify(tools, null, 2));
