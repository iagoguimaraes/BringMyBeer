angular.module('bringmybeer').controller('MenuController', function($scope, $rootScope, cartService, productService, $location, SessionService){
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

	$scope.goToUser = function() {
		if(!SessionService.getSession()){ 
			alert('Usuário não logado')
			$location.path('/login');
			return;
		}
		$location.path('/user-home');
	}

	$scope.teste = function() {
		$scope.showList = false;
	}
});