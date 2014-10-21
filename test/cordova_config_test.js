'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

function readFile(path) {
   // Fixes bug, when expected and actual files are created on different systems
   return grunt.file.read(path).replace(/(\r\n)/g, '\n');
}

exports.cordova_config = {
   setUp          : function (done) {
      // setup here if necessary
      done();
   },
   all_options: function (test) {
      test.expect(1);

      var actual = readFile('tmp/config_actual.xml');
      var expected = readFile('test/expected/config_xml.xml');
      test.equal(actual, expected, 'should generate valid config.xml.');

      test.done();
   },
   all_options_external_app_whitelist: function (test) {
        test.expect(1);

        var actual = readFile('tmp/config_actual_external_app_whitelist.xml');
        var expected = readFile('test/expected/config_external_app_whitelist_xml.xml');
        test.equal(actual, expected, 'should generate valid config with external application whitelist.xml.');

        test.done();
   },
   default_options : function(test) {
      test.expect(1);

      var actual = readFile('tmp/default-options.xml');
      var expected = readFile('test/expected/cordova-config.xml');
      test.equal(actual, expected, 'should generate valid default config.xml.');

      test.done();
   }
};
