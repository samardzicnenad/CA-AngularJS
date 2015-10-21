'use strict';

angular.module('Alphabet').factory('letters', ['$http', function($http) {
    return $http.get('data/letters.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
