export default {
	occurances: 'single',
	hasMany: true,
	optionsKey: 'engines',
	getDefaultOptions(){
		return [];
	},
	getDocumentation(){
		return {
			description: 'A platform to auto add with specified platform version.',
			type: {
				name: {
					type: 'string',
					description: 'The engine name.',
					required: true
				},
				spec: {
					type: 'string',
					description: 'The engine spec/version.',
					required: true
				}
			},
			examples: [
				{
					title: 'Add Android platform version 4.0.2',
					example: {
						name: 'android',
						spec: '4.0.2'
					}
				},
				{
					title: 'Add iOS platform version 3.8.0',
					example: {
						name: 'ios',
						spec: '3.8.0'
					}
				}
			],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/platform_plugin_versioning_ref_index.md.htmlPlatforms%20and%20Plugins%20Version%20Management_platform_versioning'
		};
	},
	processor(engines,processor){
		return {
			engine: engines.map((engine) => {
				let {name,spec} = engine;
				return {
					'@': {
						name,
						spec
					}
				};
			})
		};
	}
};