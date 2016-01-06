(function() {
  'use strict';

  angular
    .module('monte')
    .controller('TodoController', ['$scope', 'TodoService', TodoController]);

  function TodoController($scope, TodoService) {
    $scope.todoService = new TodoService($scope);
  }

})();
