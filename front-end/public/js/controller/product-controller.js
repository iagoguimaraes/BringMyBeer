angular.module('bringmybeer').controller('ProductController', 
	function($scope, productService, cartService, $rootScope, cartService, $stateParams, $state, alertService, $http){
	$scope.product = {};
	$scope.itemPerPage = 6;
	$scope.orderByCustom = ['tipo', 'produto'];
	$rootScope.productList = [];
	$scope.cep = '';
	$scope.fretes = [];

	productService.getProduct($state.params.id)
				  .then(function(data){
				  	$scope.product = data;
				  	$scope.loadFamily();
				  }).catch(function(error){
				  	alertService.setMessage(7000, error.message, error.title);
				  	// $location.path('/home');
				  })

	$scope.loadFamily = function(){
		productService.searchFilter({tipo: $scope.product.tipo.tipo})
			  .then(function(productList){
			  	productList.splice(productList.indexOf($scope.product, 1));
			  	$scope.orderByCategory(productList);
			  }).catch(function(error){
			  	alertService.setMessage(7000, error.message, error.title);
			  });
	}

	$scope.prevent = function(e){
		event.preventDefault();
	}

	$scope.addProduct = function(product) {
		cartService.addProduct(product);
	}

	$scope.buy = function(product) {
		var insert = true;
		$rootScope.products.forEach(function(p, i){
			if(p.idProduto===product.idProduto){
				insert = false;
			}
		});
		if(insert){
			cartService.addProduct(product);
		}
		$state.go('checkout');
	}

	// $scope.goToDetail = function ( path ) {
	//   $state.go( 'product-detail', {id: path});
	// };

	$scope.calcFrete = function(){
		if($scope.cep.length <= 8){
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

		$http.get('/frete?cep=' + $scope.cep.replace('-', ''))
			 .then(function(result){
			 	if(result.data[0].MsgErro.length && result.data[0].PrazoEntrega==0){
			 		alertService.setMessage(7000, result.data[0].MsgErro, result.data[0].Erro);
			 		return;
			 	}
			 	$scope.fretes = result.data;
			 }).catch(function(error){
			 	alertService.setMessage(7000, error[0].MsgErro, error[0].Erro);
			 })
	}

	$scope.orderByCategory = function(productList) {
	  	$rootScope.productList.push({ category: $scope.product.tipo['tipo'], productList: productList });
	}
})