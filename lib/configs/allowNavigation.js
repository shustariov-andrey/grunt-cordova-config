'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'allowNavigations',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Controls which URLs the WebView itself can be navigated to. Applies to top-level navigations only.',
			type: 'string',
			examples: [{
				title: 'Allow links to example.com',
				example: 'http://example.com/*'
			}],
			moreInfo: 'https://github.com/apache/cordova-plugin-whitelist'
		};
	},
	processor: function processor(options, _processor) {
		return {
			'allow-navigation': options.map(function (href) {
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
