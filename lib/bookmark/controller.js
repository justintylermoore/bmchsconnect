export default function($log, $scope, $WPBMCHSBookmark) {
    'ngInject';

    let vm = this;
    vm.posts = [];
    vm.remove = remove;

    $scope.$on('$ionicView.enter', () => onEnter());

    function onEnter() {
        return loadPosts();
    }

    function loadPosts() {
        return $WPBMCHSBookmark.getList().then((posts) => vm.posts = posts);
    }

    function remove(post) {
        $WPBMCHSBookmark.remove(post);
        return loadPosts();
    }
}
