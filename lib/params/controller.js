export default function($log, $scope, $WPBMCHSAccessibility, $WPBMCHSLanguage, $WPBMCHSPushNotifications, $WPBMCHSConfig) {
    'ngInject';

    let vm = this;
    vm.fontSize = $WPBMCHSAccessibility.getFontSizeList();
    vm.changeFontSize = changeFontSize;
    vm.changeLanguage = changeLanguage;
    vm.languages = $WPBMCHSLanguage.getLanguagesList();
    vm.selected = {
        fontSize: $WPBMCHSAccessibility.getFontSize(),
        language: $WPBMCHSLanguage.getLocale()
    };
    vm.isPushNotifPermitted = false;
    vm.isPushNotifEnabled = _.get($WPBMCHSConfig, 'cordova.pushNotifications.enabled');

    $scope.$on('$ionicView.enter', () => onEnter());

    function changeFontSize() {
        $log.info('changing fontSize to: ' + vm.selected.fontSize);
        $WPBMCHSAccessibility.setFontSize(vm.selected.fontSize);
    };

    function changeLanguage() {
        $log.info('changing language to: ' + vm.selected.language);
        $WPBMCHSLanguage.setLocale(vm.selected.language);
    };

    function onEnter() {
        $WPBMCHSPushNotifications.hasPermission().then(() => {
            vm.isPushNotifPermitted = true;
        }, () => {
            vm.isPushNotifPermitted = false;
        });
    }
}
