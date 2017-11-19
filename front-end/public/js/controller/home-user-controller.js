angular.module('bringmybeer')
.controller('HomeUserController', ['$scope', '$state', '$rootScope', 'productService', 'alertService','userService', 'SessionService',
	function($scope, $state, $rootScope, productService, alertService, userService, SessionService){
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

	
}])
