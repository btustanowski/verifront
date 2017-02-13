controllers.controller('HomeController', [
    '$rootScope', '$scope', '$window', '$timeout',
    function ($rootScope, $scope, $window) {
        var vm = this;

        angular.element(document).ready(function() {
            hero({r: 123, g: 173, b:86});
        });

        vm.scroll = function() {
            document.querySelector('.triplets').scrollIntoView({
                behavior: 'smooth'
            });
        };

    }
]);