/*
================================================================================
APPLE SHORTCUTS MENU ENGINE v1.0
================================================================================
- This script uses a single, consolidated schema object for all validation.
- Inputs are defined at the top for easy replacement in Shortcuts.
================================================================================
*/

// ========================================================================
// :: SCRIPT INPUTS
// ========================================================================
// In Shortcuts, the `args` array contains the inputs.
// Define constants here for clarity and easy replacement.
const menuDict = {
    "model": {
        "index": 0,
        "type": "Submenu",
        "name": "LLM model settings",
        "description": "Settings for the LLM model used by Lucy",
        "menu": {
            "provider": {
                "index": 0,
                "type": "String",
                "name": "Model provider",
                "description": "Name of model provider",
                "value": "Goodle"
            },
            "api_key": {
                "index": 1,
                "type": "String",
                "name": "API Key",
                "description": "API key for the model",
                "value": "your_api_key_here",
                "masked": true
            },
            "url": {
                "index": 2,
                "type": "URL",
                "name": "API URL",
                "description": "URL for the model API",
                "value": "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions/"
            },
            "model": {
                "index": 3,
                "type": "String",
                "name": "Text Model",
                "description": "Name of the text model",
                "value": "models/gemini-2.5-flash"
            },
            "temperature": {
                "index": 4,
                "type": "Number",
                "name": "Temperature",
                "description": "Sampling temperature to use, between 0 and 2",
                "value": 0.5,
                "min": 0,
                "max": 2,
                "allow_decimal": true
            },
            "reasoning_model": {
                "index": 5,
                "type": "Boolean",
                "name": "Reasoning model",
                "description": "Whether the specified model is a reasoning model",
                "value": true
            },
            "reasoning_effort": {
                "index": 6,
                "type": "Enum",
                "name": "Reasoning effort",
                "description": "Level of reasoning effort to use",
                "value": "high",
                "menu": {
                    "low": {
                        "index": 0,
                        "type": "EnumOption",
                        "name": "Low reasoning effort",
                        "description": "Use a low level of reasoning effort with quick response",
                        "icon": {"dark_mode": "...", "light_mode": "..."}
                    },
                    "medium": {
                        "index": 1,
                        "type": "EnumOption",
                        "name": "Medium reasoning effort",
                        "description": "Balance between speed and quality",
                        "icon": {"dark_mode": "...", "light_mode": "..."}
                    },
                    "high": {
                        "index": 2,
                        "type": "EnumOption",
                        "name": "High reasoning effort",
                        "description": "Slow response; may cause timeout errors",
                        "icon": {"dark_mode": "...", "light_mode": "..."}
                    },
                    "none": {
                        "index": 3,
                        "type": "EnumOption",
                        "name": "No reasoning effort",
                        "description": "Do not use reasoning effort",
                        "icon": {"dark_mode": "...", "light_mode": "..."}
                    }
                }
            },
            "token_usage_notification": {
                "index": 7,
                "type": "Boolean",
                "name": "Token usage notification",
                "description": "Show token usage after each message with Lucy",
                "value": false
            }
        }
    },
    "tools": {
        "index": 1,
        "type": "Submenu",
        "name": "Tool settings",
        "description": "Settings for the tools used by Lucy",
        "menu": {
            "config": {
                "index": 0,
                "type": "Submenu",
                "name": "Configure tools",
                "description": "Enable and configure tools",
                "menu":{
                    "Alarms": {
                        "type": "Submenu",
                        "name": "Alarms",
                        "description": "Manage alarms in the clock app",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "AppStore": {
                        "type": "Submenu",
                        "name": "App Store",
                        "description": "Search for iOS/iPad/Mac apps",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Calendar": {
                        "type": "Submenu",
                        "name": "Calendar",
                        "description": "Create and manage calendar events",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Contacts": {
                        "type": "Submenu",
                        "name": "Contacts",
                        "description": "Access and manage contacts",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "DeepResearch": {
                        "type": "Submenu",
                        "name": "Deep Research",
                        "description": "Ask Lucy to do research on a topic",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Device": {
                        "type": "Submenu",
                        "name": "Device",
                        "description": "Access and manage device settings",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Mail": {
                        "type": "Submenu",
                        "name": "Mail",
                        "description": "Send emails using the Mail app",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Maps": {
                        "type": "Submenu",
                        "name": "Maps",
                        "description": "Search places, start navigation, get location",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Memory": {
                        "type": "Submenu",
                        "name": "Memory",
                        "description": "Allow Lucy to remember and recall information",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Messages": {
                        "type": "Submenu",
                        "name": "Messages",
                        "description": "Send messages using the Messages app",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "MorseCode": {
                        "type": "Submenu",
                        "name": "Morse Code",
                        "description": "Send messages using the flashlight and/or screen flashing",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Notes": {
                        "type": "Submenu",
                        "name": "Notes",
                        "description": "Create and manage Apple Notes",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Pythonista": {
                        "type": "Submenu",
                        "name": "Pythonista",
                        "description": "Run Python code with Pythonista App",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "RecipeCataloger": {
                        "type": "Submenu",
                        "name": "Recipe Cataloger",
                        "description": "Ask Lucy to find recipes",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Reminders": {
                        "type": "Submenu",
                        "name": "Reminders",
                        "description": "Manage Reminders app",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "RunJavaScript": {
                        "type": "Submenu",
                        "name": "Run JavaScript",
                        "description": "Execute JavaScript code",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Summarize": {
                        "type": "Submenu",
                        "name": "Summarize",
                        "description": "Summarize text or webpages during research",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Terminal": {
                        "type": "Submenu",
                        "name": "Terminal",
                        "description": "Use Terminal on Mac or a-Shell on iOS/iPadOS",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Timers": {
                        "type": "Submenu",
                        "name": "Timers",
                        "description": "Manage timers in the Clock app",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "VoiceMode": {
                        "type": "Submenu",
                        "name": "Voice Mode",
                        "description": "Tell Lucy to start a voice conversation",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Weather": {
                        "type": "Submenu",
                        "name": "Weather",
                        "description": "Get weather information and forecasts with the Weather app",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    },
                    "Web": {
                        "type": "Submenu",
                        "name": "Web",
                        "description": "Get website content and search Google/ArXiv/ChemRxiv",
                        "menu": {
                            "enabled": {
                                "type": "Boolean",
                                "name": "Enable",
                                "description": "Install and use tool",
                                "value": true
                            },
                            "run_confirmation": {
                                "type": "Boolean",
                                "name": "Run confirmation",
                                "description": "Require confirmation before using",
                                "value": false
                            },
                            "run_notification": {
                                "type": "Boolean",
                                "name": "Run notification",
                                "description": "Show a notification when used",
                                "value": true
                            }
                        }
                    }
                }
            },
            "choose_tools": {
                "index": 1,
                "type": "Boolean",
                "name": "Choose tools before each run",
                "description": "Choose from the tool list each time you run Lucy",
                "value": false
            },
            "choose_select_all": {
                "index": 2,
                "type": "Boolean",
                "name": "Select all tools by default",
                "description": "When choosing tools, select all by default",
                "value": true
            },
            "install_tools": {
                "index": 3,
                "type": "Boolean",
                "name": "Install/update tools",
                "description": "Install and check for updates to tools",
                "value": true
            },
            "approve_tools": {
                "index": 4,
                "type": "Boolean",
                "name": "Approve tool use",
                "description": "For configured tools, approve first use on each Lucy run",
                "value": false
            }
        }
    },
    "update_check_freq": {
        "index": 2,
        "type": "Number",
        "name": "Check for updates every",
        "description": "",
        "value": "7",
        "min": -1,
        "unit": "days"
    }
};

const stateDict = {"current_path":"model.menu.reasoning_effort.menu","new_value":{"model.menu.reasoning_effort.menu.low":""}};  // ➡️ Replace with State Dictionary variable

const IS_DARK_MODE = "Dark Mode" === "Dark Mode" ? true : false;

const CHECKMARK_ICONS = IS_DARK_MODE ? {
    checked: "iVBORw0KGgoAAAANSUhEUgAA...",
    unchecked: "iVBORw0KGgoAAAANSUhEUgAA..."
} : {
    checked: "iVBORw0KGgoAAAANSUhEUgAA...",
    unchecked: "iVBORw0KGgoAAAANSUhEUgAA..."
};

// Global icon for the main menu, used by the "Back" button.
const MAIN_MENU_ICON = IS_DARK_MODE ? "..." : "...";

const SAVE_AND_QUIT_ICON = IS_DARK_MODE ? "..." : "...";

// This object contains all definitions and top-level schemas.
const SCHEMAS = {
    "icon_object":{"type":"object","properties":{"dark_mode":{"type":"string","contentEncoding":"base64"},"light_mode":{"type":"string","contentEncoding":"base64"}},"required":["dark_mode","light_mode"],"additionalProperties":false},"menu_item_base":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"icon":{"$ref":"#/icon_object"},"index":{"type":"number"},"masked":{"type":"boolean","default":false}},"required":["name","description","type"]},"stringItem":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"String"},"value":{"type":"string"},"multiline":{"type":"boolean","default":false}},"required":["value"]}]},"urlItem":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"URL"},"value":{"type":"string"}},"required":["value"]}]},"numberItem":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"Number"},"value":{"type":"number"},"min":{"type":"number"},"max":{"type":"number"},"allow_decimal":{"type":"boolean","default":true}},"required":["value"]}]},"booleanItem":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"Boolean"},"value":{"type":"boolean"}},"required":["value"]}]},"EnumOption":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"EnumOption"}}}]},"enumItem":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"Enum"},"value":{"type":"string"},"menu":{"type":"object","additionalProperties":{"$ref":"#/EnumOption"}},"sorted":{"type":"boolean","default":false}},"required":["value","menu"]}]},"submenuItem":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"Submenu"},"menu":{"$ref":"#/menu"}},"required":["menu"]}]},"commandItem":{"allOf":[{"$ref":"#/menu_item_base"},{"type":"object","properties":{"type":{"const":"Command"}}}]},"menu_item":{"oneOf":[{"$ref":"#/stringItem"},{"$ref":"#/urlItem"},{"$ref":"#/numberItem"},{"$ref":"#/booleanItem"},{"$ref":"#/enumItem"},{"$ref":"#/submenuItem"},{"$ref":"#/commandItem"},{"$ref":"#/EnumOption"}],"discriminator":{"propertyName":"type"}},"menu":{"$schema":"http://json-schema.org/draft-07/schema#","title":"Menu Dictionary","type":"object","additionalProperties":{"$ref":"#/menu_item"}},"state":{"$schema":"http://json-schema.org/draft-07/schema#","title":"State Dictionary","type":"object","properties":{"current_path":{"type":"string","default":""},"new_value":{"type":"object","minProperties":1,"maxProperties":1,"additionalProperties":true},"option_values":{"$ref":"#/option_values"}},"required":["current_path"],"additionalProperties":false},"option_values":{"$schema":"http://json-schema.org/draft-07/schema#","title":"Option Values","type":"object","additionalProperties":{"type":["string","number","boolean"]}},"return":{"$schema":"http://json-schema.org/draft-07/schema#","title":"JS Return Object","oneOf":[{"type":"object","properties":{"menu":{"type":"array","items":{"type":"string"}},"option_values":{"$ref":"#/option_values"},"menu_dict":{"$ref":"#/menu"},"state":{"$ref":"#/state"},"command":{"type":"string"},"error":{"type":"string"}},"required":["menu","option_values","menu_dict","state"],"additionalProperties":false},{"type":"object","properties":{"error":{"type":"string"}},"required":["error"],"additionalProperties":false}]}
};

