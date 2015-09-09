import deepmerge from 'deepmerge';
export default {
	occurances: 'single',
	hasMany: true,
	optionsKey: 'platforms',
	getDefaultOptions(){
		return [
			{
				name: 'android',
				allowIntents: [
					'market:*'
				]
			},
			{
				name: 'ios',
				allowIntents: [
					'itms:*',
					'itms-apps:*'
				]
			}
		];
	},
	getDocumentation(){
		return {
			description: 'Describes a platform level configuration.',
			type: {
				name: {
					type: 'string',
					required: true
				},
				__any__: true
			},
			examples: [
				{
					name: 'A basic configuration for android and iOS.',
					example: [
						{
							name: 'android',
							allowIntent: [
								'market:*'
							],
							icon: [
								{
									src: 'res/android/ldpi.png',
									density: 'ldpi'
								},
								{
									src: 'res/android/mdpi.png',
									density: 'mdpi'
								}
							]
						},
						{
							name: 'ios',
							allowIntent: [
								'itms:*',
								'itms-apps:*'
							],
							icon: [
								{
									src: 'res/ios/icon-60@3x.png',
									width: 180,
									height: 180
								},
								{
									src: 'res/ios/icon-60.png',
									width: 60,
									height: 60
								}
							]
						}
					]
				}
			],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_the_platform_element'
		};
	},
	processor(platforms,processor){
		return {
			platform: platforms.map((platform) => {
				let {name,...others} = platform;
				return deepmerge({
					'@': {
						name: name
					},
				},processor(others));
			})
		};
	}
};