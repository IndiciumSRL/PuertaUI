angular.module('photos').controller('PhotocommentsCtrl',function($scope, comments, Restangular){
    $scope.comments = comments;

    $scope.addComment = function() {
        var comment = Restangular.one('album/photo', $scope.comments.id).all('comment');
        comment.post({'comment': $scope.comment}).then(
            function() {

            },
            function() {

            }
        );
    };

});