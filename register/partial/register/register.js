angular.module('register').controller('RegisterCtrl',function($scope, Restangular, units){

    $scope.formData = {};
    $scope.formData.children = [{}];
    $scope.units = units;

    $scope.addChild = function() {
        $scope.formData.children.push({});        
    };

    $scope.removeChild = function(index) {
        $scope.formData.children.splice(index, 1);
    };

    $scope.subscribe = function() {
        Restangular.all('register').post($scope.formData)
            .then(
                function() {

                },
                function() {

                }
        );
    };

});