import modConfig from './config.js';
import modController from './controller.js';
import modPostsController from './posts.controller.js';
import modService from './service.js';
import modTagService from './tag.service.js';
import modCustomService from './custom.service.js';
import modCustomPostsService from './customPosts.service.js';
import modCategoryService from './category.service.js';

let mod = angular.module('wordpress-hybrid-client.taxonomies', []);

mod.config(modConfig);
mod.controller('WPBMCHSTaxonomiesController', modController);
mod.controller('WPBMCHSTaxonomiesPostsController', modPostsController);
mod.service('$WPBMCHSTaxonomiesCategory', modCategoryService);
mod.service('$WPBMCHSTaxonomiesTag', modTagService);
mod.service('$WPBMCHSTaxonomiesCustom', modCustomService);
mod.service('$WPBMCHSTaxonomiesCustomPosts', modCustomPostsService);
mod.service('$WPBMCHSTaxonomies', modService);

export default mod = mod.name;
