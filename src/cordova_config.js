import js2xmlparser from 'js2xmlparser';
import deepmerge from 'deepmerge';
import configs from './configs';

export default function(grunt){
	function deleteUndefined(input){
		if(input instanceof Array){
			let result = [];
			input.forEach((item) => {
				if(item !== undefined){
					result.push(deleteUndefined(item));
				}
			});
			return result;
		}
		else if(typeof input === 'object'){
			let result = {};
			Object.getOwnPropertyNames(input).forEach((property) => {
				if(input[property] !== undefined){
					result[property] = deleteUndefined(input[property]);
				}
			});
			return result;
		}
		else {
			return input;
		}
	}
	
	function getPluginOptions(plugin,options,scope){
		let pluginOptions = options;
		if(plugin.optionsKey){
			pluginOptions = pluginOptions[plugin.optionsKey];
		}
		else {
			pluginOptions = deepmerge(
				plugin.getDefaultOptions(),
				options
			);
		}
		if(!pluginOptions){
			if(scope !== 0){
				return false;
			}
			else {
				pluginOptions = plugin.getDefaultOptions();
			}
		}
		else if(plugin.hasMany && pluginOptions instanceof Array === false){
			pluginOptions = [pluginOptions];
		}
		return pluginOptions;
	}
	
	function processor(options,plugins,scope = 0){
		let result = {};
		plugins.forEach((plugin) => {
			if(
				plugin.occurances === 'multiple' ||
				plugin.occurances === 'single' && scope === 0
			){
				let pluginOptions = getPluginOptions(plugin,options,scope);
				if(!pluginOptions){
					return;
				}
				result = deepmerge(
					result,
					plugin.processor(
						pluginOptions,
						function(nestedConfig){
							return processor(nestedConfig,plugins,scope + 1);
						}
					)
				);
			}
		});
		return deleteUndefined(result);
	}
	
	grunt.registerMultiTask('cordova_config','Generates cordova config.xml',function(){
		grunt.file.write(
			this.data.dest,
			js2xmlparser('widget',
				processor(
					this.options(),
					configs
				)
			)
		);

		grunt.log.writeln('File "' + this.data.dest + '" created.');
	});
}