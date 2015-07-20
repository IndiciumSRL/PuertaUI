angular.module('register').controller('RegisterCtrl',function($scope, Restangular, units, sweetAlert, $location){

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
                    sweetAlert.swal('Inscripto!', 'Estás "casi" inscripto! Esperá que un administrador corroborre tus datos y te de de alta!', 'success');
                    $location.path('/');
                },
                function() {
                    sweetAlert.swal('Error!', 'Ya estarás inscripto?', 'error');
                }
        );
    };

});