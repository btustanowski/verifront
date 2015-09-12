// localstorage-persistent object warehouse
var C = $.extend(JSON.parse(localStorage.getItem('C')) || {
        debug: true,
        locale: '',
        api: {
            url: '//' + window.location.hostname + '/api'
        },
        user: {}
    }, {
    save: function() {
        localStorage.setItem('C', JSON.stringify(C));
    },
    load: function() {
        C = JSON.parse(localStorage.getItem('C'));
    }
});

window.cookieconsent_options = {"message":"Verifront wykorzystuje ciasteczka aby zapewni? Pa?stwu najlepsz? jako?? przegl?dania.","dismiss":"Rozumiem","learnMore":"More info","link":null,"theme":"dark-bottom"};