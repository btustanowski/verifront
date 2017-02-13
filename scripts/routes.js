vf.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    // Default route
    $urlRouterProvider.otherwise('/login');

    // Enable no-hash routing
    // $locationProvider.html5Mode(true);

    // Define states
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html'
        });

}]);