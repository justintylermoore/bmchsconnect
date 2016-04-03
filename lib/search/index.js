import modConfig from './config.js';
import modController from './controller.js';
import modService from './service.js';

let mod = angular.module('wpbmchs.search', []);

mod.config(modConfig);
mod.controller('WPBMCHSSearchController', modController);
mod.service('$WPBMCHSSearch', modService);

export default mod = mod.name;
