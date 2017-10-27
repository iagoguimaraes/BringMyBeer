angular.module('bringmybeer').controller('HomeUserController', ['$scope', 'SessionService', function($scope, SessionService, $location){
	
	$scope.logout = function(){
		SessionService.logout();
	}
}])