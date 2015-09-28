controllers = angular.module("controllers", []);
directives = angular.module("directives", []);
factories = angular.module("factories", []);
services = angular.module("services", []);
filters = angular.module("filters", []);
vf = angular.module("vf", [
    // "pascalprecht.translate",
    "angularMoment",
    // "ngFileUpload",
    "ngResource",
    "ngSanitize",
    "ui.router",
    "filters",
    "services",
    "factories",
    "directives",
    "controllers",
]).run(function($templateCache, $http, $timeout, $rootScope, amMoment, $window) {
    $rootScope.$on("$stateChangeSuccess", function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    // $translate.use(C.locale || navigator.language.split("-")[0]);

    /* preload templates
    $timeout(function() {
         $http.get("front/page/home", {cache:$templateCache});
    }, 200);
    */
});
