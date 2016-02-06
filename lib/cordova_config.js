'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js2xmlparser = require('js2xmlparser');

var _js2xmlparser2 = _interopRequireDefault(_js2xmlparser);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _configs = require('./configs');

var _configs2 = _interopRequireDefault(_configs);

exports['default'] = function (grunt) {
	function deleteUndefined(input) {
		if (input instanceof Array) {
			var _ret = (function () {
				var result = [];
				input.forEach(function (item) {
					if (item !== undefined) {
						result.push(deleteUndefined(item));
					}
				});
				return {
					v: result
				};
			})();

			if (typeof _ret === 'object') return _ret.v;
		} else if (typeof input === 'object') {
			var _ret2 = (function () {
				var result = {};
				Object.getOwnPropertyNames(input).forEach(function (property) {
					if (input[property] !== undefined) {
						result[property] = deleteUndefined(input[property]);
					}
				});
				return {
					v: result
				};
			})();

			if (typeof _ret2 === 'object') return _ret2.v;
		} else {
			return input;
		}
	}

	function getPluginOptions(plugin, options, scope) {
		var pluginOptions = options;
		if (plugin.optionsKey) {
			pluginOptions = pluginOptions[plugin.optionsKey];
		} else {
			pluginOptions = (0, _deepmerge2['default'])(plugin.getDefaultOptions(), options);
		}
		if (!pluginOptions) {
			if (scope !== 0) {
				return false;
			} else {
				pluginOptions = plugin.getDefaultOptions();
			}
		} else if (plugin.hasMany && pluginOptions instanceof Array === false) {
			pluginOptions = [pluginOptions];
		}
		return pluginOptions;
	}

	function processor(options, plugins) {
		var scope = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		var result = {};
		plugins.forEach(function (plugin) {
			if (plugin.occurances === 'multiple' || plugin.occurances === 'single' && scope === 0) {
				var pluginOptions = getPluginOptions(plugin, options, scope);
				if (!pluginOptions) {
					return;
				}
				result = (0, _deepmerge2['default'])(result, plugin.processor(pluginOptions, function (nestedConfig) {
					return processor(nestedConfig, plugins, scope + 1);
				}));
			}
		});
		return deleteUndefined(result);
	}

	grunt.registerMultiTask('cordova_config', 'Generates cordova config.xml', function () {
		grunt.file.write(this.data.dest, (0, _js2xmlparser2['default'])('widget', processor(this.options(), _configs2['default']), {
			prettyPrinting: {
				enabled: true,
				indentString: '  '
			}
		}));

		grunt.log.writeln('File "' + this.data.dest + '" created.');
	});
};

module.exports = exports['default'];
