angular.module('admin').controller('AdminalbumformCtrl',function($scope, $log, album, $location){

    $scope.album = album;

    $scope.save = function() {
        album.save().then(
            function(){
                $location.path('/admin/photos');
        }, function() {
            $log.debug('Could not save the damn thing...');
        });
    };

});