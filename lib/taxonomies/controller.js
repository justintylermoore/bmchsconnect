import AbstractList from '../abstract/AbstractList.js';

export default class extends AbstractList {

    constructor($WPBMCHSTaxonomiesCategory, $WPBMCHSTaxonomiesTag, $WPBMCHSTaxonomiesCustom, $injector, $scope, $filter, $stateParams) {
        'ngInject';

        super($injector, $scope);
        this.showToolbar = true;
        this.setType('taxonomies');
        if ($stateParams.term === 'category') {
            this.setTitle($filter('translate')('categories.title'));
            this.setService($WPBMCHSTaxonomiesCategory);
        } else if ($stateParams.term === 'post_tag') {
            this.setTitle($filter('translate')('tags.title'));
            this.setService($WPBMCHSTaxonomiesTag);
        } else {
            this.setTitle($stateParams.term);
            this.setService($WPBMCHSTaxonomiesCustom);
        }
        this.term = $stateParams.term;
        this.postType = $stateParams.postType;
    }
}
