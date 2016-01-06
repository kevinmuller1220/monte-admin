(function() {
  'use strict';

  angular
    .module('monte')
    .directive('mlSidebar', mlSidebar);

  function mlSidebar() {
    return {
      restrict: 'E',
      templateUrl: 'tpl/blank/partials/sidebar.html',
      replace: true
    };
  }

})();
