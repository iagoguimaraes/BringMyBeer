angular.module('bringmybeer').controller('CheckoutController', function($scope, cartService, $rootScope){
	$scope.increment = function(p){
		p.quantity++;
		cartService.getTotal();
	}

	$scope.decrement = function(p){
		if(p.quantity)
			p.quantity--;
		cartService.getTotal();
	}




})