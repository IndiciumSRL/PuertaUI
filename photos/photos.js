angular.module('photos', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate', 'akoenig.deckgrid', 'restangular']);

angular.module('photos').config(function($routeProvider) {

    $routeProvider.when('/photos',{
        templateUrl: 'photos/partial/photosAlbums/photosAlbums.html',
        controller: 'PhotosalbumsCtrl',
        resolve: {
            albums: function(Restangular) {
                return Restangular.all('album').getList();
            }
        }
    });

    $routeProvider.when('/photos/:id',{
        templateUrl: 'photos/partial/photoAlbum/photoAlbum.html',
        controller: 'PhotoalbumCtrl',
        resolve: {
            album: function(Restangular, $route) {
                return Restangular.one('album', $route.current.params.id).get();
            }
        }
    });
    $routeProvider.when('/photos/view/:albumId/:id?',{
        templateUrl: 'photos/partial/photoSlideshow/photoSlideshow.html',
        controller: 'PhotoslideshowCtrl',
        resolve: {
            album: function(Restangular, $route) {
                return Restangular.one('album', $route.current.params.albumId).get();
            }
        }
    });
    $routeProvider.when('/photos/comments/:id',{
        templateUrl: 'photos/partial/photoComments/photoComments.html',
        controller: 'PhotocommentsCtrl',
        resolve: {
            comments: function(Restangular, $route) {
                return Restangular.one('album/photo', $route.current.params.id).one('comment').get();
            }
        } 
    });
    /* Add New Routes Above */

});

