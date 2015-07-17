describe('PhotoslideshowCtrl', function() {

	beforeEach(module('photos'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('PhotoslideshowCtrl', {$scope: scope});
    }));	


});