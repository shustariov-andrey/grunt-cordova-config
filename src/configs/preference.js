export default {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'preferences',
	getDefaultOptions(){
		return [];
	},
	getDocumentation(){
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
			examples: [
				{
					title: 'Define the webview\'s background color.',
					example: {
						name: 'BackgroundColor',
						value: '0xff0000ff'
					}
				}
			],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_global_preferences'
		};
	},
	processor(preferences,processor){
		return {
			preference: preferences.map((preference) => {
				let {name,value} = preference;
				return {
					'@': {
						name,
						value
					}
				};
			})
		};
	}
};