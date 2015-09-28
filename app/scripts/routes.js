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
                controller: "HomeController"
            })
            .state("audit", {
                url: "/audyt",
                templateUrl: "template/pages/audit.html",
                controller: "AuditController"
            })
            .state("consulting", {
                url: "/konsulting",
                templateUrl: "template/pages/consulting.html",
                controller: "ConsultingController"
            })
            .state("training", {
                url: "/szkolenia",
                templateUrl: "template/pages/training.html",
                controller: "TrainingController"
            })
            .state("contact", {
                url: "/kontakt",
                templateUrl: "template/pages/contact.html",
                controller: "ContactController"
            });
    },
]);
