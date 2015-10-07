module.exports = function TodoCtrl ($rootScope) {
    var vm = this;
    if(!$rootScope.list) {
        $rootScope.list = [];
    }
    
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    vm.tasksDone = $rootScope.list.filter(function(task) {
        return task.done;
    }).length;

    // Adds a new task.
    vm.addEntry = function() {
        $rootScope.list.push({
            id: guid(),
            text: vm.taskText,
            done: false
        });
        vm.taskText = "";
    };
};
