vf.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        // Default route
        $urlRouterProvider.otherwise("/");

        // Enable no-hash routing
        $locationProvider.html5Mode(true);

        // Define states
        $stateProvider
            .state("/", {
                url: "/",
                templateUrl: "template/pages/home.html",
                controller: "HomeController",
                controllerAs: "HC"
            })
            .state("web", {
                url: "/projektowanie-www",
                templateUrl: "template/pages/web.html",
                controller: "WebController"
            })
            .state("apps", {
                url: "/aplikacje-interenetowe",
                templateUrl: "template/pages/apps.html",
                controller: "AppsController"
            })
            .state("audit", {
                url: "/audyt-www",
                templateUrl: "template/pages/audit.html",
                controller: "AuditController"
            })
            .state("contact", {
                url: "/kontakt",
                templateUrl: "template/pages/contact.html",
                controller: "ContactController"
            });
    },
]);
