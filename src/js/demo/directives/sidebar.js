(function() {
  'use strict';

  angular
    .module('monte')
    .directive('mlSidebar', mlSidebar);

  function mlSidebar() {
    return {
      restrict: 'E',
      templateUrl: 'tpl/demo/partials/sidebar.html',
      replace: true
    };
  }

})();
