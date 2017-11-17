angular.module('bringmybeer').controller('PaymentController', ['$scope', 'productService', 'SessionService', 'cartService', '$rootScope', 'alertService', "$state",
	function($scope, productService, SessionService, cartService, $rootScope,alertService, $state){
	$scope.type = 'Boleto';

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
			    		produto: {produto: item.name, idProduto: item._id, preco: item.price},
			    		quantidade: item.quantity,
			    		preco: item.price
			    	}
			    }),
			    "formaPagamento": { idFormaPagamento: $scope.type === 'Boleto' ? 1 : 2},
			    "cliente": {idCliente: SessionService.getSession()._id},
			    "endereco": {idEndereco: SessionService.getSession().address._id || 1}
		}

		productService.buy(infoBuy)
					  .then(function(data){
					  	alertService.setMessage(7000, " realizada com sucesso", "Compra");
					  	$state.go("user-cart");
					  	// console.log(data);
					  }).catch(function(error){
					  	console.log(error)
					  });
		// $state.go(path);
	}


}]);