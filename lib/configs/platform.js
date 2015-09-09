'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

exports['default'] = {
	occurances: 'single',
	hasMany: true,
	optionsKey: 'platforms',
	getDefaultOptions: function getDefaultOptions() {
		return [{
			name: 'android',
			allowIntents: ['market:*']
		}, {
			name: 'ios',
			allowIntents: ['itms:*', 'itms-apps:*']
		}];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Describes a platform level configuration.',
			type: {
				name: {
					type: 'string',
					required: true
				},
				__any__: true
			},
			examples: [{
				name: 'A basic configuration for android and iOS.',
				example: [{
					name: 'android',
					allowIntent: ['market:*'],
					icon: [{
						src: 'res/android/ldpi.png',
						density: 'ldpi'
					}, {
						src: 'res/android/mdpi.png',
						density: 'mdpi'
					}]
				}, {
					name: 'ios',
					allowIntent: ['itms:*', 'itms-apps:*'],
					icon: [{
						src: 'res/ios/icon-60@3x.png',
						width: 180,
						height: 180
					}, {
						src: 'res/ios/icon-60.png',
						width: 60,
						height: 60
					}]
				}]
			}],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_the_platform_element'
		};
	},
	processor: function processor(platforms, _processor) {
		return {
			platform: platforms.map(function (platform) {
				var name = platform.name;

				var others = _objectWithoutProperties(platform, ['name']);

				return (0, _deepmerge2['default'])({
					'@': {
						name: name
					}
				}, _processor(others));
			})
		};
	}
};
module.exports = exports['default'];
