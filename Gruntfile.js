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
               ]
            },
            dest   : 'tmp/config_actual.xml'
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
