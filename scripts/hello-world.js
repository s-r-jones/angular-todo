angular.module("todoListApp") // no second param so angular looks for already existing app
.directive('helloWorld', function(){
	return {
		template: "This is the hello World directive",
		restrict: "E"

	};
});