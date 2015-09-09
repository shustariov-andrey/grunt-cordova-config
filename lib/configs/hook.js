'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'hooks',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Defines an action to be run during a certian cordova lifecycle event.',
			type: {
				type: {
					description: 'The hook type.',
					type: 'string',
					required: true
				},
				src: {
					description: 'The path to the hook to execute.',
					type: 'string',
					required: true
				}
			},
			examples: [{
				title: 'Run path/to/myscript.js after the app is prepared.',
				example: {
					type: 'after_prepare',
					src: 'myscript.js'
				}
			}, {
				title: 'Run path/to/myscript.sh before a clean is done.',
				example: {
					type: 'before_clean',
					src: 'path/to/myscript.sh'
				}
			}],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/guide_appdev_hooks_index.md.html'
		};
	},
	processor: function processor(hooks, _processor) {
		return {
			hook: hooks.map(function (hook) {
				var type = hook.type;
				var src = hook.src;

				return {
					'@': {
						type: type,
						src: src
					}
				};
			})
		};
	}
};
module.exports = exports['default'];
