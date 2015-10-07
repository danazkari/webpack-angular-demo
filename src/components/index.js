module.exports = function(app) {
    require('./todo')(app);
    require('./todo-item')(app);
};
