angular.module('admin', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate', 'ngFileUpload', 'restangular', '19degrees.ngSweetAlert2']);

angular.module('admin').config(function($routeProvider) {

    $routeProvider.when('/admin',{templateUrl: 'admin/partial/adminMenu/adminMenu.html'});
    $routeProvider.when('/admin/events',{templateUrl: 'admin/partial/adminEvents/adminEvents.html'});
    
    $routeProvider.when('/admin/photos',
        {
            templateUrl: 'admin/partial/adminPhotos/adminPhotos.html',
            controller: 'AdminphotosCtrl', 
            resolve: {
                albums: function(Restangular, $log) {
                    return Restangular.all('album').getList();
                }
            }
        }
    );

    $routeProvider.when('/admin/photos/:id',{
        templateUrl: 'admin/partial/adminAlbumForm/adminAlbumForm.html',
        controller: 'AdminalbumformCtrl',
        resolve: {
            album: function(Restangular, $route) {
                if ($route.current.params.id === 'new') {
                    return Restangular.one('album');
                } else {
                    return Restangular.one('album').one($route.current.params.id);
                }
            }
        }
    });
    $routeProvider.when('/admin/users',{
        templateUrl: 'admin/partial/adminUsers/adminUsers.html',
        controller: 'AdminusersCtrl',
        resolve: {
            users: function(Restangular) {
                return Restangular.all('user').getList();
            }
        }
    });
    /* Add New Routes Above */

});

