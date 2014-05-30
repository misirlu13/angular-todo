var toDoApp = angular.module('toDoServices', []);

toDoApp.factory('ToDoJson', function ($http) {
	return [
		{
			"text": "Create an index file",
			"toDoBy": new Date(),
			"complete": true
		},
		{
			"text": "Create an app.js file",
			"toDoBy": new Date(),
			"complete": true
		},
		{
			"text": "Create a controllers.js file",
			"toDoBy": new Date(),
			"complete": true
		},
		{
			"text": "Create a services.js file",
			"toDoBy": new Date(),
			"complete": true
		},
		{
			"text": "Create a filters.js file",
			"toDoBy": new Date(),
			"complete": true
		},
		{
			"text": "Run the application",
			"toDoBy": new Date(),
			"complete": false
		},
		{
			"text": "Create a new todo",
			"toDoBy": new Date(),
			"complete": false
		},
		{
			"text": "......",
			"toDoBy": new Date(),
			"complete": false
		},
		{
			"text": "Profit",
			"toDoBy": new Date(),
			"complete": false
		}
	];
});