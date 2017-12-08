angular.module('bringmybeer').controller('CheckoutController', function($scope, cartService, $rootScope, $window, $state, alertService){
	$scope.increment = function(p){
	    if(p.quantidadeEstoque > p.quantidade){
			p.quantidade++;
			cartService.getTotal();
	    }else {
	    	p.quantidade = p.quantidadeEstoque;
	    	alertService.setMessage(7000, "você atingiu a quantidade máxima de produto", "Estoque");
	    }
	}

	$scope.decrement = function(p){
		if(p.quantidade > 1)
			p.quantidade--;
		cartService.getTotal();
	}

	$scope.removeProduct = function(product) {
		cartService.removeProduct(product);
	}

	$scope.getTotal = function(p){
	    if(p.quantidadeEstoque > p.quantidade){
	    	p.quantidade < 1 ? p.quantidade = 1 : "" ;
			cartService.getTotal();
	    }else {
	    	p.quantidade = p.quantidadeEstoque;
	    	alertService.setMessage(7000, "você atingiu a quantidade máxima de produto", "Estoque");
	    }
	}

	$scope.back = function(){
		$window.history.back();
	}
	
	$scope.goTo = function(path){
		$state.go(path);
	}	

})