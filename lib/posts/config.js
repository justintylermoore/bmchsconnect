export default function($stateProvider) {
    'ngInject';

    $stateProvider
        .state('public.posts', {
            url: "/posts",
            class: 'module-posts',
            views: {
                'content': {
                    templateProvider: ($templateCache) => $templateCache.get('module/posts/list.html'),
                    controller: "WPBMCHSPostsController as postsCtrl"
                }
            }
        }).state('public.posts.id', {
            url: "/:id",
            class: 'module-posts-<%=id%>',
            views: {
                'content@public': {
                    templateProvider: ($templateCache) => $templateCache.get('module/posts/item.html'),
                    controller: "WPBMCHSPostController as postCtrl"
                }
            }
        });
}
