angular.module('puerta', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'ngCookies', 'restangular', 'admin', 'register', 'events', 'photos']);

angular.module('puerta').config(function($routeProvider, RestangularProvider) {

    $routeProvider.when('/',{templateUrl: 'partial/home/home.html'});
    $routeProvider.when('/about',{templateUrl: 'partial/about/about.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});
    RestangularProvider.setBaseUrl('/api/v1');

});

angular.module('puerta').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

angular.module('puerta').controller('ApplicationController', function($scope, $log, USER_ROLES, auth){
  
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = auth.isAuthorized;
 
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };

});