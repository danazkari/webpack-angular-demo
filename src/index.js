require('angular');
require('angular-animate');
require('angular-touch');
require('angular-aria');
require('angular-material');

var app = angular.module('todoApp', [
            'ngAnimate',
            'ngTouch',
            'ngAria',
            'ngMaterial'
        ]),
    topNode = document.getElementById('todo-app');

require('./components')(app);

angular.element(topNode).ready(function() {
    angular.bootstrap(topNode, [app.name]);
});