// ========================================================================
// :: HELPER FUNCTIONS
// ========================================================================
const getDescendantProp = (obj, path) => {
    if (!path) return obj;
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

const flattenOptionValues = (menu, prefix = '') => {
    let options = {};
    for (const key in menu) {
        const item = menu[key];
        const currentPath = prefix ? `${prefix}.${key}` : key;
        if ((item.type === 'Submenu' || item.type === 'Enum') && item.menu) {
            Object.assign(options, flattenOptionValues(item.menu, `${currentPath}.menu`));
        } else if (item.hasOwnProperty('value')) {
            options[currentPath] = item.value;
        }
    }
    return options;
};

const generateVCard = (key, item, pathPrefix) => {
    let subtitle = item.description;
    const fullPath = pathPrefix ? `${pathPrefix}.${key}` : key;
    let title = item.name;

    if (item.masked && item.hasOwnProperty('value')) {
        subtitle = '********';
    } else if (item.hasOwnProperty('value') && item.type !== 'Submenu' && item.type !== 'Boolean') {
        let displayValue = item.value;
        if (item.type === 'Enum' && item.menu && item.menu[item.value]) {
            displayValue = item.menu[item.value].name;
        }
        if (item.unit) {
          displayValue += ` ${item.unit}`;
        }
        subtitle = displayValue;
    }

    const vCardParts = [
        'BEGIN:VCARD', 'VERSION:3.0', `N;CHARSET=UTF-8:${title};`, `ORG;CHARSET=UTF-8:${subtitle};`, `NOTE;CHARSET=UTF-8:${fullPath}`, `TITLE;CHARSET=UTF-8:${item.type}`
    ];

    if (item.icon || item.type === 'Boolean') {
        const icon = (item.type === 'Boolean') ? CHECKMARK_ICONS[item.value ? 'checked' : 'unchecked'] : item.icon;
        if (icon) {
            const b64Icon = IS_DARK_MODE ? icon.dark_mode : icon.light_mode;
            if (b64Icon && b64Icon !== "...") {
                vCardParts.push(`PHOTO;ENCODING=b:${b64Icon}`);
            }
        }
    }
    if (item.type === 'Number') {
        let descSuffix = `. Current: ${item.value}`;
        if (item.unit) descSuffix += ` ${item.unit}`;
        const rangeParts = [];
        if (item.hasOwnProperty('min')) rangeParts.push(`Min: ${item.min}`);
        if (item.hasOwnProperty('max')) rangeParts.push(`Max: ${item.max}`);
        if (rangeParts.length > 0) descSuffix += ` (${rangeParts.join(', ')})`;
        vCardParts.push(`NICKNAME;CHARSET=UTF-8:${descSuffix}`);
    }

    vCardParts.push('END:VCARD');
    return vCardParts.join('\n');
};

// ========================================================================
// :: CORE LOGIC
// ========================================================================
const processMenu = (menu, state) => {
    const menuDict = JSON.parse(JSON.stringify(menu));

    let newPath = state.current_path;
    let command = null;
    let error = null;

    // 0. --- LOAD INITIAL VALUES ---
    if (state.option_values) {
        for (const [path, value] of Object.entries(state.option_values)) {
            const itemToUpdate = getDescendantProp(menuDict, path);
            if (itemToUpdate && itemToUpdate.hasOwnProperty('value')) {
                itemToUpdate.value = value;
            }
        }
    }
    
    // 1. --- APPLY NEW VALUE OR NAVIGATION ---
    if (state.new_value) {
        const itemPath = Object.keys(state.new_value)[0];
        const itemName = itemPath.split('.').pop();
        const itemToUpdate = getDescendantProp(menuDict, itemPath);

        if (itemName === "__back__") {
            const pathParts = newPath.split('.');
            newPath = pathParts.slice(0, -2).join('.');
        } else if (itemToUpdate && itemToUpdate.type === 'EnumOption') {
            const selectedOptionKey = itemName;
            const enumItemPath = state.current_path.replace(/\.menu$/, '');
            const enumItem = getDescendantProp(menuDict, enumItemPath);
            
            if (enumItem && enumItem.menu.hasOwnProperty(selectedOptionKey)) {
                enumItem.value = selectedOptionKey;
                const pathParts = enumItemPath.split('.');
                newPath = pathParts.slice(0, -2).join('.');
            } else {
                error = `Invalid option '${selectedOptionKey}' selected.`;
            }
        } else {
            const newValue = state.new_value[itemPath];
            if (!itemToUpdate) {
                error = `Error: Could not find item at path '${itemPath}' to update.`;
            } else {
                switch (itemToUpdate.type) {
                    case 'String': itemToUpdate.value = String(newValue); break;
                    case 'Number':
                        let num = Number(newValue);
                        if (itemToUpdate.hasOwnProperty('max')) num = Math.min(itemToUpdate.max, num);
                        if (itemToUpdate.hasOwnProperty('min')) num = Math.max(itemToUpdate.min, num);
                        if (itemToUpdate.allow_decimal === false) num = Math.round(num);
                        itemToUpdate.value = num;
                        break;
                    case 'Boolean': itemToUpdate.value = !itemToUpdate.value; break;
                    case 'Enum':
                    case 'Submenu':
                        newPath = itemPath + ".menu"; break;
                    case 'Command': command = itemPath; break;
                }
            }
        }
    }

    // 2. --- GENERATE VCARD MENU FOR CURRENT LEVEL ---
    let currentMenuLevel = getDescendantProp(menuDict, newPath);
    if (!currentMenuLevel) throw new Error(`Could not navigate to menu path: '${newPath}'`);

    if (currentMenuLevel.type === 'Submenu' || currentMenuLevel.type === 'Enum') {
        newPath += '.menu';
        currentMenuLevel = currentMenuLevel.menu;
    }

    const vCardMenu = [];

    if (newPath) {
        const parentItemPath = newPath.substring(0, newPath.lastIndexOf('.menu'));
        const grandParentPath = parentItemPath.substring(0, parentItemPath.lastIndexOf('.'));
        const grandParentItem = getDescendantProp(menuDict, grandParentPath);

        let backButtonName = "Main menu";
        let backButtonIconObject = MAIN_MENU_ICON;

        // If the grandParentPath is not the root, it must point to a menu object.
        // The item that OWNS that menu object is what we need for the name and icon.
        if (grandParentPath) {
            const ownerOfGrandParentMenuPath = grandParentPath.substring(0, grandParentPath.lastIndexOf('.menu'));
            const ownerItem = getDescendantProp(menuDict, ownerOfGrandParentMenuPath);
            if (ownerItem && ownerItem.name) {
                backButtonName = ownerItem.name;
                backButtonIconObject = ownerItem.icon || MAIN_MENU_ICON;
            }
        }
        
        const backVCardParts = ['BEGIN:VCARD', 'VERSION:3.0', `N;CHARSET=UTF-8:Back to ${backButtonName}`, 'ORG:Go to previous menu'];
        if (backButtonIconObject && backButtonIconObject !== "...") { backVCardParts.push(`PHOTO;ENCODING=b64;TYPE=PNG:${backButtonIconObject}`); }
        backVCardParts.push('NOTE:__back__', 'END:VCARD');
        vCardMenu.push(backVCardParts.join('\n'));

    }

    // Add a "Save and quit" button next, with its icon
    const saveAndQuitVCardParts = ['BEGIN:VCARD', 'VERSION:3.0', `N;CHARSET=UTF-8:Exit settings`, 'ORG:Everything is saved'];
    if (SAVE_AND_QUIT_ICON && SAVE_AND_QUIT_ICON !== "...") { saveAndQuitVCardParts.push(`PHOTO;ENCODING=b64;TYPE=PNG:${SAVE_AND_QUIT_ICON}`); }
    saveAndQuitVCardParts.push('NOTE:__quit__', 'END:VCARD');
    vCardMenu.push(saveAndQuitVCardParts.join('\n'));

    // Sort menu items by index, then alphabetically by name
    const sortedEntries = Object.entries(currentMenuLevel).sort(([, a], [, b]) => {
        const aHasIndex = a.hasOwnProperty('index');
        const bHasIndex = b.hasOwnProperty('index');

        if (aHasIndex && bHasIndex) return a.index - b.index;
        if (aHasIndex) return -1;
        if (bHasIndex) return 1;
        return a.name.localeCompare(b.name);
    });

    for (const [key, item] of sortedEntries) {
        vCardMenu.push(generateVCard(key, item, newPath));
    }

    // 3. --- PREPARE RETURN OBJECT ---
    const optionValues = flattenOptionValues(menuDict);
    const finalState = { current_path: newPath, parent_name: "Main menu" };

    if (newPath) {
        const parentPath = newPath.substring(0, newPath.lastIndexOf('.'));
        const parentMenuItem = getDescendantProp(menuDict, parentPath);
        finalState.parent_name = parentMenuItem && parentMenuItem.name ? parentMenuItem.name : "Main menu";
    }
    
    const returnObject = {
        menu: vCardMenu,
        option_values: optionValues,
        menu_dict: menuDict,
        state: finalState,
    };
    
    if (command) returnObject.command = command;
    if (error) returnObject.error = error;
    
    return returnObject;
};

// ========================================================================
// :: SCRIPT EXECUTION
// ========================================================================
let result;
try {
    result = processMenu(menuDict, stateDict);
} catch (e) {
    result = { error: `JavaScript execution failed: ${e.message}` };
}

console.log(JSON.stringify(result, null, 2));