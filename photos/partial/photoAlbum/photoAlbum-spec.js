describe('PhotoalbumCtrl', function() {

	beforeEach(module('photos'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('PhotoalbumCtrl', {$scope: scope});
    }));	
});