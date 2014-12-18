/*
 * grunt-cordova-config
 *
 *
 * Copyright (c) 2014 Andrey Shustariov
 * Licensed under the MIT license.
 */

var js2xmlparser = require("js2xmlparser");

module.exports = function (grunt) {
   'use strict';

   // Ensure that only supported attributes are included in XML
   function attributesForImage(image) {
      var i = {
         src : image.src
      };

      if ('density' in image) {
         i.density = image.density;
      }
      if ('width' in image) {
         i.width = image.width;
      }
      if ('height' in image) {
         i.height = image.height;
      }
      return { '@' : i };
   }

   // Please see the Grunt documentation for more information regarding task
   // creation: http://gruntjs.com/creating-tasks

   grunt.registerMultiTask('cordova_config', 'Generates cordova config.xml', function () {

      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
         id : grunt.option('id') || 'com.example.hello',
         version : grunt.option('version') || '0.0.1',
         name : grunt.option('name') || 'HelloWorld',
         description : grunt.option('description') || 'A sample Apache Cordova application that responds to the deviceready event.',
         author : grunt.option('author') || {
            email : 'dev@callback.apache.org',
            name : 'Apache Cordova Team',
            href : 'http://cordova.io'
         },
         content : grunt.option('content') || {src : 'index.html'},
         access : grunt.option('access') || {origin : '*'},
         preferences : grunt.option('preferences') || [
            {
               name : 'Fullscreen',
               value : true
            },
            {
               name : 'WebViewBounce',
               value : true
            }
         ],
         features : grunt.option('features') || [],
         platforms : grunt.option('platforms') || []
      });

      var data = {
         '@' : {
            id : options.id,
            version : options.version,
            xmlns : 'http://www.w3.org/ns/widgets',
            'xmlns:cdv' : 'http://cordova.apache.org/ns/1.0'
         },
         name : options.name,
         description : options.description,
         author : {
            '@' : {
               email : options.author.email,
               href : options.author.href
            },
            '#' : options.author.name
         },
         content : {
            '@' : {
               src : options.content.src
            }
         },
         access : (options.access instanceof Array) !== true ? { '@': { origin: options.access.origin } } : options.access.map(function(opt) {
             var _access = {
                 '@': {
                     origin: opt.origin
                 }
             };
             if (!!opt['launch-external']) {
                 _access['@']['launch-external'] = opt['launch-external'];
             }
             return _access;
         }),
         preference : options.preferences.map(function(pref) {
            return {
               '@' : {
                  name : pref.name,
                  value : pref.value
               }
            };
         }),
         feature : options.features.map(function(feature) {
            return {
               '@' : {
                  name : feature.name
               },
               param : feature.params.map(function(param) {
                  var p = {
                     '@' : {
                        name : param.name,
                        value : param.value
                     }
                  };
                  if ('onload' in param) {
                     p['@'].onload = param.onload;
                  }
                  return p;
               })
            };
         }),
         platform : options.platforms.map(function(platform) {
            var icons = platform.icons || [];

            return {
               '@' : {
                  name : platform.name
               },

               icon : icons.map(attributesForImage)
            };
         })
      };

      var result = js2xmlparser("widget", data);

      // Write the destination file.
      grunt.file.write(this.data.dest, result);

      grunt.log.writeln('File "' + this.data.dest + '" created.');
   });

};
