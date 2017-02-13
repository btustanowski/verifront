controllers.controller("AdminSectionController", [
    "$rootScope", "$scope", "$state", "$window", "$log", "SectionService",
    function ($rootScope, $scope, $state, $window, $log, SectionService) {
        var vm = this;
        vm.processing = false;
        var init = function () {
            if ($state.params.section_id) {
                SectionService.get({
                    section_id: $state.params.section_id
                }).success(function (result) {
                    vm.sections.active = result;
                    angular.element('.collapsible').collapsible();
                });
            } else {
                SectionService.query().success(function (result) {
                    vm.sections.list = result;
                });
            }
        };

        vm.sections = {
            new: {},
            active: {},
            list: [],
            create: function (form) {
                vm.processing = true;
                SectionService.create(form).success(function () {
                    Materialize.toast('Sekcja zapisana.', 3000, 'green');
                    init();
                    vm.processing = false;
                }).error(function (error) {
                    vm.processing = false;
                    var errs = [];
                    if (typeof error === 'object') for (var i = 0, len = error.length; i < len; i++) errs.push(error[i].msg);
                    Materialize.toast(errs.join('<br>'), 3000, 'red');
                    $log.error(error);
                });
            },
            update: function (form) {
                vm.processing = true;
                SectionService.update(form).success(function () {
                    Materialize.toast('Sekcja zapisana.', 3000, 'green');
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
