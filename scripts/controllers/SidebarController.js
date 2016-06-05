controllers.controller("SidebarController", [
    "$rootScope", "$state", "$window", "$log", "UserService",
    function ($rootScope, $state, $window, $log, UserService) {
        var vm = this;
        vm.user = C.user;
        vm.processing = false;

        $rootScope.$on('reload', function () {
            vm.user = C.user;
        });

    },
]);
