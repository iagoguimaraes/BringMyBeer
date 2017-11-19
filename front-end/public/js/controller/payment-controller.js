angular.module('bringmybeer').controller('PaymentController', ['$scope', 'productService', 'SessionService', 'cartService', '$rootScope', 'alertService', "$state",
	function($scope, productService, SessionService, cartService, $rootScope,alertService, $state){
	$scope.type = 'Boleto';
	$scope.editAddress = false;
	$scope.currentAddress = {};

	$scope.changePayment = function(){
		$scope.type === 'Boleto' ? $scope.type = 'Cartão de crédito' : $scope.type = 'Boleto';
	}

	$scope.buy = function(){

		var infoBuy = {
				"data": Date.now(),
			    "confirmado": false,
			    "cancelado": false,
			    "items": $rootScope.products.map(function(item){
			    	return{
			    		produto: { produto: item.produto, idProduto: item.idProduto, preco: item.preco },
			    		quantidade: item.quantidade,
			    		preco: item.price
			    	}
			    }),
			    "formaPagamento": { idFormaPagamento: $scope.type === 'Boleto' ? 1 : 2},
			    "cliente": {idCliente: SessionService.getSession().idCliente},
			    "endereco": $scope.currentAddress
		}

		if(!$scope.currentAddress.idEndereco){
			alertService.setMessage(7000, "Selecione um endereço para entrega", "Endereço");
			return;
		}

		console.log(infoBuy);
		productService.buy(infoBuy)
					  .then(function(data){
					  	alertService.setMessage(7000, "realizada com sucesso", "Compra");
					  	$state.go("user-orders");
					  	cartService.clearAll();
					  }).catch(function(error){
					  	alertService.setMessage(7000, error.message, error.title);
					  	console.log(error.error)
					  });
		// $state.go(path);
	}

	$scope.edit = function(){
		$scope.editAddress = !$scope.editAddress;
	}

	$scope.selectecAddress = function(address){
		$rootScope.user.enderecos.forEach(function(p){
			p.principal = false;
		});
		address.principal = true;
		$scope.currentAddress = address;
	}

}]);