module.exports = angular.module 'wordpress-hybrid-client.init'
    .service '$WPBMCHSInit', ($q, $WPBMCHSConfig, $log, $WPBMCHSCacheImg) ->
        init: ->
            promises = []
            promises.push $WPBMCHSCacheImg.init()
            $q.all promises
            .then ->
                $log.info 'Init: success!'
