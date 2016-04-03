// import "./post.filter.coffee";

export function postDirective() {
    return {
        bindToController: true,
        transclude: true,
        replace: false,
        controller: Controller,
        controllerAs: 'postCtrl',
        restrict: 'E',
        scope: {
            post: "=",
            layout: '='
        },
        template: `
            <div ng-include="'directive/post.html'"></div>
        `
    };

    function Controller($WPBMCHSConfig, $WPBMCHSPost) {
        'ngInject';

        var vm = this;
        vm.featured_image = undefined;
        vm.enabled = _.get($WPBMCHSConfig, 'post.comments.enabled');

        if (vm.post.better_featured_image) {
            vm.featured_image = _.get(vm.post, 'better_featured_image.media_details.sizes.medium.source_url');
        } else {
            $WPBMCHSPost.getFeatureImage(vm.post.featured_media).then(function(image) {
                if (!image) {
                    return;
                }
                vm.featured_image = _.get(image, 'media_details.sizes.medium.source_url');
            });
        }
    }
}

export function postFilter() {
    return function(text) {
        var all, element;
        element = angular.element('<div></div>');
        element.append(text);
        all = angular.element(element[0].querySelectorAll('a[href]'));
        all.attr('WPBMCHS-href', '');
        return element.html();
    };
}
