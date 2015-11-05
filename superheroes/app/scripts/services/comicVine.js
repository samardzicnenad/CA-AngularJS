'use strict';

angular.module('Superheroes').factory('comicVine', ['apiKey', '$http', '$q', function(apiKey, $http, $q) {
    var defer = $q.defer();
    apiKey.get()
    .then(function(result){
        return $http.jsonp('http://www.comicvine.com/api/characters/?api_key='+result.data.cv_api_key+'&format=jsonp&json_callback=JSON_CALLBACK&filter=name:magneto')
        .success(function(data) {
            defer.resolve(data);
        })
        .error(function(err) {
            defer.reject(err);
        });
    });
    return defer.promise;
}]);
