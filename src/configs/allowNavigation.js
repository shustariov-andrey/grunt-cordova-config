export default {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'allowNavigations',
	getDefaultOptions(){
		return [];
	},
	getDocumentation(){
		return {
			description: 'Controls which URLs the WebView itself can be navigated to. Applies to top-level navigations only.',
			type: 'string',
			examples: [
				{
					title: 'Allow links to example.com',
					example: 'http://example.com/*'
				}
			],
			moreInfo: 'https://github.com/apache/cordova-plugin-whitelist'
		};
	},
	processor(options,processor){
		return {
			'allow-navigation': options.map((href) => {
				return {
					'@': {
						href
					}
				};
			})
		};
	}
};