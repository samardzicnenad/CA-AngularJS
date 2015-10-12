'use strict';

angular.module('The Clash').directive('faceMe',function() {
    return {
        restrict: 'E',
        scope: {
            content: '='
        },
        templateUrl: 'scripts/directives/faceMe.html',
        link: function(scope, element) {
            scope.face_on = false,
            scope.button_text = "show face",
            scope.logo = element[0].parentNode.getElementsByTagName('img')[0].src,
            scope.face_me = function() {
                element.toggleClass('facing');
                if(scope.face_on) {
                    scope.button_text = "show face";
                    element[0].parentNode.getElementsByTagName('img')[0].src = scope.logo;
                    scope.face_on = false;
                } else {
                    scope.button_text = "hide face";
                    element[0].parentNode.getElementsByTagName('img')[0].src = 'http://localhost:9000/' + element[0].parentNode.getElementsByTagName('mug-shot')[0].innerText;
                    scope.face_on = true;
                }
            };
        }
    };
});
