import AbstractList from '../abstract/AbstractList.js';

export default class extends AbstractList {

    constructor($WPBMCHSPosts, $scope, $injector, $WPBMCHSAuthor, $filter) {
        'ngInject';

        super($injector, $scope);
        this.setType('authorPosts');
        this.setService($WPBMCHSPosts);
        this.$filter = $filter;
        this.author = undefined;
        this.$WPBMCHSAuthor = $WPBMCHSAuthor;
        this.getAuthor();
        // this.setTitle(this.getTitle($stateParams.term, $stateParams.slug));
    }

    getAuthor() {
        var self = this;
        this.$WPBMCHSAuthor.get(this.$stateParams.id).then((response) => {
            self.author = response.data;
            self.setTitle(this.$filter('translate')('author.title', {
                name: response.data.name
            }));
        });
    }

    getQuery() {
        var query = super.getQuery();
        query["filter[author]"] = this.$stateParams.id
        return query;
    }
}
