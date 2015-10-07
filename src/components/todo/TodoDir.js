module.exports = function TodoDir() {
    return {
        restrict: 'AE',
        template: require('./todo.html'),
        controller: 'TodoCtrl as todo',
        scope: {}
    };
};
