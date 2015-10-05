'use strict';

/**
 * @ngdoc function
 * @name theBestSellersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theBestSellersApp
 */
angular.module('theBestSellersApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
