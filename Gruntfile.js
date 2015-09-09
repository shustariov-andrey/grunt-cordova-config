/*
 * grunt-cordova-config
 *
 * Modified heavily by Kyle Kirbatski
 *
 * Original Copyright:
 * Copyright (c) 2014 Andrey Shustariov
 *
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    clean: {
      tests: ['tmp'],
      lib: ['lib']
    },
    babel: {
      main: {
        options: {
          stage: 0
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: '**/*.js',
            dest: 'lib',
            ext: '.js'
          }
        ]
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },
    cordova_config: {
      allOptions: {
        options: {
          id: 'com.mysite.myclient',
          name: 'My Client',
          version: '0.0.1',
          androidVersionCode: 1,
          iosBundleVersion: 1,
          description: 'An application for testing cordova config.',
          author: {
            name: 'Someone',
            email: 'somewhere@someplace.com'
          },
          content: 'out/index.html',
          access: {
            origin: '*'
          },
          allowIntents: [
            'ftp:*',
            'http://*/*'
          ],
          allowNavigations: [
            '*://*.example.com/*',
            '*://*.someplace.com/*'
          ],
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
              params: [
                {
                  name: 'ios-package',
                  value: 'CDVStatusBar',
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
          platforms: [
            {
              name: 'android',
              icons: [
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
              splashes: [
                {
                  src: 'res/splash-hdpi.png',
                  density: 'port-hdpi'
                },
                {
                  src: 'res/splash-mdpi.png',
                  density: 'port-mdpi'
                }
              ],
              engines: [
                {
                  name: "ios",
                  spec: '4'
                }
              ]
            },
            {
              name: 'ios',
              icons: [
                {
                  src: 'res/icon.jpg'
                }
              ],
              splashes: [
                {
                  src: 'res/splash.png',
                  width: 320,
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
          ],
          engines: [
            {
              name: 'android',
              spec: '4.0.2'
            }
          ],
          plugins: [
            {
              name: 'cordova-plugin-file',
              spec: '^3.0.0'
            }
          ]
        },
        dest: 'tmp/config_actual.xml'
      },
      allOptionsExternalAppWhitelist: {
        options: {
          id: 'com.mysite.myclient',
          name: 'My Client',
          version: '0.0.1',
          description: 'An application for testing cordova config.',
          author: {
            name: 'Someone',
            email: 'someone@somewhere.com'
          },
          content: 'out/index.html',
          access: [
            {
              origin: '*'
            },
            {
              origin: 'tel:*',
              launchExternal: 'yes'
            },
            {
              origin: 'mailto:*',
              launchExternal: 'yes'
            }
          ],
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
              params: [
                {
                  name: 'ios-package',
                  value: 'CDVStatusBar',
                  onload: true
                }
              ]
            }
          ]
        },
        dest: 'tmp/config_actual_external_app_whitelist.xml'
      },
      defaultOptions: {
        dest: 'tmp/default-options.xml'
      }
    },
    'mocha-chai-sinon': {
      build: {
        src: ['./test/**/*.spec.js'],
        options: {
          ui: 'bdd',
          reporter: 'spec'
        }
      }
    },
    blueimp_tmpl: {
      documentation: {
        src: 'documentation/documentation.tmpl',
        dest: 'README.md',
        options: {
          data: {
            options: require('./lib/configs.js')
          },
          regexp: /([\s'\\])(?!(?:[^<]|<(?!%))*%>)|(?:<%(=|#)([\s\S]+?)%>)|(<%)|(%>)/g,
          helper: {
            stringify: function (val, prepend) {
              var res = JSON.stringify(val, null, 4);
              if (prepend) {
                res = '// ' + prepend + '\n' + res;
              }
              if (res.split('\n').length > 1) {
                return '```javascript\n' + res + '\n```';
              }
              else {
                return '`' + res + '`';
              }
            }
          }
        }
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks("grunt-mocha-chai-sinon");

  grunt.registerTask('default', ['clean', 'jshint', 'babel', 'blueimp_tmpl', 'cordova_config', 'jshint', 'mocha-chai-sinon']);
};
