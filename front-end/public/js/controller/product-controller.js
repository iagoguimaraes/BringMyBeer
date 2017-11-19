angular.module('bringmybeer').controller('ProductController', 
	function($scope, productService, cartService, $rootScope, cartService, $stateParams, $state, alertService){
	$scope.product = {};
	$scope.itemPerPage = 6;
	$scope.orderByCustom = ['tipo', 'produto'];
	$rootScope.productList = [];

	productService.getProduct($state.params.id)
				  .then(function(data){
				  	$scope.product = data;
				  	$scope.loadFamily();
				  }).catch(function(error){
				  	alertService.setMessage(7000, error.message, error.title)
				  	// $location.path('/home');
				  })

	$scope.loadFamily = function(){
		productService.getCategory($scope.product.tipo.tipo)
			  .then(function(productList){
			  	productList.splice(productList.indexOf($scope.product, 1));
			  	$scope.orderByCategory(productList);
			  }).catch(function(error){
			  	alertService.setMessage(7000, error.message, error.title)
			  });
	}

	$scope.prevent = function(e){
		event.preventDefault();
	}

	$scope.addProduct = function(product) {
		cartService.addProduct(product);
	}

	$scope.buy = function(product) {
		var insert = true;
		$rootScope.products.forEach(function(p, i){
			if(p.idProduto===product.idProduto){
				insert = false;
			}
		});
		if(insert){
			cartService.addProduct(product);
		}
		$state.go('checkout');
	}


	// $scope.goToDetail = function ( path ) {
	//   $state.go( 'product-detail', {id: path});
	// };


	$scope.orderByCategory = function(productList) {
	  	$rootScope.productList.push({ category: $scope.product.tipo['tipo'], productList: productList });
	}
})