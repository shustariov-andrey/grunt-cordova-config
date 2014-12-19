/*
 * grunt-cordova-config
 *
 *
 * Copyright (c) 2014 Andrey Shustariov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
   // load all npm grunt tasks
   require('load-grunt-tasks')(grunt);

   // Project configuration.
   grunt.initConfig({
      jshint        : {
         all    : [
            'Gruntfile.js',
            'tasks/*.js',
            '<%= nodeunit.tests %>'
         ],
         options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
         }
      },

      // Before generating any new files, remove any previously-created files.
      clean         : {
         tests: ['tmp']
      },

      // Configuration to be run (and then tested).
      cordova_config: {
         allOptions: {
            options: {
               id         : 'com.shustariov.mtclient',
               name       : 'MT Client',
               version    : '0.0.1',
               description: 'An application for money tracking',
               author     : {
                  name : 'Andrey Shustariov',
                  email: 'shutarev.andrey@gmail.com'
               },
               content    : {
                  src: 'out/index.html'
               },
               access     : {
                  origin: '*'
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
               icons: [
                  {
                     src: 'res/icon.png',
                     width: 60,
                     height: 60
                  },
                  {
                     src: 'res/icon-rounded.png',
                     platform: 'android'
                  }
               ],
               platforms  : [
                  {
                     name  : 'android',
                     icons : [
                        {
                           src: 'res/icon.jpg',
                           density: 'ldpi'
                        },
                        {
                           src: 'res/icon.jpg',
                           height: 50,
                           width: 50
                        }
                     ],
                     splash : [
                        {
                           src: 'res/splash-hdpi.png',
                           density: 'port-hdpi'
                        },
                        {
                           src: 'res/splash-mdpi.png',
                           density: 'port-mdpi'
                        }
                     ]
                  },
                  {
                     name  : 'ios',
                     icons : [
                        {
                           src: 'res/icon.jpg'
                        }
                     ],
                     splash: [
                        {
                           src: 'res/splash.png',
                           width: 320,
                           height: 480
                        }
                     ],
                     preferences : [
                        {
                           name : 'fullscreen',
                           value: false
                        }
                     ]
                  }
               ]
            },
            dest   : 'tmp/config_actual.xml'
         },
         allOptionsExternalAppWhitelist: {
              options: {
                  id         : 'com.shustariov.mtclient',
                  name       : 'MT Client',
                  version    : '0.0.1',
                  description: 'An application for money tracking',
                  author     : {
                      name : 'Andrey Shustariov',
                      email: 'shutarev.andrey@gmail.com'
                  },
                  content    : {
                      src: 'out/index.html'
                  },
                  access     : [
                      {
                          origin: '*'
                      },
                      {
                          origin: 'tel:*',
                          'launch-external': 'yes'
                      },
                      {
                          origin: 'mailto:*',
                          'launch-external': 'yes'
                      }
                  ],
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
                  ]
              },
              dest   : 'tmp/config_actual_external_app_whitelist.xml'
         },
         defaultOptions : {
            dest : 'tmp/default-options.xml'
         }
      },

      // Unit tests.
      nodeunit      : {
         tests: ['test/*_test.js']
      }

   });

   // Actually load this plugin's task(s).
   grunt.loadTasks('tasks');

   // Whenever the "test" task is run, first clean the "tmp" dir, then run this
   // plugin's task(s), then test the result.
   grunt.registerTask('test', ['clean', 'cordova_config', 'nodeunit']);

   // By default, lint and run all tests.
   grunt.registerTask('default', ['jshint', 'test']);

};
