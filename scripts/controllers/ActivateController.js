controllers.controller("ActivateController", [
    "$rootScope", "$scope", "$log", "UserService", "$state",
    function ($rootScope, $scope, $log, UserService, $state) {
        var vm = this;

        vm.processing = false;
        vm.form = {};

        vm.activate = function (form) {
            vm.processing = true;
            form.code = $state.params.code;
            UserService.activate(form).then(function () {
                $state.go("login");
                Materialize.toast('Konto aktywowane. Możesz teraz zalogować się poniżej.', 5000, 'green');
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
