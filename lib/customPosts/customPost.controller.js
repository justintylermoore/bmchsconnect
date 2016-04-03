import AbstractItem from '../abstract/AbstractItem.js';

export default class extends AbstractItem {

    constructor($WPBMCHSCustomPost, $injector, $scope) {
        'ngInject';

        super($injector, $scope);
        this.setType('customPost');
        // this.setTitle($filter('translate')('customPosts.title'));
        this.setService($WPBMCHSCustomPost);
        this.postType = _.get(this.$stateParams, 'slug');
    }
}
