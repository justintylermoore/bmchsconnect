import AbstractItem from '../abstract/AbstractItem.js';

export default class extends AbstractItem {

    constructor($WPBMCHSPost, $injector, $scope) {
        'ngInject';

        super($injector, $scope);
        this.setType('post');
        this.setService($WPBMCHSPost);
    }
}
