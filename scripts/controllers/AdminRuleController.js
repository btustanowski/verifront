controllers.controller("AdminRuleController", [
    "$rootScope", "$scope", "$state", "$window", "$log", "RuleService", "SectionService",
    function ($rootScope, $scope, $state, $window, $log, RuleService, SectionService) {
        var vm = this;
        vm.processing = false;
        var init = function () {
            if ($state.params.rule_id) {
                RuleService.get({
                    rule_id: $state.params.rule_id
                }).success(function (result) {
                    vm.rules.active = result;
                    angular.element('.collapsible').collapsible();
                });
            } else {
                RuleService.query().success(function (result) {
                    vm.rules.list = result;
                });
            }

            SectionService.query().success(function (result) {
                vm.sections.list = result;
                result.forEach(function (el) {
                    vm.sections.map[el.id] = el.name;
                });
            });
        };

        vm.sections = {
            list: [],
            map: []
        };

        vm.rules = {
            new: {},
            active: {},
            list: [],
            create: function (form) {
                vm.processing = true;
                RuleService.create(form).success(function () {
                    Materialize.toast('Reguła zapisana.', 3000, 'green');
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
                RuleService.update(form).success(function () {
                    Materialize.toast('Reguła zapisana.', 3000, 'green');
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
