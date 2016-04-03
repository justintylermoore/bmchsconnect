module.exports = angular.module 'wordpress-hybrid-client.cordova'
    .config ($cordovaAppRateProvider, $WPBMCHSConfig) ->
        if !_.get $WPBMCHSConfig, 'cordova.appRate.enabled'
            return

        document.addEventListener "deviceready", () ->
            preferences = _.get $WPBMCHSConfig, 'cordova.appRate'
            $cordovaAppRateProvider.setPreferences preferences
        , false
    .run ($cordovaAppRate, $WPBMCHSConfig, $ionicPlatform) ->
        if !_.get $WPBMCHSConfig, 'cordova.appRate.enabled'
            return
        $ionicPlatform.ready () ->
            $cordovaAppRate.promptForRating()
        , false
