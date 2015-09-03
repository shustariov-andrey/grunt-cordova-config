'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'splashes',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	getDocumentation: function getDocumentation() {
		return {
			description: 'Defines a splash screen to show.',
			type: {
				src: {
					description: 'The path to the splash screen.',
					type: 'string',
					required: true
				},
				density: {
					description: 'The splash screen\'s density.',
					type: 'string'
				},
				width: {
					description: 'The splash screen\'s width.',
					type: 'number'
				},
				height: {
					description: 'The splash screen\'s height.',
					type: 'number'
				},
				platform: {
					description: 'The splash screen\'s platform.',
					type: 'string'
				}
			},
			examples: [{
				title: 'Define some splash screens.',
				example: [{
					src: 'res/screen/ios/Default~iphone.png',
					platform: 'ios',
					width: 320,
					height: 480
				}, {
					src: 'res/screen/ios/Default@2x~iphone.png',
					platform: 'ios',
					width: 640,
					height: 960
				}, {
					src: 'res/screen/android/splash-land-hdpi.png',
					platform: 'android',
					density: 'land-hdpi'
				}, {
					src: 'res/screen/android/splash-land-mdpi.png',
					platform: 'android',
					density: 'land-mdpi'
				}]
			}],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_images.md.html#Icons%20and%20Splash%20Screens_configuring_splash_screens_in_the_cli'
		};
	},
	processor: function processor(icons, _processor) {
		return {
			splash: icons.map(function (icon) {
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
