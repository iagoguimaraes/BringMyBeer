angular.module('bringmybeer').controller('HomeController', function(productService, $scope, $routeParams, cartService, $rootScope, $location){
	$rootScope.productList = []
	$scope.price = 500;
	$scope.off = false;
	$scope.sale = false;
	$scope.category = 'all';

	var params = {
		category: $scope.category,
		price: $scope.price,
		off: $scope.off,
		sale: $scope.sale
	}


	$scope.goToDetail = function ( path ) {
	  $location.path( '/product/detail/'+path );
	};

	$scope.all = function(){
			params.category = $scope.category = 'all';
			params.price = $scope.price = 500;
			params.off = $scope.off = false;
			params.sale = $scope.sale = false;
			$scope.searchFilter();
	}


	$scope.categoryF = function(cat){
		params.category = cat;
		$scope.searchFilter();
	}

	$scope.searchFilter = function(){
		productService.searchFilter(params)
						  .then(function(productList){
				                $rootScope.productList = productList;
						  }).catch(function(errors){
						  	console.log(errors.message);
						  });
	}
	
	$scope.searchByPrice= function(){
		params.price = $scope.price;
		$scope.searchFilter();
	}

	$scope.saleChange = function(){
		params.sale = $scope.sale;
		$scope.searchFilter();
	}

	$scope.offChange = function(){
		params.off = $scope.off;
		$scope.searchFilter();
	}

	if($routeParams.list){
		params.category = $routeParams.list;
		$scope.searchFilter();
	} else {
		productService.getProducts()
			  .then(function(productList){
			  	$rootScope.productList = productList;
			  }).catch(function(errors){
			  	console.log(errors);
			  });
	}

	$scope.addProduct = function(product) {
		cartService.addProduct(product);
	}


	$scope.cleanFilter = function(){
		params.category = $scope.category = 'all';
		params.price = $scope.price = 500;
		params.off = $scope.off = false;
		params.sale = $scope.sale = false;
		$scope.searchFilter();
	}

});