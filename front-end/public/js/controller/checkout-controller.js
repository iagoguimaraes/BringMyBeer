angular.module('bringmybeer').controller('CheckoutController', function($scope, cartService, $rootScope, $window, $state){
	$scope.increment = function(p){
		p.quantidade++;
		cartService.getTotal();
	}

	$scope.decrement = function(p){
		if(p.quantidade)
			p.quantidade--;
		cartService.getTotal();
	}

	$scope.removeProduct = function(product) {
		cartService.removeProduct(product);
	}

	$scope.getTotal = function(product){
		if(product.quantidade < 0 ) { product.quantidade = 0; }
		cartService.getTotal();
	}

	$scope.back = function(){
		$window.history.back();
	}
	
	$scope.goTo = function(path){
		$state.go(path);
	}	

})