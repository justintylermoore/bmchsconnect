module.exports = angular.module('wpbmchs.syntaxHighlighter')
    .config ($WPBMCHSConfig, hljsServiceProvider) ->
        hljsServiceProvider.setOptions $WPBMCHSConfig.syntaxHighlighter
