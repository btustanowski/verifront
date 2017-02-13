(function() {
    // The Depot
    var D = angular.extend(
        JSON.parse(localStorage.getItem("C")) || {
            debug: true,
            locale: "",
            api: {
                url: "//" + window.location.hostname + "/api",
            },
            user: {},
        }, {
            save: function() {
                localStorage.setItem("D", JSON.stringify(D));
            },
            load: function() {
                D = JSON.parse(localStorage.getItem("D"));
            },
        }
    );
    window.D = D;
    window.cookieconsent_options = {
        "message": "Verifront wykorzystuje ciasteczka aby zapewnić Państwu najwyższą jakość przeglądania.",
        "dismiss": "Rozumiem",
        "learnMore": "more",
        "link": null,
        "theme": "dark-bottom",
    };
})();
