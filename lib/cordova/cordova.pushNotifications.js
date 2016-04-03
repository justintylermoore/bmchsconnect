module.exports = angular.module('wpbmchs.cordova')
    .run(($log, $WPBMCHSConfig, $ionicPlatform, $WPBMCHSPushNotifications) => {
        'ngInject';

        $log.info('[pushNotifications]');

        if (!_.get($WPBMCHSConfig, 'cordova.pushNotifications.enabled')) {
            $log.info('[pushNotifications] disabled');
            return;
        }

        $ionicPlatform.ready(() => {
            $WPBMCHSPushNotifications.init();
            $WPBMCHSPushNotifications.hasPermission().then(() => {
                if ($WPBMCHSPushNotifications.hasBeenUnregistered()) {
                    return;
                }
                $WPBMCHSPushNotifications.register()
            });
        });
    });
