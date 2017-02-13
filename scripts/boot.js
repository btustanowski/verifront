var C = $.extend(JSON.parse(localStorage.getItem('C')) || {
        debug: true,
        ajaxOverride: false,
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