module.exports = angular.module 'wpbmchs.init'
    .service '$WPBMCHSInit', ($q, $WPBMCHSConfig, $log, $WPBMCHSCacheImg) ->
        init: ->
            promises = []
            promises.push $WPBMCHSCacheImg.init()
            $q.all promises
            .then ->
                $log.info 'Init: success!'
