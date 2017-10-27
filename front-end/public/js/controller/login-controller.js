angular.module('bringmybeer').controller('LoginController', ['$scope', 'SessionService', '$location', '$rootScope', function($scope, SessionService, $location, $rootScope){

	$scope.show = false;

	$scope.showPassword = function(){
		$scope.show = !$scope.show;
	}

	$scope.login = function(){
		SessionService.setUserAuthenticated();
		var r = $rootScope.lastRoute.toString().split("/");
		if(SessionService.getSession()){
			r[r.length-1].length ? $location.path(r[r.length-1]) : $location.path('/user-home');
			// $location.path('/checkout');
		}
	}
}]);