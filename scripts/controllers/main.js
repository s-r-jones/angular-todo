'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
	
	$scope.addTodo = function() {
		var newTodo = {name: "This is a new todo."};
		$scope.todos.unshift(newTodo);

	};

	dataService.getTodos(function(response){
		console.log(response.data);
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo) {
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
	};

	$scope.saveTodos = function() {
		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited) {
				return todo;
			};
		})
		dataService.saveTodos(todo);
	};
	
});