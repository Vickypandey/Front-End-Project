


'use strict';

angular.module('MyApp', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
      })
      // .state('home', {
      //   url: '/home',
      //   templateUrl: 'partials/modal-form.html',
      //   controller: 'HomeCtrl'
      // })
     
     

    $urlRouterProvider.otherwise('/home');

    

  });
