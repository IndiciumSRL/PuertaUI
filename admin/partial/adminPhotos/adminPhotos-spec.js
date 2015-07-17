describe('AdminphotosCtrl', function() {

	beforeEach(module('admin'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('AdminphotosCtrl', {$scope: scope});
    }));	

});