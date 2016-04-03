module.exports = angular.module 'wpbmchs.cordova'
    .run ($log, $WPBMCHSConfig, $cordovaNetwork, $ionicPlatform) ->
        $log.info 'cordova network information'

        $ionicPlatform.ready () ->
            $log.debug $cordovaNetwork.getNetwork(), 'network information'
