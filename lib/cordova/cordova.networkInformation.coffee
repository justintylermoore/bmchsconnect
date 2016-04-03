module.exports = angular.module 'wordpress-hybrid-client.cordova'
    .run ($log, $WPBMCHSConfig, $cordovaNetwork, $ionicPlatform) ->
        $log.info 'cordova network information'

        $ionicPlatform.ready () ->
            $log.debug $cordovaNetwork.getNetwork(), 'network information'
