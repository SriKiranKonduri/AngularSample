'use strict';

/**
 * @ngdoc function
 * @name startNextDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the startNextDevApp
 */
angular.module('startNextDevApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
