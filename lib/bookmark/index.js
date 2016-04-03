import modConfig from './config.js';
import modController from './controller.js';
import modService from './service.js';

let mod = angular.module('wordpress-hybrid-client.bookmark', []);

mod.config(modConfig);
mod.controller('WPBMCHSBookmarkController', modController);
mod.factory('$WPBMCHSBookmark', modService);

export default mod = mod.name;
