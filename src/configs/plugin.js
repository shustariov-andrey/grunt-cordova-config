export default {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'plugins',
	getDefaultOptions(){
		return [
			{
				name: 'cordova-plugin-whitelist',
				spec: '1'
			}
		];
	},
	getDocumentation(){
		return {
			description: 'Describes a plugin that the app utilizes.',
			type: {
				name: {
					description: 'The plugin\'s name.',
					type: 'string',
					required: true
				},
				spec: {
					description: 'The plugin\'s spec/version.',
					type: 'string',
					required: true
				}
			},
			examples: [
				{
					title: 'Add whitelist plugin.',
					example: this.getDefaultOptions()
				}
			],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/platform_plugin_versioning_ref_index.md.html#Platforms%20and%20Plugins%20Version%20Management_plugin_versioning'
		};
	},
	processor(plugins,processor){
		return {
			plugin: plugins.map((plugin) => {
				let {name,spec,version} = plugin;
				return {
					'@': {
						name,
						spec,
						version
					}
				};
			})
		};
	}
};