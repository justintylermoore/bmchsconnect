###
@ngdoc directive
@name wordpress - hybrid - client: WPBMCHSHref
@restrict E
@description
modify href behavior
###
module.exports = angular.module('wordpress-hybrid-client.directives')
    .directive 'WPBMCHSHrefInApp', () ->
        restrict: 'A'
        controller: ($scope, $element, $attrs, $log, $ionicScrollDelegate, $WPBMCHSConfig) ->
            target = _.get($WPBMCHSConfig, 'menu.externalLinkTarget') || '_system'
            options = _.get($WPBMCHSConfig, 'menu.externalLinkOptions') || 'location=yes'
            $element.on 'click', (event) ->
                event.preventDefault()
                if _.get(window, 'cordova.InAppBrowser')
                    cordova.InAppBrowser.open $attrs.href, target, options
                else
                    window.open $attrs.href, '_blank'
    .directive 'WPBMCHSHref', () ->
        restrict: 'A'
        controller: ($scope, $element, $attrs, $log, $ionicScrollDelegate, $WPBMCHSConfig) ->
            isAnchor = $attrs.href.lastIndexOf('#', 0) is 0
            target = _.get($WPBMCHSConfig, 'menu.externalLinkTarget') || '_system'
            options = _.get($WPBMCHSConfig, 'menu.externalLinkOptions') || 'location=yes'
            if isAnchor
                $element.on 'click', (event) ->
                    event.preventDefault()
                    anchor = $attrs.href.substr 1
                    element = angular.element document.getElementById(anchor)
                    if element.length is 0
                        element = angular.element document.getElementsByName(anchor)
                    if element.length is 0
                        return
                    $ionicScrollDelegate.scrollTo 0, element[0].offsetTop, true
            else
                $element.on 'click', (event) ->
                    event.preventDefault()
                    if _.get(window, 'cordova.InAppBrowser')
                        cordova.InAppBrowser.open $attrs.href, target, options
                    else
                        window.open $attrs.href, '_blank'
