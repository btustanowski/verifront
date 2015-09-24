controllers.controller('HeaderController', [
    '$rootScope', '$scope', '$window',
    function ($rootScope, $scope, $window) {
        var vm = this;
        vm.bg = false;
        angular.element($window).on('scroll', function() {
            vm.bg = ($window.pageYOffset > 100);
            console.log(vm.bg);
            $scope.$apply();
        });
    }
]);