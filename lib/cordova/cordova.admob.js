module.exports = angular.module('wordpress-hybrid-client.cordova')
    .run(($log, $WPBMCHSConfig, $ionicPlatform) => {
        'ngInject';

        $log.info('[admob]');

        if (!_.get($WPBMCHSConfig, 'cordova.admob.enabled')) {
            $log.info('[admob] disabled');
            return;
        }

        $ionicPlatform.ready(() => {
            let bannerID = null;
            let interstitialID = null;
            let bannerPosition = 'BOTTOM_CENTER'
            if (/(android)/i.test(navigator.userAgent)) { // for android & amazon-fireos
                bannerID = _.get($WPBMCHSConfig, 'cordova.admob.android.bannerID');
                interstitialID = _.get($WPBMCHSConfig, 'cordova.admob.android.interstitialID');
                bannerPosition = _.get($WPBMCHSConfig, 'cordova.admob.android.bannerPosition');
            } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
                bannerID = _.get($WPBMCHSConfig, 'cordova.admob.ios.bannerID');
                interstitialID = _.get($WPBMCHSConfig, 'cordova.admob.ios.interstitialID');
                bannerPosition = _.get($WPBMCHSConfig, 'cordova.admob.ios.bannerPosition');
            } else { // for windows phone
                bannerID = _.get($WPBMCHSConfig, 'cordova.admob.windows.bannerID');
                interstitialID = _.get($WPBMCHSConfig, 'cordova.admob.windows.interstitialID');
                bannerPosition = _.get($WPBMCHSConfig, 'cordova.admob.windows.bannerPosition');
            }

            if (AdMob && interstitialID) {
                AdMob.prepareInterstitial({
                    adId: interstitialID,
                    autoShow: true
                });
            }
            if (AdMob && bannerID) {
                AdMob.createBanner({
                    adId: bannerID,
                    position: AdMob.AD_POSITION[bannerPosition],
                    autoShow: true
                });
            }
        });
    });
