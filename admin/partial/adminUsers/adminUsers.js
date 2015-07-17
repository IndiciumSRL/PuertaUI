angular.module('admin').controller('AdminusersCtrl',function($scope, users, sweetAlert, $route){
    $scope.users = users;

    $scope.remove = function(user) {
        sweetAlert.swal(
            {  
                title: 'Seguro?',  
                text: 'Estás seguro que deseas borrar a '+user.fullname+'?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, borrálo!',
                closeOnConfirm: false
            }, function() {
                sweetAlert.swal.disableButtons();
                user.remove().then(
                    function() {
                        sweetAlert.swal('Borrado!', 'Usuário borrado.', 'success');
                        $route.reload();
                    },
                    function() {
                        sweetAlert.swal('Error!', 'No se pudo borrar usuário.', 'error');
                    }
                );
            }
        );
    };

    $scope.changeRole = function(user) {
        var options = '';
        _.each(['admin', 'guest'], function(role){
            if (user.role === role) {
                options += '<option selected="selected">'+role+'</option>';
            } else {
                options += '<option>'+role+'</option>';
            }
        });
        sweetAlert.swal({
            title: 'Seleccione el permiso',
            html: '<form id="roleSelectionForm"><div class="form-group"><label class="control-label" for="role">Permisos:</label><select class="form-control" name="role" required>'+options+'</select></div></form>',
            showCancelButton: true,
            closeOnConfirm: false
        }, function() {
            user.role = $('form#roleSelectionForm select').val();
            user.save().then(
                function() {
                    sweetAlert.swal('Permiso', 'Permiso modificado.');
                    $route.reload();
                },
                function() {
                    sweetAlert.swal('Error', 'Permiso no pudo ser modificado.', 'error');
                    $route.reload();
                }
            );
            
        });

    };

    $scope.toggleApprove = function(user) {
        user.post().then(
            function() {
                var text = 'Usuário deshabilitado.';
                if (!user.approved) {
                    text = 'Usuário habilitado.';
                }
                
                sweetAlert.swal('Inscripción', text, 'success');
                $route.reload();
            },
            function() {
                sweetAlert.swal('Error!', 'No se pudo modificar usuário.', 'error');
            }
        );
    };
});