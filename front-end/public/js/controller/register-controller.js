angular.module('bringmybeer').controller('RegisterController', ['$scope', 'userService', '$rootScope', 'alertService', '$state', '$filter',
	function($scope, userService, $rootScope, alertService, $state, $filter){
	$scope.show = false;
	$scope.user = {
		nome: "miqueas",
		sobrenome: "Batista dos santos",
		senha: "miqueas24689",
		email: "miqueas.bsantos@gmail.com",
		telefone: 1199999999,
		celular: 1199999999,
		cpf: "12345678911",
		dataNascimento: "21/04/1996",
		dataCadastro: Date.now(),
		enderecos: []
	};
	$scope.enderecos = {};

	$scope.keepup = function (){
		$scope.show = !$scope.show
	}

	$scope.submit = function(){
		var date = $scope.user.dataNascimento.split("/");
		$scope.user.dataNascimento = Date.parse(new Date(date[2] + "-" + date[1] + "-"  + date[0] + "T00:00:00"));
		userService.saveUser($scope.user)
				   .then(function(user){
				   		$rootScope.lastRoute.length ? $rootScope.lastRoute : $rootScope.lastRoute = "user-cart";
				   		$state.go($rootScope.lastRoute);
				   },function(error){
				   		alertService.setMessage(7000, error.message, error.title);
				   })
	}

	$scope.getAddress = function(address){
		userService.getAddres($scope.enderecos.cep)
					  .then(function(address){
					  	$scope.enderecos = {
					  		cep: 04844150,//server side has to be String
					  		logradouro: address.logradouro,
					  		bairro: address.bairro,
					  		cidade: address.localidade,
					  		estado: address.uf
					  	}
					  	$scope.user.enderecos.push($scope.enderecos);
					  }).catch(function(error){
					  	alertService.setMessage(7000, error.message, error.title);
					  	console.log(error)
					  });
	}


}]);