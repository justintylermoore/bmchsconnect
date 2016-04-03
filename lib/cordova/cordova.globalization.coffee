module.exports = angular.module 'wpbmchs.cordova'
    .run ($log, $WPBMCHSConfig, $ionicPlatform, $cordovaGlobalization, $WPBMCHSLanguage) ->
        $log.info 'cordova globalization information'

        $ionicPlatform.ready () ->
            $cordovaGlobalization.getPreferredLanguage()
            .then (locale) ->
                locale = locale.value.substring 0, 2

                if $WPBMCHSLanguage.hasLocale()
                    $WPBMCHSLanguage.setLocale $WPBMCHSLanguage.getLocale()
                else
                    $WPBMCHSLanguage.setLocale locale
