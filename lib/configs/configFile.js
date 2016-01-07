'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
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
				title: 'Define the webview\'s background color.',
				example: {
					name: 'BackgroundColor',
					value: '0xff0000ff'
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

				contents['@'] = {
					target: target,
					parent: parent
				};

				return contents;
			})
		};
	}
};
module.exports = exports['default'];
