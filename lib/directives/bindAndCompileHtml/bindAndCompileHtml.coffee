
module.exports = angular.module('wpbmchs.directives').directive 'bindAndCompileHtml', ($compile) ->
    restrict: 'A'
    link: (scope, element, attrs) ->
        scope.$watch attrs.bindAndCompileHtml, (newValue, oldValue) ->
            element.html newValue
            $compile(element.contents())(scope)
