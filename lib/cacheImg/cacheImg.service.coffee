module.exports = angular.module 'wpbmchs.cacheImg'
    .service '$WPBMCHSCacheImg', ($q, $WPBMCHSConfig, $log) ->
        initialised = false
        init: ->
            if initialised
                return
            deferred = $q.defer()
            $log.debug 'ImgCache initialising'
            ImgCache.options.debug = if IS_PROD then false else true
            ImgCache.options.chromeQuota = $WPBMCHSConfig.cache.img.chromeQuota;
            ImgCache.options.localCacheFolder = $WPBMCHSConfig.cache.img.localCacheFolder;
            ImgCache.options.useDataURI = $WPBMCHSConfig.cache.img.useDataURI;
            ImgCache.options.usePersistentCache = $WPBMCHSConfig.cache.img.usePersistentCache;
            ImgCache.options.cacheClearSize = $WPBMCHSConfig.cache.img.cacheClearSize;
            ImgCache.options.headers = $WPBMCHSConfig.cache.img.headers;
            ImgCache.options.skipURIencoding = $WPBMCHSConfig.cache.img.skipURIencoding;
            ImgCache.init ->
                $log.info 'ImgCache init: success!'
                deferred.resolve()
            , ->
                $log.error 'ImgCache init: error! Check the log for errors'
                deferred.reject()
            deferred.promise
        checkCacheStatus: (src) ->
            deferred = $q.defer()
            ImgCache.isCached src, (path, success) ->
                if success
                    deferred.resolve path
                else
                ImgCache.cacheFile src, ->
                    ImgCache.isCached src, (path, success) ->
                        deferred.resolve path
                        return
                    , deferred.reject
                    return
                , deferred.reject
                return
            , deferred.reject
            deferred.promise
