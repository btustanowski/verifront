services.service("RuleService", [
    "$http",
    function ($http) {
        this.create = function (input) {
            return $http.post(C.api.url + "/rules", input);
        };

        this.update = function (input) {
            return $http.put(C.api.url + "/rules/" + input.id, input);
        };

        this.query = function () {
            return $http.get(C.api.url + "/rules", {});
        };

        this.get = function (input) {
            return $http.get(C.api.url + "/rules/" + input.rule_id, {});
        };

    },
]);
