'use strict';

angular.module('theClash').directive('faceMe',function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'scripts/directives/faceMe.html',
        link: function(scope, element) {
            scope.face_me = function() {
                element.toggleClass('facing');
            };
        }
    };
});
