export default {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'configFiles',
	getDefaultOptions(){
		return [];
	},
	getDocumentation(){
		return {
			description: 'A block of configuration file content for use with cordova-custom-config.',
			type: {
				target: {
					description: 'The config file to which the contents will be added.',
					type: 'string',
					required: true
				},
				parent: {
					description: 'The existing item under which the contents will be added (XPath for Android, plist key name for iOS).',
					type: 'string',
					required: true
				},
				contents: {
					description: 'The js2xmlparser-compatible JSON object to insert into the configuration file as XML.',
					type: 'object',
					required: true
				}
			},
			examples: [
				// TODO
			],
			moreInfo: 'https://github.com/dpa99c/cordova-custom-config#config-files'
		};
	},
	processor(configFiles,processor){
		return {
			'config-file': configFiles.map((configFile) => {
				let {target,parent,contents} = configFile;

				contents['@'] = {
					target,
					parent
				};
				
				return contents;
			})
		};
	}
};