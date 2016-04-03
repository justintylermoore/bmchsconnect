import 'angular-recursion';
import page from './page/index.js';
import pages from './pages/index.js';
import {postDirective, postFilter} from './post/index.js';
import posts from './posts/index.js';
import comment from './comment/index.js';
import comments from './comments/index.js';
import author from './author/index.js';
import authors from './authors/index.js';
import taxonomies from './taxonomies/index.js';
import emptyList from './emptyList/index.js';
import loader from './loader/index.js';
import menu from './menu/index.js';
import postToolbar from './postToolbar/index.js'

let mod = angular.module('wordpress-hybrid-client.directives', [
    'RecursionHelper',
    'vAccordion'
]);

// Legacy CoffeeScript directives
require("./bindAndCompileHtml/bindAndCompileHtml.coffee");
require("./inputEsc/inputEsc.coffee");
require("./hideWhen/hideWhen.coffee");
require("./showWhen/showWhen.coffee");
require("./href/href.coffee");

mod.directive('WPBMCHSPage', page);
mod.directive('WPBMCHSPages', pages);
mod.directive('WPBMCHSPost', postDirective);
mod.directive('WPBMCHSPosts', posts);
mod.directive('WPBMCHSAuthor', author);
mod.directive('WPBMCHSAuthors', authors);
mod.directive('WPBMCHSTaxonomies', taxonomies);
mod.directive('WPBMCHSComment', comment);
mod.directive('WPBMCHSComments', comments);
mod.directive('WPBMCHSEmptyList', emptyList);
mod.directive('WPBMCHSLoader', loader);
mod.directive('WPBMCHSMenu', menu);
mod.directive('WPBMCHSPostToolbar', postToolbar);


mod.filter('prepLink', postFilter);

export default mod = mod.name;
