import AbstractList from '../abstract/AbstractList.js';

export default class extends AbstractList {

    constructor($WPHCPages, $injector, $scope, $filter) {
        'ngInject';

        super($injector, $scope);
        this.setType('pages');
        this.setTitle();
        this.setService($WPHCPages);
    }
}
