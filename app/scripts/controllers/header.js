controllers.controller('HeaderController', [
    '$rootScope', '$scope', '$window', '$timeout',
    function ($rootScope, $scope, $window, $timeout) {
        var vm = this;
        vm.bg = false;

        angular.element($window).on('scroll', function() {
            vm.bg = ($window.pageYOffset > 100);
            $scope.$apply();
        });
    }
]);