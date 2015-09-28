controllers.controller('HomeController', [
    '$rootScope', '$scope', '$window', '$timeout',
    function ($rootScope, $scope, $window) {
        angular.element(document).ready(function() {
            hero({r: 123, g: 173, b:86});
        });
    }
]);