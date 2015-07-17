angular.module('puerta').directive('puertaTopNavBar', function() {
	return {
		restrict: 'E',
		replace: true,
    scope: true,
		templateUrl: 'directive/puertaTopNavBar/puertaTopNavBar.html',
		link: function(scope, element, attrs, fn) {


		},
    controller: function($scope, $log, $window, auth, $rootScope, AUTH_EVENTS, $location) {
      $scope.doLogin = function(credentials) {
        auth.login(credentials).then(function (user) {
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $scope.setCurrentUser(user);
        }, function () {
          $window.alert('Invalid user or password.');
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
      };

      $scope.doLogout = function() {
        auth.logout().then(
          function() {
            $scope.setCurrentUser(undefined);
            $location.path('#/');
          },
          function() {

          }
        );
      };
    }
	};
});
