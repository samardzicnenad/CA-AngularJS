'use strict';

angular.module('The Clash').directive('bandMember', function() {
  return {
    restrict: 'E',
    scope: {
        member: '=' 
    },
    templateUrl: 'scripts/directives/bandMember.html'
  };
});
