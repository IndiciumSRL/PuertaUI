angular.module('admin').controller('AdminphotosCtrl',function(albums, $scope, $log, Upload){

    $scope.albums = albums;

    $scope.upload = function(albumId, $files) {
        $scope.uploadErrors = [];
        var myfiles = $files;
        function uploadFile($file) {
            $scope.uploading = true;
            $scope.progress = 0;
            Upload.upload({
                'url': '/api/v1/album/'+albumId,
                file: $file
            }).success(function(){
                if (myfiles.length >= 1) {
                    var file = myfiles.splice(0,1);
                    uploadFile(file);
                } else {
                    $scope.uploading = false;
                }
            }).progress(function(evt) {
                $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
            }).error(function(data, status, headers, config){
                $scope.uploadErrors.push($file[0].name);
                if (myfiles.length >= 1) {
                    uploadFile(myfiles.splice(0,1));
                } else {
                    $scope.uploading = false;
                }
            });
        }

        if ($files.length >= 1) {
            var file = myfiles.splice(0,1);
            uploadFile(file);
        }

    };

});