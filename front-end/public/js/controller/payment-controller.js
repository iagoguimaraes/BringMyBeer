angular.module('bringmybeer').controller('PaymentController', ['$scope', function($scope){
	$scope.type = 'Boleto';

	$scope.changePayment = function(){
		$scope.type === 'Boleto' ? $scope.type = 'Cartão de crédito' : $scope.type = 'Boleto';
	}


}]);