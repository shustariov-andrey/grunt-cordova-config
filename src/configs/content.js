export default {
	occurances: 'multiple',
	hasMany: false,
	optionsKey: 'content',
	getDefaultOptions(){
		return 'index.html';
	},
	getDocumentation(){
		return {
			description: 'The starting page of the app.',
			type: 'string',
			required: true,
			examples: [
				{
					title: 'The starting page is myroot/index.html',
					example: 'myroot/index.html'
				}
			],
			moreInfo: 'http://cordova.apache.org/docs/en/5.0.0/config_ref_index.md.html#The%20config.xml%20File_core_configuration_elements'
		};
	},
	processor(src,processor){
		return {
			content: {
				'@': {
					src
				}
			}
		};
	}
};