'use strict';

angular.module('Alphabet').directive('youtube', function($sce) {
    return {
        restrict: 'E',
        scope: {
            video: '=' 
        },
        templateUrl: 'scripts/directives/youtube.html',
        link: function (scope) {
            scope.$watch('video', function (video_code) {
                if (video_code) {
                    scope.video_url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + video_code);
                }
            });
        }
    };
});
