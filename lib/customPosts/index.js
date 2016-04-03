import modConfig from './config.js';
import modCustomPostController from './customPost.controller.js';
import modCustomPostsController from './customPosts.controller.js';
import modCustomPostService from './customPost.service.js';
import modCustomPostsService from './customPosts.service.js';
import WPBMCHSCustomPostsItem from './directives/item.js';
import WPBMCHSCustomPostsList from './directives/list.js';

let mod = angular.module('wordpress-hybrid-client.customPosts', []);

mod.config(modConfig);
mod.controller('WPBMCHSCustomPostController', modCustomPostController);
mod.controller('WPBMCHSCustomPostsController', modCustomPostsController);
mod.service('$WPBMCHSCustomPost', modCustomPostService);
mod.service('$WPBMCHSCustomPosts', modCustomPostsService);
mod.directive('WPBMCHSCustomPostsItem', WPBMCHSCustomPostsItem);
mod.directive('WPBMCHSCustomPostsList', WPBMCHSCustomPostsList);

export default mod = mod.name;
