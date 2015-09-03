export default {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'icons',
	getDefaultOptions(){
		return [];
	},
	getDocumentation(){
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
			examples: [
				{
					title: 'Define some icons',
					example: [
						{
							src: 'res/ios/icon-60@3x.png',
							platform: 'ios',
							width: 180,
							height: 180
						},
						{
							src: 'res/ios/icon-60.png',
							platform: 'ios',
							width: 60,
							height: 60
						},
						{
							src: 'res/android/ldpi.png',
							platform: 'android',
							density: 'ldpi'
						},
						{
							src: 'res/android/mdpi.png',
							platform: 'android',
							density: 'mdpi'
						}
					]
				}
			],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_images.md.htmlIcons%20and%20Splash%20Screens_configuring_icons_in_the_cli'
		};
	},
	processor(icons,processor){
		return {
			icon: icons.map((icon) => {
				let {src,density,width,height,platform} = icon;
				return {
					'@': {
						src,
						density,
						width,
						height,
						platform
					}
				};
			})
		};
	}
};