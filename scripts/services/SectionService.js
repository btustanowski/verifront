services.service("SectionService", [
    "$http",
    function ($http) {
        this.create = function (input) {
            return $http.post(C.api.url + "/sections", input);
        };

        this.update = function (input) {
            return $http.put(C.api.url + "/sections/" + input.id, input);
        };

        this.query = function () {
            return $http.get(C.api.url + "/sections", {});
        };

        this.get = function (input) {
            return $http.get(C.api.url + "/sections/" + input.section_id, {});
        };

    },
]);
