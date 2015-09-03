'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'allowIntents',
	getDefaultOptions: function getDefaultOptions() {
		return ['http://*/*', 'https://*/*', 'tel:*', 'sms:*', 'mailto:*', 'geo:*'];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Controls which URLs the app is allowed to ask the system to open.',
			type: 'string',
			examples: [{
				title: 'Allow links to web pages to open in a browser.',
				example: ['http://*/*', 'https://*/*']
			}, {
				title: 'Allow SMS links to open messaging app',
				example: ['sms:*']
			}],
			moreInfo: 'https://github.com/apache/cordova-plugin-whitelist'
		};
	},
	processor: function processor(options, _processor) {
		return {
			'allow-intent': options.map(function (href) {
				return {
					'@': {
						href: href
					}
				};
			})
		};
	}
};
module.exports = exports['default'];
