'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'single',
	hasMany: false,
	optionsKey: 'author',
	getDefaultOptions: function getDefaultOptions() {
		return {
			email: 'dev@callback.apache.org',
			name: 'Apache Cordova Team',
			href: 'http://cordova.io'
		};
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Describes the author and contact info of the project.',
			type: {
				email: {
					type: 'string',
					description: 'The author\'s email address.'
				},
				name: {
					type: 'string',
					description: 'The author\'s name.'
				},
				href: {
					type: 'string',
					description: 'A URL to more info about the author.'
				}
			},
			examples: [{
				title: 'A simple example.',
				example: {
					email: 'someone@someplace.com',
					name: 'John Smith',
					href: 'http://johnsmith.me'
				}
			}],
			moreInfo: 'http://cordova.apache.org/docs/en/5.0.0/config_ref_index.md.html#The%20config.xml%20File_core_configuration_elements'
		};
	},
	processor: function processor(options, _processor) {
		var email = options.email;
		var href = options.href;
		var name = options.name;

		return {
			author: {
				'@': {
					email: email,
					href: href
				},
				'#': name
			}
		};
	}
};
module.exports = exports['default'];
