module.exports = angular.module('wordpress-hybrid-client.syntaxHighlighter')
    .config ($WPBMCHSConfig, hljsServiceProvider) ->
        hljsServiceProvider.setOptions $WPBMCHSConfig.syntaxHighlighter
