'use strict';

angular.module('Superheroes').service('comicVine', ['apiKey', '$http', '$q', function(apiKey, $http, $q) {
    this.getData = function(domain, filter){
        var deferred = $q.defer();
        apiKey.get()
        .then(function(result){
            return $http.jsonp('http://www.comicvine.com/api/'+domain+'/?api_key='+result.data.cv_api_key+'&format=jsonp&json_callback=JSON_CALLBACK&'+filter)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });
        });
        return deferred.promise;
    };
    this.search = function(criteria){
        var deferred = $q.defer();
        apiKey.get()
        .then(function(result){
            return $http.jsonp('http://api.comicvine.com/search/?api_key='+result.data.cv_api_key+'&format=jsonp&json_callback=JSON_CALLBACK&'+criteria)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });
        });
        return deferred.promise;
    };
}]);
