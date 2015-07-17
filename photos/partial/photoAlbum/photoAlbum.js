angular.module('photos').controller('PhotoalbumCtrl',function($scope, album, $log, Restangular, sweetAlert){

    $scope.album = album;
    $scope.photos = album.photos;

    $scope.likeToggle = function(photo) {
        var restPhoto = Restangular.one('album/photo', photo.id);
        restPhoto.liked = !photo.liked;

        restPhoto.save().then(
            function(data) {
                photo.liked = data.liked;
                photo.likes_count = data.likes_count;
            },
            function() {
                sweetAlert.swal('Error', 'Perdón, no se pudo realizar la operación!', 'error');
            }
        );
    };

});