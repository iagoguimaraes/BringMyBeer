angular.module('bringmybeer').controller('RegisterController', ['$scope', 'productService', '$rootScope', function($scope, productService, $rootScope){
	$scope.show = false;
	$scope.user = {};

	$scope.keepup = function (){
		$scope.show = !$scope.show
	}


	$scope.submit = function(){
		console.log($scope.user);
	}

	$scope.getAddress = function(){

		productService.getAddres($scope.user.address.cep)
					  .then(function(address){
					  	$scope.user.address.street = address.logradouro;
					  	$scope.user.address.complement = address.complemento;
					  	$scope.user.address.neighborhood = address.bairro;
					  	$scope.user.address.city = address.localidade;
					  	$scope.user.address.state = address.uf;
					  }).catch(function(error){
					  	console.log(error.message);
					  });
	}


}]);