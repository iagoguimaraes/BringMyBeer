angular.module('bringmybeer').controller('PaymentController', ['$scope', 'productService', 'SessionService', 'cartService', '$rootScope', 'alertService', "$state", '$http',
	function($scope, productService, SessionService, cartService, $rootScope,alertService, $state, $http){
	$scope.type = 'Boleto';
	$scope.editAddress = false;
	$scope.currentAddress = {};
	$scope.total = 0;
	$scope.fretes = [];

	if($rootScope.products.length===0){
		alertService.setMessage(7000, "Você não possui produtos no carrinho", "Erro");
		$state.go('home');
	}

	$scope.changePayment = function(){
		$scope.type === 'Boleto' ? $scope.type = 'Cartão de crédito' : $scope.type = 'Boleto';
	}

	$scope.buy = function(){

		if(!$scope.currentAddress.idEndereco){
			alertService.setMessage(7000, "Selecione um endereço para entrega", "Endereço");
			return;
		}

		if($scope.total == 0){
			alertService.setMessage(7000, "selecione o serviço de entrega", "Entrega");
			return;
		}
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
			    "formaPagamento": { idFormaPagamento: $scope.type === 'Boleto' ?  $scope.type = 1 :  $scope.type = 2},
			    "cliente": {idCliente: SessionService.getSession().idCliente},
			    "endereco": $scope.currentAddress
		}

		productService.buy(infoBuy)
					  .then(function(){
					  	alertService.setMessage(7000, "realizada com sucesso", "Compra");
					  	$state.go("user-orders");
					  	cartService.clearAll();
					  }).catch(function(error){
					  	alertService.setMessage(7000, error.error.data.message, error.title);
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
		if(address.cep.length <= 8){
			alertService.setMessage(7000, "inválido insira corretamente", "CEP");
			return;
		}

		/*
			40010 = SEDEX Varejo
			40045 = SEDEX a Cobrar Varejo
			40215 = SEDEX 10 Varejo
			40290 = SEDEX Hoje Varejo
			41106 = PAC Varejo
		*/

		$http.get('/frete?cep=' +address.cep.replace('-', ''))
			 .then(function(result){
			 	if(result.data[0].MsgErro.length && result.data[0].PrazoEntrega==0){
			 		alertService.setMessage(7000, result.data[0].MsgErro, result.data[0].Erro);
			 		return;
			 	}
			 	$scope.fretes = result.data;
			 	$('#novoservico').modal('show');
			 }).catch(function(error){
			 	alertService.setMessage(7000, error[0].MsgErro, error[0].Erro);
			 })
	}

	$scope.selectFrete = function(frete){
		$scope.total = $rootScope.subTotal + parseFloat(frete.Valor);
		$scope.fretes = [];
		$('#novoservico').modal('hide');
	}

}]);