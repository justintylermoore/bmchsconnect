import defaultConfig from '../config/config.default.cson';
import configOverwrite from '../config/config.cson';
import menu from '../config/menu.json';
import deepExtend from 'deep-extend';

let config = {};

config = deepExtend(defaultConfig, configOverwrite, _.get(window, 'WPBMCHS.config'));

let mod = angular.module('wordpress-hybrid-client.config', []);

mod.constant('$WPBMCHSConfig', config);
mod.constant('$WPBMCHSMenu', menu);

export default mod;
