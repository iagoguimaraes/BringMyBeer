angular.module('bringmybeer')
.controller('AddressController', ['addressService', '$rootScope', '$scope', 'alertService', 'SessionService',
	function(addressService, $rootScope, $scope, alertService, SessionService){
	
	$scope.newAddress = {};
	$scope.test = [];

	$scope.insertAddress = function(address){
		var user = {
			idCliente: SessionService.getSession().idCliente,
			enderecos: [address]
		}
		addressService.insertAddress(user)
					  .then(function(message){
					  	alertService.setMessage(7000, message.message, message.title);
					  	$scope.newAddress = {};
					  }).catch(function(error){
					  	alertService.setMessage(7000, error.message, error.title);
					  });
	}


	$scope.updateAddress = function(address){
		addressService.updateAddress(address)
			  .then(function(message){
			  	alertService.setMessage(7000, message.message, message.title);
			  }).catch(function(error){
			  	alertService.setMessage(7000, error.message, error.title);
			  });
	}

	$scope.removeAddrees = function(address){
		addressService.removeAddrees(address)
					  .then(function(message){
					  	alertService.setMessage(7000, message.message, message.title);
					  }).catch(function(message){
					  	alertService.setMessage(7000, message.message, message.title);
					  });
	}

	$scope.getAddress = function(ad, index){
		addressService.getAddres(ad.cep)
					  .then(function(address){
					  	// console.log(index);
					  	if(index>=0){
						  	$rootScope.user.enderecos[index].logradouro = address.logradouro;
						  	$rootScope.user.enderecos[index].bairro = address.bairro;
						  	$rootScope.user.enderecos[index].cidade = address.localidade;
						  	$rootScope.user.enderecos[index].estado = address.uf;
					  	} else {
					  		$scope.newAddress.logradouro = address.logradouro;
					  		$scope.newAddress.bairro = address.bairro;
					  		$scope.newAddress.cidade = address.localidade;
					  		$scope.newAddress.estado = address.uf;
					  	}
					  	// console.log($rootScope.user.enderecos[index], address);
					  }).catch(function(error){
					  	alertService.setMessage(7000, error.message, error.title);
					  	console.log(error);
					  });
	}

}])