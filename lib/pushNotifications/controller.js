export default function($log, $scope, $WPBMCHSPushNotifications, $WPBMCHSLoading) {
    'ngInject';

    let vm = this;
    vm.onChange = onChange;

    $scope.$on('$ionicView.enter', () => onEnter());

    function onChange(){
        $WPBMCHSLoading.show();
        if (vm.hasBeenRegistered){
            $WPBMCHSPushNotifications.register().finally(() => {
                $WPBMCHSLoading.hide();
            });
        } else {
            $WPBMCHSPushNotifications.unregister().finally(() => {
                $WPBMCHSLoading.hide();
            });
        }
    }

    function onEnter() {
        $WPBMCHSLoading.show();
        $WPBMCHSPushNotifications.hasBeenRegistered().then((response) => {
            vm.hasBeenRegistered = true;
        }, () => {
            vm.hasBeenRegistered = false;
        }).finally(() => {
            $WPBMCHSLoading.hide();
        });
    }
}
