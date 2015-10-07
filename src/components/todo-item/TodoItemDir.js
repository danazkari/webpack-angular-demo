module.exports = function TodoItemDir() {
    return {
        restrict: 'AE',
        controller: 'TodoItemCtrl as todoItem',
        template: require('./todo-item.html'),
        scope: {
            task: '='
        }
    };
};

