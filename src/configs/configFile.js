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
				{
					title: 'Add values to the AndroidManifest.xml file',
					example: {
						target: 'AndroidManifest.xml',
						parent: '/*',
						contents: {
							'supports-screens': {
								'@': {
									'android:xlargeScreens': false,
									'android:largeScreens': false,
									'android:smallScreens': true
								}
							},
							'uses-permission': [
								{
									'@': {
										'android:name': 'android.permission.READ_CONTACTS',
										'android:maxSdkVersion': 15
									}
								},
								{
									'@': {
										'android:name': 'android.permission.WRITE_CONTACTS'
									}
								}
							]
						}
					}
				},
				{
					title: 'Add an array value to the iOS Info.plist file',
					example: {
						target: '*-Info.plist',
						parent: 'UIBackgroundModes',
						contents: {
							array: {
								string: 'location'
							}
						}
					}
				},
				{
					title: 'Add a dict value to the iOS Info.plist file',
					example: {
						target: '*-Info.plist',
						parent: 'NSAppTransportSecurity',
						contents: {
							dict: {
								key: [
									'NSAllowsArbitraryLoads',
									{
										'=': 'true'
									}
								]
							}
						}
					}
				}
			],
			moreInfo: 'https://github.com/dpa99c/cordova-custom-config#config-files'
		};
	},
	processor(configFiles,processor){
		return {
			'config-file': configFiles.map((configFile) => {
				let {target,parent,contents} = configFile;

				return {
					'@': {
						target,
						parent
					},
					/* jshint ignore:start */
					...contents
					/* jshint ignore:end */
				};
			})
		};
	}
};