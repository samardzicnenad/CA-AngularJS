'use strict';

angular.module('Weather 22').factory('apiKey', ['$http', function($http) {
    function get() {
        return $http.get('config/no_pasaran.json');
    }
    return {
        get: get
    };
}]);
