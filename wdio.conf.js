exports.config = {
  "specs": [
    './test/specs/**/*.js'
  ],
  "exclude": [],
  "sync": true,
  "logLevel": "silent",
  "coloredLogs": true,
  "bail": 0,
  "waitforTimeout": 60000,
  "connectionRetryTimeout": 90000,
  "connectionRetryCount": 3,
  "framework": "mocha",
  "reporters": [
    "spec"
  ],
  "debug": false,
  "mochaOpts": {
    "ui": "bdd",
    "timeout": 60000
  },
  "reporterOptions": {
    "junit": {
      "outputDir": "/Users/aharibabu/git_repo/Personal/ownit-migration/results/"
    }
  },
  "capabilities": [
    {
      "maxInstances": 3,
      "browserName": "chrome",
      "version": "52.0",
      "platform": "Windows 10",
      "name": "Picante Tests",
      "loggingPrefs": {
        "browser": "ALL",
        "driver": "ALL",
        "performance": "ALL"
      },
      "chromeOptions": {
        "perfLoggingPrefs": {
          "traceCategories": "v8,blink.console,disabled-by-default-devtools.timeline"
        }
      }
    }
  ]
};
