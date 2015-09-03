# grunt-cordova-config

> Generates cordova config.xml file

[![Build Status](https://travis-ci.org/shustariov-andrey/grunt-cordova-config.svg?branch=master)](https://travis-ci.org/shustariov-andrey/grunt-cordova-config) [![Dependency Status](https://david-dm.org/shustariov-andrey/grunt-cordova-config.svg)](https://david-dm.org/shustariov-andrey/grunt-cordova-config) [![devDependency Status](https://david-dm.org/shustariov-andrey/grunt-cordova-config/dev-status.svg)](https://david-dm.org/shustariov-andrey/grunt-cordova-config#info=devDependencies)


## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cordova-config --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cordova-config');
```

## The "cordova_config" task

### Overview
In your project's Gruntfile, add a section named `cordova_config` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    cordova_config: {
        my_target: {
            options : {
                id: 'com.example.hello',
                version: '1.0.0',
                // ...
            },
            dest: 'path/to/config.xml'
        }
    }
})
```

### Options

## options.id

The app's bundle identifier.

**Type**: *(required) string*

**Default**: `"com.example.hello"`

## options.version

The app's version number, in semver2 format.

**Type**: *(required) string*

[More Info](http://semver.org)

**Default**: `"0.0.1"`

## options.name

The name of app.

**Type**: *(required) string*

**Default**: `"HelloWorld"`

## options.description

A description of the app and/or its goals.

**Type**: *string*

**Default**: `"A sample Apache Cordova application that responds to the deviceready event."`

## options.author

Describes the author and contact info of the project.

**Type**: *object of:*

### options.author.email

The author's email address.

**Type**: *string*

### options.author.name

The author's name.

**Type**: *string*

### options.author.href

A URL to more info about the author.

**Type**: *string*

[More Info](http://cordova.apache.org/docs/en/5.0.0/config_ref_index.md.html#The%20config.xml%20File_core_configuration_elements)

**Default**

```javascript
{
    "email": "dev@callback.apache.org",
    "name": "Apache Cordova Team",
    "href": "http://cordova.io"
}
```

**Examples**

```javascript
// A simple example.
{
    "email": "someone@someplace.com",
    "name": "John Smith",
    "href": "http://johnsmith.me"
}
```

## options.content

The starting page of the app.

**Type**: *(required) string*

[More Info](http://cordova.apache.org/docs/en/5.0.0/config_ref_index.md.html#The%20config.xml%20File_core_configuration_elements)

**Default**: `"index.html"`

**Examples**

```javascript
// The starting page is myroot/index.html
"myroot/index.html"
```

## options.access

Defines the set of external domains the app is allowed to communicate with.

**Type**: *Array&lt;object&gt; | object of:*

### options.access.origin

The domain to allow. Wildcards (*) are supported.

**Type**: *(required) string*

### options.access.launchExternal

Wether or not to launch the URL in an external browser (outside of the app)

**Type**: *boolean*

### options.access.subdomains

Wether ot not to allow subdomains. Effectively the same as http://*.domain.tld

**Type**: *boolean*

[More Info](http://cordova.apache.org/docs/en/5.0.0/guide_appdev_whitelist_index.md.html)

**Default**

```javascript
[
    {
        "origin": "*"
    }
]
```

**Examples**

```javascript
// Allow access to google.com
{
    "origin": "http://google.com"
}
```

```javascript
// Open github.com in external browser.
{
    "origin": "http://github.com",
    "launchExternal": true
}
```

```javascript
// Allow access to *.google.com
{
    "origin": "http://google.com",
    "subdomains": true
}
```

## options.allowIntents

Controls which URLs the app is allowed to ask the system to open.

**Type**: *Array&lt;string&gt; | string*

[More Info](https://github.com/apache/cordova-plugin-whitelist)

**Default**

```javascript
[
    "http://*/*",
    "https://*/*",
    "tel:*",
    "sms:*",
    "mailto:*",
    "geo:*"
]
```

**Examples**

```javascript
// Allow links to web pages to open in a browser.
[
    "http://*/*",
    "https://*/*"
]
```

```javascript
// Allow SMS links to open messaging app
[
    "sms:*"
]
```

## options.allowNavigations

Controls which URLs the WebView itself can be navigated to. Applies to top-level navigations only.

**Type**: *Array&lt;string&gt; | string*

[More Info](https://github.com/apache/cordova-plugin-whitelist)

**Default**: `[]`

**Examples**

```javascript
// Allow links to example.com
"http://example.com/*"
```

## options.preferences

A preference that can be defined.

**Type**: *Array&lt;object&gt; | object of:*

### options.preferences.name

The name of the preference.

**Type**: *(required) string*

### options.preferences.value

The value of the preference,

**Type**: *(required) string*

[More Info](http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_global_preferences)

**Default**: `[]`

**Examples**

```javascript
// Define the webview's background color.
{
    "name": "BackgroundColor",
    "value": "0xff0000ff"
}
```

## options.features

Used to describe a plugin if you're not using the Cordova command line tool, but instead working directly with platform specific config.xml files.

**Type**: *Array&lt;object&gt; | object of:*

### options.features.name

The plugin's name.

**Type**: *string*

### options.features.onload

Wether or not the plugin should be loaded when the app launches or load it the first time it's requested.

**Type**: *boolean*

### options.features.params

A list of params for the plugin.

**Type**: *Array&lt;object&gt; | object of:*

#### options.features.params.name

The name of the param.

**Type**: *(required) string*

#### options.features.params.value

The value of the param.

**Type**: *(required) string*

[More Info](http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_the_feature_element)

**Default**: `[]`

**Examples**

```javascript
// Whitelist plugin for android.
{
    "name": "Whitelist",
    "onload": true,
    "params": [
        {
            "name": "android-package",
            "value": "org.apache.cordova.whitelist.WhitelistPlugin"
        }
    ]
}
```

## options.icons

Describes the app's icon.

**Type**: *Array&lt;object&gt; | object of:*

### options.icons.src

The path to the icon.

**Type**: *(required) string*

### options.icons.density

The icon's density.

**Type**: *string*

### options.icons.width

The icon's width.

**Type**: *number*

### options.icons.height

The icon's height.

**Type**: *number*

### options.icons.platform

The icon's platform.

**Type**: *string*

[More Info](http://cordova.apache.org/docs/en/5.1.1/config_ref_images.md.htmlIcons%20and%20Splash%20Screens_configuring_icons_in_the_cli)

**Default**: `[]`

**Examples**

```javascript
// Define some icons
[
    {
        "src": "res/ios/icon-60@3x.png",
        "platform": "ios",
        "width": 180,
        "height": 180
    },
    {
        "src": "res/ios/icon-60.png",
        "platform": "ios",
        "width": 60,
        "height": 60
    },
    {
        "src": "res/android/ldpi.png",
        "platform": "android",
        "density": "ldpi"
    },
    {
        "src": "res/android/mdpi.png",
        "platform": "android",
        "density": "mdpi"
    }
]
```

## options.splashes

Defines a splash screen to show.

**Type**: *Array&lt;object&gt; | object of:*

### options.splashes.src

The path to the splash screen.

**Type**: *(required) string*

### options.splashes.density

The splash screen's density.

**Type**: *string*

### options.splashes.width

The splash screen's width.

**Type**: *number*

### options.splashes.height

The splash screen's height.

**Type**: *number*

### options.splashes.platform

The splash screen's platform.

**Type**: *string*

[More Info](http://cordova.apache.org/docs/en/5.1.1/config_ref_images.md.html#Icons%20and%20Splash%20Screens_configuring_splash_screens_in_the_cli)

**Default**: `[]`

**Examples**

```javascript
// Define some splash screens.
[
    {
        "src": "res/screen/ios/Default~iphone.png",
        "platform": "ios",
        "width": 320,
        "height": 480
    },
    {
        "src": "res/screen/ios/Default@2x~iphone.png",
        "platform": "ios",
        "width": 640,
        "height": 960
    },
    {
        "src": "res/screen/android/splash-land-hdpi.png",
        "platform": "android",
        "density": "land-hdpi"
    },
    {
        "src": "res/screen/android/splash-land-mdpi.png",
        "platform": "android",
        "density": "land-mdpi"
    }
]
```

## options.platforms

Describes a platform level configuration.

**Type**: *Array&lt;object&gt; | object of:*

### options.platforms.name

**Type**: *(required) string*

Can include any normal configuration.

[More Info](http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_the_platform_element)

**Default**

```javascript
[
    {
        "name": "android",
        "allowIntents": [
            "market:*"
        ]
    },
    {
        "name": "ios",
        "allowIntents": [
            "itms:*",
            "itms-apps:*"
        ]
    }
]
```

**Examples**

```javascript
[
    {
        "name": "android",
        "allowIntent": [
            "market:*"
        ],
        "icon": [
            {
                "src": "res/android/ldpi.png",
                "density": "ldpi"
            },
            {
                "src": "res/android/mdpi.png",
                "density": "mdpi"
            }
        ]
    },
    {
        "name": "ios",
        "allowIntent": [
            "itms:*",
            "itms-apps:*"
        ],
        "icon": [
            {
                "src": "res/ios/icon-60@3x.png",
                "width": 180,
                "height": 180
            },
            {
                "src": "res/ios/icon-60.png",
                "width": 60,
                "height": 60
            }
        ]
    }
]
```

## options.engines

A platform to auto add with specified platform version.

**Type**: *Array&lt;object&gt; | object of:*

### options.engines.name

The engine name.

**Type**: *(required) string*

### options.engines.spec

The engine spec/version.

**Type**: *(required) string*

[More Info](http://cordova.apache.org/docs/en/5.1.1/platform_plugin_versioning_ref_index.md.htmlPlatforms%20and%20Plugins%20Version%20Management_platform_versioning)

**Default**: `[]`

**Examples**

```javascript
// Add Android platform version 4.0.2
{
    "name": "android",
    "spec": "4.0.2"
}
```

```javascript
// Add iOS platform version 3.8.0
{
    "name": "ios",
    "spec": "3.8.0"
}
```

## options.plugins

Describes a plugin that the app utilizes.

**Type**: *Array&lt;object&gt; | object of:*

### options.plugins.name

The plugin's name.

**Type**: *(required) string*

### options.plugins.spec

The plugin's spec/version.

**Type**: *(required) string*

[More Info](http://cordova.apache.org/docs/en/5.1.1/platform_plugin_versioning_ref_index.md.html#Platforms%20and%20Plugins%20Version%20Management_plugin_versioning)

**Default**

```javascript
[
    {
        "name": "cordova-plugin-whitelist",
        "spec": "1"
    }
]
```

**Examples**

```javascript
// Add whitelist plugin.
[
    {
        "name": "cordova-plugin-whitelist",
        "spec": "1"
    }
]
```

## options.hooks

Defines an action to be run during a certian cordova lifecycle event.

**Type**: *Array&lt;object&gt; | object of:*

### options.hooks.type

The hook type.

**Type**: *(required) string*

### options.hooks.src

The path to the hook to execute.

**Type**: *(required) string*

[More Info](http://cordova.apache.org/docs/en/5.1.1/guide_appdev_hooks_index.md.html)

**Default**: `[]`

**Examples**

```javascript
// Run path/to/myscript.js after the app is prepared.
{
    "type": "after_prepare",
    "src": "myscript.js"
}
```

```javascript
// Run path/to/myscript.sh before a clean is done.
{
    "type": "before_clean",
    "src": "path/to/myscript.sh"
}
```

### Usage Examples

#### Default Options
In this example, the default options are used to generate config.xml file. The result will be the same as after `cordova create` command

```js
grunt.initConfig({
    cordova_config: {
        my_target: {
            dest: 'cordova-project/www/config.xml'
        }
    }
})
```

#### Custom Options

```js
grunt.initConfig({
    cordova_config: {
        options: {
            id: 'com.example.application',
            name: 'app name',
            author: {
                name: 'First Last',
                email: 'email@example.com'
            },
            preferences: [
                {
                    name: 'fullscreen',
                    value: true
                },
                {
                    name: 'webviewbounce',
                    value: false
                },
                {
                    name: 'UIWebViewBounce',
                    value: false
                },
                {
                    name: 'DisallowOverscroll',
                    value: true
                },
                {
                    name: 'BackupWebStorage',
                    value: 'none'
                }
            ],
            features: [
                {
                    name: 'StatusBar',
                    onload: true,
                    params: [
                        {
                            name: 'ios-package',
                            value: 'CDVStatusBar'
                        }
                    ]
                }
            ]
            icons: [
                {
                    src: 'icon-default.png'
                }
            ],
            platforms: [
                {
                    name: 'ios',
                    icons: [
                        {
                            src: 'res/Icon-60.png',
                            width: 60,
                            height: 60
                        }
                    ],
                    splashes: [
                        {
                            src: 'res/Default.png',
                            width : 320,
                            height: 480
                        }
                    ],
                    preferences: [
                        {
                            name: 'fullscreen',
                            value: false
                        }
                    ]
                }
            ]
        }
        dest: 'cordova-project/www/config.xml'
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

### Development

Adding a new property/option to grunt-cordova-config is relatively painless. Add a new file inisde of `src/configs` that will contain the declaration for your new property. You can reference an existing config.

#### API

Each config must declare the following:

-   occurances *(string)*
    -   This is how many times this configuration can appear in the options. Valid values are `multiple` or `single`.
        -   Single means that the configuration can only occur once and at the root of the options.
        -   Multiple means it can occur anywhere and at anytime, multiple times. An example of this would be the icon config. It can appear in the root of the options, or inside of a platform configuration.
-   hasMany *(boolean)*
    -   This is wether or not the option can handle multiple values. The value passed in will automatially be converted to an array if it is not already when this is set to true. An example of this would be the icon configuration.
-   optionsKey *(string)*
    -   This is only required if your configuration has a specific option key that it correlates to. You can leave this blank to handle the options parsing yourself.
-   getDefaultOptions *(() => any)*
    -   This function should return what the default options are.
-   getDocumentation *(() => object)*
    -   This function should return documentation about your config.
        -   The result should be an object with the following format: [getDocumentation return template](#getdocumentation-return-template)
            -   All of the fields are optional except for `type`. This field can be either:
                -   A single element array of any of the following, or one of the following:
                -   An object with key-value pairs. The key being the name of a property, and the value being the description of that property.
                -   A string.
-   processor *((object,() => object) => object)*
    -   This function is called to transform the options into a JSON XML object. The first argument passed in is the options, and the second argument is a nested processor that you can call to include child options. An example of this would be the `platforms` config, allowing you to nest more configurations inside it.


##### getDocumentation return template

```javascript
{
    description: 'The description about your config.',
    examples: [
        {
            title: 'An example',
            example: {
                // An object example. This will be JSON.stringify-ied
            }
        }
    ],
    moreInfo: 'http://aUrlToMoreInfo',
    type: {
        someKey: {
            description: // ...
            examples: // ...
            moreInfo: // ...
            type: // ...
        }
    }
}
```

### Build

This project is written in ES6. To compile with grunt use: `grunt babel`. The sources inside `src` will be built and placed inside the `lib` directory.

### Lint

`grunt jshint`

### Documentation

`grunt blueimp_tmpl`

### Test

`grunt nodeunit`

## License
Copyright (c) 2014 Andrey Shustariov. Licensed under the MIT license.