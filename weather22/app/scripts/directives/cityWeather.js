'use strict';

angular.module('Weather 22').directive('cityWeather', function() { 
    return { 
        restrict: 'E', 
        scope: { 
            info: '=' 
        }, 
        templateUrl: 'scripts/directives/cityWeather.html' 
    }; 
});
