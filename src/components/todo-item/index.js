var TodoItemCtrl = require('./TodoItemCtrl'),
    TodoItemDir = require('./TodoItemDir');

require('./todo-item.scss');

module.exports = function TodoItemComponent(app) {
    app
        .controller('TodoItemCtrl', TodoItemCtrl)
        .directive('todoItem', TodoItemDir);
};
