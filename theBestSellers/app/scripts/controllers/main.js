'use strict';

/**
 * @ngdoc function
 * @name theBestSellersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theBestSellersApp
 */
angular.module('theBestSellersApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
