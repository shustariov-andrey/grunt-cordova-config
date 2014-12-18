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
            id : 'com.example.hello',
            version : '1.0.0',
            // ...
        },
        dest : 'path/to/config.xml
      
    }
  },
})
```

### Options

#### options.id
Type: `String`

Default value: `com.example.hello`

#### options.version
Type: `String`

Default value: `0.0.1`

#### options.name
Type: `String`

Default value: `HelloWorld`

#### options.description
Type: `String`

Default value: `A sample Apache Cordova application that responds to the deviceready event.`

#### options.author.name
Type: `String`

Default value: `Apache Cordova Team`

#### options.author.email
Type: `String`

Default value: `dev@callback.apache.org`

#### options.author.href
Type: `String`

Default value: `http://cordova.io`

#### options.content.src
Type: `String`

Default value: `index.html`

#### options.access.origin
Type: `String`

Default value: `*`

#### options.preferences
Type: `Array` of ([Preference objects](#preference-objects))

_Example:_
```js
preferences: [
{
	name : 'fullscreen',
	value: true
},
{
	name : 'webviewbounce',
	value: false
},
...
```
Default value: `[]`

#### options.features
Type: `Array`

_Example:_
```js
features : [
  {
    name : 'StatusBar',
    params: [
      {
        name  : 'ios-package',
        value : 'CDVStatusBar',
        onload: true
      }
    ]
  }
]
```

Default value: `[]`

#### options.icon
Type: `Object` ([Image object](#image-objects))

References an image from which Cordova can generate appropriately-sized icons for each platform. Note that the `platform` option is not supported; use the `icons` option within `platforms` instead.

Default value: `null`

#### options.platforms
Type: `Array` of ([Platform objects](#platform-objects))

_Example:_
```js
platforms : [
  {
    name : 'ios',
    icons: [
      {
        src   : 'res/Icon-60.png',
        width : 60,
        height: 60
      }
    ],
    splash: [
      {
        src   : 'res/Default.png',
        width : 320,
        height: 480
      }
    ],
    preferences: [
      {
        fullscreen: false
      }
    ]
  },
  {
    name : 'android',
    icons: [
      {
        src    : 'res/icon-hdpi.png',
        density: 'hdpi'
      }
    ]
  }
]
```

### Preference Objects

#### preference.name
Type: `String`

#### preference.value
Type: _any_

### Image Objects

Please refer to the Cordova/PhoneGap Icons and Splash Screens documentation for usage. Generally, Android requires the `density` parameter while other platforms either use `width` and `height` or require a specific image name.

#### image.src
Type: `String`

#### image.density
Type: `String`

#### image.width
Type: `Number`

#### image.height
Type: `Number`

### Platform Objects

#### platform.name
Type: `String`

#### platform.icons
Type: `Array` of ([Image objects](#image-objects))

#### platform.splash
Type: `Array` of ([Image objects](#image-objects))

#### platform.preferences
Type: `Array` of ([Preference objects](#preference-objects))

### Usage Examples

#### Default Options
In this example, the default options are used to generate config.xml file. The result will be the same as after `cordova create` command

```js
grunt.initConfig({
  cordova_config: {
    my_target : {
      dest: 'cordova-project/www/config.xml'
    }
  },
})
```

#### Custom Options

```js
grunt.initConfig({
  cordova_config: {
    options: {
      id: 'com.example.application',
      name: 'app name',
      author : {
      	name : 'First Last',
        email : 'email@example.com'
      },
      preferences: [
        {
          name : 'fullscreen',
          value: true
        },
        {
          name : 'webviewbounce',
          value: false
        },
        {
          name : 'UIWebViewBounce',
          value: false
        },
        {
          name : 'DisallowOverscroll',
          value: true
        },
        {
          name : 'BackupWebStorage',
          value: 'none'
        }
      ],
      features   : [
        {
          name  : 'StatusBar',
          params: [
              {
                  name  : 'ios-package',
                  value : 'CDVStatusBar',
                  onload: true
              }
          ]
        }
      ],
      icon : {
        src : 'icon-default.png'
      },
      platforms : [
        {
          name : 'ios',
          icons: [
            {
              src   : 'res/Icon-60.png',
              width : 60,
              height: 60
            }
          ],
          splash: [
            {
              src   : 'res/Default.png',
              width : 320,
              height: 480
            }
          ],
          preferences: [
            {
              fullscreen: false
            }
          ]
        }
      ]
    },
    dest : 'cordova-project/www/config.xml'
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Andrey Shustariov. Licensed under the MIT license.
