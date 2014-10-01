'use strict';

/**
 * @ngdoc overview
 * @name startNextDevApp
 * @description
 * # startNextDevApp
 *
 * Main module of the application.
 */
angular
  .module('startNextDevApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
