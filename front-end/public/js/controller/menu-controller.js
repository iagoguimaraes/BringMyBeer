angular.module('bringmybeer').controller('MenuController', function($scope, $rootScope, cartService){
	
	$scope.test = function(product) {
		// console.log($rootScope.products)
	}

	$scope.removeProduct = function(product) {
		cartService.removeProduct(product);
	}
});