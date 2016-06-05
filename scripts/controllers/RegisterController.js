controllers.controller("RegisterController", [
    "$rootScope", "$scope", "$log", "UserService", "$state",
    function ($rootScope, $scope, $log, UserService, $state) {
        var vm = this;

        vm.processing = false;
        vm.form = {};

        vm.register = function (form) {
            vm.processing = true;
            UserService.register({
                email: form.email,
                password: form.password,
            }).then(function () {
                $state.go("home");
                Materialize.toast('Registration successful.', 3000, 'green');
                vm.processing = false;
            }, function (error) {
                vm.processing = false;
                var errs = [];
                if (typeof error.data === 'object') for (var i = 0, len = error.data.length; i < len; i++) errs.push(error.data[i].msg);
                Materialize.toast(errs.join('<br>'), 3000, 'red');
                $log.error(error);
            });
        };
    },
]);
