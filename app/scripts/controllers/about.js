'use strict';

/**
 * @ngdoc function
 * @name startNextDevApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the startNextDevApp
 */
angular.module('startNextDevApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
