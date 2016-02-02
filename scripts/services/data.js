'use strict';

angular.module('todoListApp')
//services methods
.service('dataService', function($http) {

	this.getTodos = function(callback) {
		$http.get('mock-data/todos.json')
		.then(callback) 
	};

	this.deleteTodo = function(todo) {
		console.log(todo.name + " is deleted from the list")
	};

	this.saveTodos = function(todo) {
		console.log(todo.name + " is saved on the list")
	};

});