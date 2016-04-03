import AbstractList from '../abstract/AbstractList.js';

export default class extends AbstractList {

    constructor($WPBMCHSCustomPosts, $injector, $filter) {
        'ngInject';

        super($injector);
        this.setType('customPosts');
        this.setService($WPBMCHSCustomPosts);
        this.postType = _.get(this.$stateParams, 'slug');
        this.setTitle(this.postType);
    }
}
