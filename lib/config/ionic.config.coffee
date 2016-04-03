module.exports = ($WPBMCHSConfig, $ionicConfigProvider) ->
    'ngInject';
    viewsTransition = _.get $WPBMCHSConfig, 'ionicConfig.views.transition'
    viewsMaxCache = _.get $WPBMCHSConfig, 'ionicConfig.views.maxCache'
    viewsForwardCache = _.get $WPBMCHSConfig, 'ionicConfig.views.forwardCache'
    scrollingJsScrolling = _.get $WPBMCHSConfig, 'ionicConfig.scrolling.jsScrolling'
    backButtonIcon = _.get $WPBMCHSConfig, 'ionicConfig.backButton.icon'
    backButtonPreviousTitleText = _.get $WPBMCHSConfig, 'ionicConfig.backButton.previousTitleText'
    formCheckbox = _.get $WPBMCHSConfig, 'ionicConfig.form.checkbox'
    formToggle = _.get $WPBMCHSConfig, 'ionicConfig.form.toggle'
    spinnerIcon = _.get $WPBMCHSConfig, 'ionicConfig.spinner.icon'
    tabsStyle = _.get $WPBMCHSConfig, 'ionicConfig.tabs.style'
    tabsPosition = _.get $WPBMCHSConfig, 'ionicConfig.tabs.position'
    templatesMaxPrefetch = _.get $WPBMCHSConfig, 'ionicConfig.templates.maxPrefetch'
    navBarAlignTitle = _.get $WPBMCHSConfig, 'ionicConfig.navBar.alignTitle'
    navBarPositionPrimaryButtons = _.get $WPBMCHSConfig, 'ionicConfig.navBar.positionPrimaryButtons'
    navBarPositionSecondaryButtons = _.get $WPBMCHSConfig, 'ionicConfig.navBar.positionSecondaryButtons'

    $ionicConfigProvider.views.transition viewsTransition if _.isString viewsTransition
    $ionicConfigProvider.views.maxCache viewsMaxCache if _.isNumber viewsMaxCache
    $ionicConfigProvider.views.forwardCache viewsForwardCache if _.isBoolean viewsForwardCache
    $ionicConfigProvider.scrolling.jsScrolling scrollingJsScrolling if _.isBoolean scrollingJsScrolling
    $ionicConfigProvider.backButton.icon backButtonIcon if _.isString backButtonIcon
    $ionicConfigProvider.backButton.previousTitleText backButtonPreviousTitleText if _.isBoolean backButtonPreviousTitleText
    $ionicConfigProvider.form.checkbox formCheckbox if _.isString formCheckbox
    $ionicConfigProvider.form.toggle formToggle if _.isString formToggle
    $ionicConfigProvider.spinner.icon spinnerIcon if _.isString spinnerIcon
    $ionicConfigProvider.tabs.style tabsStyle if _.isString tabsStyle
    $ionicConfigProvider.tabs.position tabsPosition if _.isString tabsPosition
    $ionicConfigProvider.templates.maxPrefetch templatesMaxPrefetch if templatesMaxPrefetch
    $ionicConfigProvider.navBar.alignTitle navBarAlignTitle if _.isString navBarAlignTitle
    $ionicConfigProvider.navBar.positionPrimaryButtons navBarPositionPrimaryButtons if _.isString navBarPositionPrimaryButtons
    $ionicConfigProvider.navBar.positionSecondaryButtons navBarPositionSecondaryButtons if _.isString navBarPositionSecondaryButtons
