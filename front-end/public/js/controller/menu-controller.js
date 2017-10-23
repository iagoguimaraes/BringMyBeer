angular.module('bringmybeer').controller('MenuController', function($scope, $rootScope, cartService, productService, $location){
	// $scope.total = 0;
	$scope.searchDesc = '';
	$scope.productSearch = []
	$scope.test = function() {
		// $scope.total = cartService.getTotal();
	}

	$scope.removeProduct = function(product) {
		cartService.removeProduct(product);
	}

	$scope.searchField = function() {
		if(!$scope.searchDesc) { return;}
		productService.getDesc($scope.searchDesc)
					  .then(function(products){
					  	$scope.productSearch = products
					  	console.log(products)
					  }).catch(function(errors){
					  	console.log(errors.message);
					  });
	}

	$scope.goToDetail = function(path) {
		$location.path('/product/detail/'+path);
		$scope.showList = false;
	}	

	$scope.teste = function() {
		$scope.showList = false;
	}
});