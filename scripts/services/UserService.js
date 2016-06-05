services.service("UserService", [
    "$http", "$rootScope",
    function ($http, $rootScope) {
        this.login = function (input) {
            return $http.post(C.api.url + "/users/login", input);
        };

        this.register = function (input) {
            return $http.post(C.api.url + "/users/register", input);
        };

        this.create = function (input) {
            return $http.post(C.api.url + "/users", input);
        };

        this.activate = function (input) {
            return $http.post(C.api.url + "/users/activate", input);
        };

        this.logout = function () {
            return $http.post(C.api.url + "/users/logout", {});
        };

        this.check = function () {
            return $http.get(C.api.url + "/users/check", {});
        };

        this.query = function () {
            return $http.get(C.api.url + "/users", {});
        };

        this.get = function (input) {
            return $http.get(C.api.url + "/users/" + input.user_id, {});
        };

        this.check().success(function (user) {
            C.user = user;
            C.save();
            $rootScope.$broadcast('reload');
        }).error(function (user) {
            C.user = user;
            C.save();
            $rootScope.$broadcast('reload');
        });
    },
]);
