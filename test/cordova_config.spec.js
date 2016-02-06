var chai    = require('chai');
var expect  = require('chai').expect;
var chaiXml = require('chai-xml');
var grunt = require('grunt');

chai.use(chaiXml);

describe('cordova_config', function () {
  it('should generate valid config.xml', function() {
    var actual = grunt.file.read('tmp/config_actual.xml');
    var expected = grunt.file.read('test/expected/config_xml.xml');
    expect(actual).xml.to.deep.equal(expected);
  });

  it('should generate valid config with external application whitelist.xml', function () {
    var actual = grunt.file.read('tmp/config_actual_external_app_whitelist.xml');
    var expected = grunt.file.read('test/expected/config_external_app_whitelist_xml.xml');
    expect(actual).xml.to.equal(expected);
  });

  it('should generate valid default config.xml', function() {
    var actual = grunt.file.read('tmp/default-options.xml');
    var expected = grunt.file.read('test/expected/cordova-config.xml');
    expect(actual).xml.to.equal(expected);
  });
});
