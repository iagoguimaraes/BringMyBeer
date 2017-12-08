angular.module('bringmybeer')
.controller('HomeUserController', ['$scope', '$state', '$rootScope', 'productService', 'alertService','userService', 'SessionService', '$filter',
	function($scope, $state, $rootScope, productService, alertService, userService, SessionService, $filter){
	$scope.disable = true;
	$rootScope.user.dataNascimento = new Date($rootScope.user.dataNascimento);
	// $rootScope.user.dataNascimento = new Date(Date.UTC(2015, 0, 28, 4, 0, 0));
	// var date = new Date(Date.UTC(2015, 0, 28, 4, 0, 0));

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
