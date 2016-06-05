controllers.controller("LoginController", [
    "$rootScope", "$scope", "$log", "UserService", "$state", "translateFilter",
    function ($rootScope, $scope, $log, UserService, $state, translateFilter) {
        var vm = this;

        vm.processing = false;
        vm.form = {};

        vm.login = function (form) {
            vm.processing = true;
            UserService.login({
                email: form.email,
                password: form.password,
            }).success(function (user) {
                C.user = user;
                C.save();
                $.Notify({
                    caption: translateFilter('login.welcome'),
                    content: translateFilter('login.success'),
                    type: 'success'
                });
                vm.processing = false;
            }).error(function (error) {
                vm.processing = false;
                $.Notify({
                    caption: translateFilter('login.error'),
                    content: translateFilter('login.incorrect'),
                    type: 'alert'
                });
                $log.error(error);
            });
        };
    },
]);
