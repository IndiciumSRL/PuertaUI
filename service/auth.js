angular.module('puerta').factory('auth',function($q, Restangular, Session, $log) {

	var auth = {};

  auth.login = function (credentials) {
    var delay = $q.defer();
    Restangular.all('auth').post(credentials)
      .then(
        function(data){
          Session.create(data.sessionId, data.id, data.role);
          delay.resolve(data);
    }, function(){
      delay.reject();
    });
    return delay.promise;
  };

  auth.logout = function () {
    var delay = $q.defer();
    Restangular.all('auth').remove()
      .then(
        function(data){
          Session.destroy();
          delay.resolve(data);
    }, function(){
      delay.reject();
    });
    return delay.promise;
  };
 
  auth.isAuthenticated = function () {
    return !!Session.userId;
  };
 
  auth.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (auth.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };

	return auth;
}).service('Session', function () {
  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
}).constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
}).constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
});