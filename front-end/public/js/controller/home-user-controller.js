angular.module('bringmybeer')
.controller('HomeUserController', ['$scope', 'SessionService', '$state', '$rootScope', 'productService', 'alertService','userService', '$rootScope', 'addressService',
	function($scope, SessionService, $state, $rootScope, productService, alertService, userService, $rootScope, addressService){
	$scope.disable = true;
	
	$scope.logout = function(){
		SessionService.logout();
	}

	$scope.goTo = function(name){
		$state.go(name);
	}

	$scope.open = function(){
		$('nav.side-navbar').toggleClass("open")
	}	

	$scope.close = function(){
		$('nav.side-navbar').removeClass("open")
	}
	

	$scope.updateUser = function(user){
		if($scope.disable){
			$scope.disable = !$scope.disable;
			return;
		}
		userService.updateUser(user)
				   .then(function(user){
				   		alertService.setMessage(7000, user.message, user.title);
				   }, function(error){
				   		alertService.setMessage(7000, error.message, error.title);
				   });
		$scope.disable = !$scope.disable;
	}

	$scope.searchOrders = function(){
		
	}

	$scope.openList = function(list, event){
		$scope.list = list;
		var _class = (event.currentTarget.className).replace(" ", " .").split(" ");
		$('.lines').removeClass("bg-dark");
		$(_class[1]).addClass("bg-dark");
	}

	if($rootScope.orders.length === 0){
		$scope.searchOrders();
	}

	$scope.totalList = function(list){
		var total = 0;
		list.forEach(function(product){
			total += product.price * product.quantity;
		});

		return total;
	}

	$scope.cleanList = function(){
		$scope.list = [];
		$('.lines').removeClass("bg-dark");
	}
}])
