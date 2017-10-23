angular.module('bringmybeer').controller('ProductController', function($scope, $routeParams, productService, cartService){

	$scope.product = {};

	productService.getProducts()
				  .then(function(data){
				  	$scope.product = data.filter(function(product){
				  		if(product._id===$routeParams.id){
				  			return product;
				  		}
				  	})[0];

				  }).catch(function(error){
				  	console.log(error.message)
				  })

	$scope.prevent = function(e){
		event.preventDefault();
	}

	$scope.addProduct = function() {
		cartService.addProduct($scope.product)
	}
})