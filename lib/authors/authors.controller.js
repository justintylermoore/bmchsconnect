import AbstractList from '../abstract/AbstractList.js';

export default class extends AbstractList {

    constructor($WPBMCHSAuthors, $injector, $scope, $filter) {
        'ngInject';

        super($injector, $scope);
        this.showToolbar = true;
        this.setType('authors');
        this.setTitle($filter('translate')('authors.title'));
        this.setService($WPBMCHSAuthors);
    }
}
