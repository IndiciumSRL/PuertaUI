angular.module('register', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate', 'restangular']);

angular.module('register').config(function($routeProvider) {

    $routeProvider.when('/register',{
        templateUrl: 'register/partial/register/register.html',
        controller: 'RegisterCtrl',
        resolve: {
            units: function(Restangular) {
                return Restangular.all('unit').getList();
            }
        }
    });
    /* Add New Routes Above */

});

