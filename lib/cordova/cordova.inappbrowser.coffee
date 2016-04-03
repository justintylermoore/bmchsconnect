module.exports = angular.module 'wpbmchs.cordova'
    .config ($cordovaInAppBrowserProvider) ->
        defaultOptions =
            location: 'no',
            clearcache: 'no',
            toolbar: 'no',
            target: '_self'

        $cordovaInAppBrowserProvider.setDefaultOptions(defaultOptions)
