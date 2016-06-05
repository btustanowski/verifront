controllers.controller("AdminUserController", [
    "$rootScope", "$scope", "$state", "$window", "$log", "UserService",
    function ($rootScope, $scope, $state, $window, $log, UserService) {
        var vm = this;
        vm.processing = false;
        var init = function () {
            if ($state.params.user_id) {
                UserService.get({
                    user_id: $state.params.user_id
                }).success(function (result) {
                    vm.users.active = result;
                });
            } else {
                UserService.query().success(function (result) {
                    vm.users.list = result;
                });
            }
        };

        vm.users = {
            new: {},
            active: {},
            list: [],
            create: function (form) {
                vm.processing = true;
                UserService.create(form).success(function () {
                    Materialize.toast('User invited.', 3000, 'green');
                    init();
                    vm.processing = false;
                }).error(function (error) {
                    vm.processing = false;
                    var errs = [];
                    if (typeof error === 'object') for (var i = 0, len = error.length; i < len; i++) errs.push(error[i].msg);
                    Materialize.toast(errs.join('<br>'), 3000, 'red');
                    $log.error(error);
                });
            }
        };
        init();
    },
]);
