angular.module('bringmybeer').controller('CheckoutController', function($scope, cartService, $rootScope, $window){
	$scope.increment = function(p){
		p.quantity++;
		cartService.getTotal();
	}

	$scope.decrement = function(p){
		if(p.quantity)
			p.quantity--;
		cartService.getTotal();
	}

	$scope.getTotal = function(product){
		if(product.quantity < 0 ) { product.quantity = 0; }
		cartService.getTotal();
	}

	$scope.back = function(){
		$window.history.back();
	}


})