import modConfig from './config.js';
import modPageController from './page.controller.js';
import modPagesController from './pages.controller.js';
import modPageService from './page.service.js';
import modPagesService from './pages.service.js';

let mod = angular.module('wpbmchs.pages', []);

mod.config(modConfig);
mod.controller('WPBMCHSPageController', modPageController);
mod.controller('WPBMCHSPagesController', modPagesController);
mod.service('$WPBMCHSPage', modPageService);
mod.service('$WPBMCHSPages', modPagesService);

export default mod = mod.name;
