import modConfig from './config.js';
import modController from './controller.js';

let mod = angular.module('wordpress-hybrid-client.params', []);

mod.config(modConfig);
mod.controller('WPBMCHSParamsController', modController);

export default mod = mod.name;
