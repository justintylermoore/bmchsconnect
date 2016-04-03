export default function($translateProvider, $WPBMCHSLanguageProvider, $translateSanitizationProvider) {
    'ngInject';

    var i, language, languages;
    languages = $WPBMCHSLanguageProvider.getLanguages();
    for (i in languages) {
        language = languages[i];
        $translateProvider.translations(language, require(`../translations/${language}`));
    }
    $translateProvider
        .preferredLanguage($WPBMCHSLanguageProvider.getPreferredLanguage())
        .registerAvailableLanguageKeys(languages, $WPBMCHSLanguageProvider.getLanguagesMapping())
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');

    $translateSanitizationProvider.useStrategy('sanitizeParameters');
}
