export default {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'allowIntents',
	getDefaultOptions(){
		return [
			'http://*/*',
			'https://*/*',
			'tel:*',
			'sms:*',
			'mailto:*',
			'geo:*'
		];
	},
	getDocumentation(){
		return {
			description: 'Controls which URLs the app is allowed to ask the system to open.',
			type: 'string',
			examples: [
				{
					title: 'Allow links to web pages to open in a browser.',
					example: [
						'http://*/*',
						'https://*/*'
					]
				},
				{
					title: 'Allow SMS links to open messaging app',
					example: [
						'sms:*'
					]
				}
			],
			moreInfo: 'https://github.com/apache/cordova-plugin-whitelist'
		};
	},
	processor(options,processor){
		return {
			'allow-intent': options.map((href) => {
				return {
					'@': {
						href
					}
				};
			})
		};
	}
};