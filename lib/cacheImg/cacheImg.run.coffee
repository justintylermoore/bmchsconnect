module.exports = angular.module 'wordpress-hybrid-client.cacheImg'
    .run ($ionicPlatform, $log, $WPBMCHSConfig) ->
        ImgCache.options.debug = if IS_PROD then false else true
        ImgCache.options.chromeQuota = $WPBMCHSConfig.cache.img.chromeQuota;
        ImgCache.options.localCacheFolder = $WPBMCHSConfig.cache.img.localCacheFolder;
        ImgCache.options.useDataURI = $WPBMCHSConfig.cache.img.useDataURI;
        ImgCache.options.usePersistentCache = $WPBMCHSConfig.cache.img.usePersistentCache;
        ImgCache.options.cacheClearSize = $WPBMCHSConfig.cache.img.cacheClearSize;
        ImgCache.options.headers = $WPBMCHSConfig.cache.img.headers;
        ImgCache.options.skipURIencoding = $WPBMCHSConfig.cache.img.skipURIencoding;

        $ionicPlatform.ready ->
            $log.debug 'ImgCache initialising'
            ImgCache.init ->
                $log.debug 'ImgCache init: success!'
            , ->
                $log.error 'ImgCache init: error! Check the log for errors'
