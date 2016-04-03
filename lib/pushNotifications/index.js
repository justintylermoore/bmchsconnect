import modConfig from './config.js';
import modService from './service.js';
import modController from './controller.js';

let mod = angular.module('wpbmchs.params.pushNotifications', []);

mod.config(modConfig);
mod.service('$WPBMCHSPushNotifications', modService);
mod.controller('WPBMCHSParamsPushNotificationsController', modController);

export default mod = mod.name;
