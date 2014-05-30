var toDoApp = angular.module('toDoControllers', []);

toDoApp.controller('ToDo', ['$scope', 'ToDoJson', function ($scope, ToDoJson) {
	$scope.todos = ToDoJson;
	$scope.toDone = [];

	$scope.clearDone = function () {
		var toDone = $scope.todos;
			
		$scope.todos = [];

		angular.forEach(toDone, function (todo) {
			if (!todo.complete) {
				$scope.todos.push(todo);
			} else {
				$scope.toDone.push(todo);
			}
		});
	};

	$scope.createTodo = function () {
		var date = new Date();
		$scope.todos.push({
			text: $scope.createToDoText,
			toDoBy: date.setTime(date.getTime() + (24 * 60 * 60 * 1000)),
			complete: false
		});
		console.log($scope.todos.length);
		$scope.createToDoText = '';
	};

	$scope.calculateOpenToDos = function () {
		var open = 0;
		angular.forEach($scope.todos, function(todo) {
			if (!todo.complete) {
				open += 1;
			}
		});

		return open;
	};
}]);