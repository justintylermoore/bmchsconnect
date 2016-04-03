export default function($log, $WPBMCHSLanguage, $translate) {
    'ngInject';
    if (!ionic.Platform.isWebView()) {
        if ($WPBMCHSLanguage.hasLocale()) {
            return $WPBMCHSLanguage.setLocale($WPBMCHSLanguage.getLocale());
        } else {
            return $WPBMCHSLanguage.setLocale($WPBMCHSLanguage.getPreferredLanguage());
        }
    }
}
