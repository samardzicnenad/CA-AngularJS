'use strict';

/*
Get your openweathermap API key at: http://openweathermap.org/appid
Then create a file on the following path:
    <your path>/CA-AngularJS/weather22/app/config/no_pasaran.json
as:
    {
        "owm_api_key": "<your openweathermap API key>"
    }

The id list (world's 22 most populated cities):
    id: 1796236 - Shanghai, CN
    id: 1174872 - Karachi, PK
    id: 1816670 - Beijing, CN
    id: 1792947 - Tianjin, CN
    id: 745044  - Istanbul, TR
    id: 2332459 - Lagos, NG
    id: 1850147 - Tokyo, JP
    id: 1809858 - Guangzhou, CN
    id: 1275339 - Mumbai, IN
    id: 524901  - Moscow, RU
    id: 1185241 - Dhaka, BD
    id: 360630  - Cairo, EG
    id: 3448439 - São Paulo, BR
    id: 1795565 - Shenzhen, CN
    id: 1835848 - Seoul, KR
    id: 1172451 - Lahore, PK
    id: 1642911 - Jakarta, ID
    id: 2314302 - Kinshasa, CD
    id: 3530597 - Mexico City, MX
    id: 3936456 - Lima, PE
    id: 5128581 - New York City, US
    id: 2643743 - London, GB
*/

angular.module('Weather 22').service('cities', ['apiKey', '$http', '$q', function(apiKey, $http, $q) {
    var deferred = $q.defer();
    apiKey.get()
    .then(function(result){
        return $http.get('http://api.openweathermap.org/data/2.5/group?id=1796236,\
                                                                          1174872,\
                                                                          1816670,\
                                                                          1792947,\
                                                                          745044,\
                                                                          2332459,\
                                                                          1850147,\
                                                                          1809858,\
                                                                          1275339,\
                                                                          524901,\
                                                                          1185241,\
                                                                          360630,\
                                                                          3448439,\
                                                                          1795565,\
                                                                          1835848,\
                                                                          1172451,\
                                                                          1642911,\
                                                                          2314302,\
                                                                          3530597,\
                                                                          3936456,\
                                                                          5128581,\
                                                                          2643743&units=metric&appid='+result.data.owm_api_key)
        .success(function(data) {
            deferred.resolve(data);
        })
        .error(function(err) {
            deferred.reject(err);
        });
    });
    return deferred.promise;
}]);
