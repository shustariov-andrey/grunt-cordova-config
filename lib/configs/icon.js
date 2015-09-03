'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'icons',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Describes the app\'s icon.',
			type: {
				src: {
					description: 'The path to the icon.',
					type: 'string',
					required: true
				},
				density: {
					description: 'The icon\'s density.',
					type: 'string'
				},
				width: {
					description: 'The icon\'s width.',
					type: 'number'
				},
				height: {
					description: 'The icon\'s height.',
					type: 'number'
				},
				platform: {
					description: 'The icon\'s platform.',
					type: 'string'
				}
			},
			examples: [{
				title: 'Define some icons',
				example: [{
					src: 'res/ios/icon-60@3x.png',
					platform: 'ios',
					width: 180,
					height: 180
				}, {
					src: 'res/ios/icon-60.png',
					platform: 'ios',
					width: 60,
					height: 60
				}, {
					src: 'res/android/ldpi.png',
					platform: 'android',
					density: 'ldpi'
				}, {
					src: 'res/android/mdpi.png',
					platform: 'android',
					density: 'mdpi'
				}]
			}],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_images.md.htmlIcons%20and%20Splash%20Screens_configuring_icons_in_the_cli'
		};
	},
	processor: function processor(icons, _processor) {
		return {
			icon: icons.map(function (icon) {
				var src = icon.src;
				var density = icon.density;
				var width = icon.width;
				var height = icon.height;
				var platform = icon.platform;

				return {
					'@': {
						src: src,
						density: density,
						width: width,
						height: height,
						platform: platform
					}
				};
			})
		};
	}
};
module.exports = exports['default'];
