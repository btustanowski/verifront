controllers.controller("HeaderController", [
    "$rootScope", "$state", "$window", "$log", "UserService",
    function ($rootScope, $state, $window, $log, UserService) {
        var vm = this;
        vm.user = C.user;
        vm.processing = false;

        $rootScope.$on('reload', function () {
            vm.user = C.user;
        });

        vm.logout = function () {
            vm.processing = true;
            UserService.logout().success(function () {
                C.user = {};
                C.save();
                $state.go("login");
                $rootScope.$broadcast('reload');
                Materialize.toast('Do zobaczenia!', 3000, 'green');
                vm.processing = false;
            }).error(function (error) {
                vm.processing = false;
                var errs = [];
                if (typeof error.data === 'object') for (var i = 0, len = error.data.length; i < len; i++) errs.push(error.data[i].msg);
                Materialize.toast(errs.join('<br>'), 3000, 'red');
                $log.error(error);
            });
        };
    },
]);
