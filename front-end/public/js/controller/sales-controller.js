angular.module('bringmybeer')
.controller('SalesUserController', ['$scope', 'SessionService', '$rootScope', 'alertService','userService', 'salesService',
	function($scope, SessionService, $rootScope, alertService, userService, salesService){
	
	$scope.orders = [];

	salesService.getSales(SessionService.getSession().idCliente)
				.then(function(orders){
					$scope.orders = orders;
					console.log(orders);
				}).catch(function(error){
					console.log(error.error);
					alertService.setMessage(7000, error.message, error.title);
				})

	$scope.openList = function(list, event){
		$scope.list = list.map(function(item){
			return{
				idProduto: item.produto.idProduto,
				produto: item.produto.produto,
				preco: item.preco,
				quantidade: item.quantidade,
				descricao: item.produto.descricao
			}
		});
		var _class = (event.currentTarget.className).replace(" ", " .").split(" ");
		$('.lines').removeClass("bg-dark");
		$(_class[1]).addClass("bg-dark");
	}

	$scope.totalList = function(list){
		var total = 0;
		list.forEach(function(product){
			total += product.quantidade * product.preco;
		});

		return total;
	}

	$scope.cleanList = function(){
		$scope.list = [];
		$('.lines').removeClass("bg-dark");
	}
}])
