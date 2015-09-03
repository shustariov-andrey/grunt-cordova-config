'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = ['root', 'author', 'content', 'access', 'allowIntent', 'allowNavigation', 'preference', 'feature', 'icon', 'splash', 'platform', 'engine', 'plugin', 'hook'].map(function (config) {
	return require('./configs/' + config);
});
module.exports = exports['default'];
