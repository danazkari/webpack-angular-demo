var TodoCtrl = require('./TodoCtrl'),
    TodoDir = require('./TodoDir');

require('./todo.scss');

module.exports = function TodoComponent(app) {
    app
        .controller('TodoCtrl', TodoCtrl)
        .directive('todo', TodoDir);
};
