var vf = angular.module('vf', [
    'pascalprecht.translate',
    'angularMoment',
    'ngSanitize',
    // 'ngAnimate',
    'ui.router',
    'filters',
    'services',
    'factories',
    'directives',
    'controllers'
]).run(function($templateCache, $http, $timeout, $translate) {
    // preload templates like-a so
    $timeout(function() {
        // $http.get('front/page/home', {cache:$templateCache});
    }, 200);

    $translate.use(C.locale || navigator.language.split('-')[0]);
}).config(function ($translateProvider) {
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
});

// Declare modules
var filters = angular.module('filters', []);
var services = angular.module('services', []);
var factories = angular.module('factories', []);
var directives = angular.module('directives', []);
var controllers = angular.module('controllers', []);