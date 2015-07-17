angular.module('photos').controller('PhotoslideshowCtrl',function($scope, album, $routeParams){

    $scope.activeId = $routeParams.id;
    $scope.album = album;

});