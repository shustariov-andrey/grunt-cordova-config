'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'access',
	getDefaultOptions: function getDefaultOptions() {
		return [{
			origin: '*'
		}];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Defines the set of external domains the app is allowed to communicate with.',
			type: {
				origin: {
					type: 'string',
					description: 'The domain to allow. Wildcards (*) are supported.',
					required: true
				},
				launchExternal: {
					type: 'boolean',
					description: 'Wether or not to launch the URL in an external browser (outside of the app)'
				},
				subdomains: {
					type: 'boolean',
					description: 'Wether ot not to allow subdomains. Effectively the same as http://*.domain.tld'
				}
			},
			examples: [{
				title: 'Allow access to google.com',
				example: {
					origin: 'http://google.com'
				}
			}, {
				title: 'Open github.com in external browser.',
				example: {
					origin: 'http://github.com',
					launchExternal: true
				}
			}, {
				title: 'Allow access to *.google.com',
				example: {
					origin: 'http://google.com',
					subdomains: true
				}
			}],
			moreInfo: 'http://cordova.apache.org/docs/en/5.0.0/guide_appdev_whitelist_index.md.html'
		};
	},
	processor: function processor(options, _processor) {
		return {
			access: options.map(function (option) {
				var origin = option.origin;
				var launchExternal = option.launchExternal;

				return {
					'@': {
						origin: origin,
						'launch-external': launchExternal
					}
				};
			})
		};
	}
};
module.exports = exports['default'];
