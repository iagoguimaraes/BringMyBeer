angular.module('bringmybeer').controller('LoginController', ['$scope', 'alertService', '$rootScope', '$state', 'cartService', 'userService', 
	function($scope, alertService, $rootScope, $state, cartService, userService){
	$scope.user = {};
	$scope.show = false;

	$scope.showPassword = function(){
		$scope.show = !$scope.show;
	}

	$scope.login = function(){
		userService.getUser($scope.user)
			.then(function(currentUser){
				if(!$rootScope.lastRoute.length) {  $rootScope.lastRoute = "home" };
				$state.go($rootScope.lastRoute);
			}).catch(function(error){
				alertService.setMessage(4000, error.message, error.title);
			});
	}
}]);