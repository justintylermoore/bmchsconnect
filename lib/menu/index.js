import modConfig from './config.js';
import modController from './controller.js';

let mod = angular.module('wpbmchs.menu', []);

mod.config(modConfig);
mod.controller('WPBMCHSMenuController', modController);

export default mod = mod.name;
