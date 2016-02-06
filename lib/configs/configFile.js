'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'configFiles',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'A block of configuration file content for use with cordova-custom-config.',
			type: {
				target: {
					description: 'The config file to which the contents will be added.',
					type: 'string',
					required: true
				},
				parent: {
					description: 'The existing item under which the contents will be added (XPath for Android, plist key name for iOS).',
					type: 'string',
					required: true
				},
				contents: {
					description: 'The js2xmlparser-compatible JSON object to insert into the configuration file as XML.',
					type: 'object',
					required: true
				}
			},
			examples: [{
				title: 'Add values to the AndroidManifest.xml file',
				example: {
					target: 'AndroidManifest.xml',
					parent: '/*',
					contents: {
						'supports-screens': {
							'@': {
								'android:xlargeScreens': false,
								'android:largeScreens': false,
								'android:smallScreens': true
							}
						},
						'uses-permission': [{
							'@': {
								'android:name': 'android.permission.READ_CONTACTS',
								'android:maxSdkVersion': 15
							}
						}, {
							'@': {
								'android:name': 'android.permission.WRITE_CONTACTS'
							}
						}]
					}
				}
			}, {
				title: 'Add an array value to the iOS Info.plist file',
				example: {
					target: '*-Info.plist',
					parent: 'UIBackgroundModes',
					contents: {
						array: {
							string: 'location'
						}
					}
				}
			}, {
				title: 'Add a dict value to the iOS Info.plist file',
				example: {
					target: '*-Info.plist',
					parent: 'NSAppTransportSecurity',
					contents: {
						dict: {
							key: ['NSAllowsArbitraryLoads', 'true']
						}
					}
				}
			}],
			moreInfo: 'https://github.com/dpa99c/cordova-custom-config#config-files'
		};
	},
	processor: function processor(configFiles, _processor) {
		return {
			'config-file': configFiles.map(function (configFile) {
				var target = configFile.target;
				var parent = configFile.parent;
				var contents = configFile.contents;

				return _extends({
					'@': {
						target: target,
						parent: parent
					}
				}, contents);
			})
		};
	}
};
module.exports = exports['default'];
/* jshint ignore:start */

/* jshint ignore:end */
