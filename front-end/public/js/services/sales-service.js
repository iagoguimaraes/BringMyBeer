angular.module('bringmybeer')
.service('salesService', [ 'vendaResource', '$q', '$rootScope',
	function (vendaResource, $q, $rootScope) {

		var service = {};

		service.getSales = function(idClient){
			$rootScope.$broadcast('show');
			return $q(function(resolve, reject){
				vendaResource.query({idCliente: idClient}, function(sales){
					$rootScope.$broadcast('hide');
					resolve(sales);
				}, function(error){
					$rootScope.$broadcast('hide');
					reject({message: "erro ao localizar pedidos", title: "Pedidos", error: error})
				});
			});
		}

		service.postSales = function(cart){
			$rootScope.$broadcast('show');
			return $q(function(resolve, reject){
				vendaResource.post(cart, function(sales){
					$rootScope.$broadcast('hide');
					resolve(sales);
				}, function(error){
					$rootScope.$broadcast('hide');
					reject({message: "erro ao realizar vendas", title: "Vendas", error: error})
				});
			});
		}

		return service;
	
}])