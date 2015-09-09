'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'preferences',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'A preference that can be defined.',
			type: {
				name: {
					description: 'The name of the preference.',
					type: 'string',
					required: true
				},
				value: {
					description: 'The value of the preference,',
					type: 'string',
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
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_global_preferences'
		};
	},
	processor: function processor(preferences, _processor) {
		return {
			preference: preferences.map(function (preference) {
				var name = preference.name;
				var value = preference.value;

				return {
					'@': {
						name: name,
						value: value
					}
				};
			})
		};
	}
};
module.exports = exports['default'];
