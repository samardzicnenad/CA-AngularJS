'use strict';

angular.module('theClash').directive('bandMember', function() {
  return {
    restrict: 'E',
    scope: {
        member: '=' 
    },
    templateUrl: 'scripts/directives/bandMember.html'
  };
});
