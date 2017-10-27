angular.module('bringmybeer').controller('ProductController', function($scope, $routeParams, productService, cartService, $rootScope, $location, cartService){
	$scope.product = {};
	$scope.itemPerPage = 6;
	$scope.orderByCustom = ['category', 'name'];
	$rootScope.productList = [];

	productService.getProducts()
				  .then(function(data){
				  	$scope.product = data.filter(function(product){
				  		if(product._id===$routeParams.id){
				  			return product;
				  		}
				  	})[0];
				  	$scope.loadFamily();
				  }).catch(function(error){
				  	console.log(error.message);
				  	$location.path('/home');
				  })

	$scope.loadFamily = function(){
		if($scope.product.category){
			productService.getProducts()
				  .then(function(productList){
				  	var ps = productList.filter(function(p){
				  		if(p.category===$scope.product.category && p._id!=$scope.product._id)
				  			return p;
				  	});
				  	$scope.orderByCategory(ps);
				  }).catch(function(errors){
				  	console.log(errors);
				  });
		}
	}

	$scope.prevent = function(e){
		event.preventDefault();
	}

	$scope.addProduct = function(product) {
		cartService.addProduct(product);
	}

	$scope.buy = function(product) {
		cartService.addProduct(product);
		$location.path( '/checkout' );
	}


	$scope.goToDetail = function ( path ) {
	  $location.path( '/product/detail/'+path );
	};


	$scope.orderByCategory = function(productList) {
		var test = [];
  		test.push({ category: $scope.product.category, productList: [] });
	  	productList.forEach(function(p){
	  		for(var i in test){
	  			if(p.category===test[i].category){
	  				test[i].productList.push(p);
	  			}
	  		}
	  	});
	  	$rootScope.productList = test;
	}


})