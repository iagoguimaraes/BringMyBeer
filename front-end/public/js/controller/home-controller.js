angular.module('bringmybeer').controller('HomeController', 
	function(productService, $scope, cartService, $rootScope, $stateParams, $state, alertService, categoryService, $http){
	$rootScope.productList = []
	$scope.preco = 500;
	$scope.desconto = 0;
	$scope.maisComprados = false;
	$scope.tipo = '';
	$scope.orderByCustom = ['tipo', 'produto'];
	$scope.itemPerPage = 4;
	$scope.tipos = [];
	$scope.marcas = [];


	$http.get('http://localhost:8080/BringMyBeer/webresources/produto/tipo')
		 .then(function(tipos){
		 	$scope.tipos = tipos.data;
		 }).catch(function(error){
		 	alertService.setMessage(7000, errors.data.message, "Tipos");
		 });

	$http.get('http://localhost:8080/BringMyBeer/webresources/produto/marca')
		 .then(function(marcas){
		 	$scope.marcas = marcas.data;
		 }).catch(function(error){
		 	alertService.setMessage(7000, errors.data.message, "Marcas");
		 });

	var params = {
		tipo: $scope.tipo,
		valormax: $scope.preco,
		// desconto: $scope.desconto,
		marca: '',
		valormin: 0
		// produto: ''
	}

	$scope.all = function(){
			params.tipo = $scope.tipo = '';
			params.valormax = $scope.preco = 500;
			params.desconto = $scope.desconto = 0;
			// params.maisComprados = $scope.maisComprados = false;
			params.marca = '';
			$scope.orderByCustom = ['tipo', 'produto'];
			$scope.updown = null;
			$scope.marca = "";
			$scope.itemPerPage = 4;
			$scope.searchFilter();
	}

	$scope.brand = function(){
		if($scope.marca){
			params.marca = $scope.marca.marca;
		} else {
			params.marca = '';
		}
		$scope.searchFilter();
	}

	$scope.categoryF = function(cat){
		params.tipo = cat;
		Promise.resolve($scope.searchFilter())
			   .then(function(){
			   		$scope.itemPerPage = $rootScope.productList[0].productList.length;
			   });

	}

	$scope.searchFilter = function(){
		productService.searchFilter(params)
						  .then(function(productList){
				          	$scope.orderByCategory(productList);
						  }).catch(function(errors){
						  	alertService.setMessage(7000, errors.message, errors.title);
						  });
	}
	
	$scope.searchByPrice= function(){
		params.valormax = $scope.preco;
		$scope.searchFilter();
	}

	$scope.saleChange = function(){
		params.sale = $scope.sale;
		$scope.searchFilter();
	}

	$scope.offChange = function(){
		if($scope.desconto){
			$rootScope.$broadcast('show');
			$http.get('http://localhost:8080/BringMyBeer/webresources/produto/desconto')
			 .then(function(productList){
			 	$rootScope.$broadcast('hide');
			 	$scope.orderByCategory(productList.data);
			 }).catch(function(error){
			 	$rootScope.$broadcast('hide');
			 	alertService.setMessage(7000, errors.data.message, "Tipos");
			 });
		} else {
			$scope.all();
		}
	}

	$scope.addProduct = function(product) {
		cartService.addProduct(product);
	}


	$scope.cleanFilter = function(){
		$scope.all();
	}

	$scope.orderByCategory = function(productList) {
		var test = [];
		categoryService.getCategorys()
					   .then(function(types){
					   		test = types.map(function(type){
					   			return{
					   				category: type.tipo,
					   				productList: []
					   			}
					   		});
					  		productList.forEach(function(p){
						  		for(var i in test){
						  			if(p.tipo.tipo===test[i].category){
						  				test[i].productList.push(p);
						  			}
						  		}
						  		return;
						  	});
						  	$rootScope.productList = test;
					   })
	}

	$scope.test = function(){
		var cont = 0;
		cont++;
		return "test"+cont;
	}

	$scope.orderPrice = function(){
		$scope.orderByCustom = $scope.updown;
	}

	if($stateParams.list){
		params.tipo = $stateParams.list;
		$scope.searchFilter();
	} else {
		productService.getProducts()
			  .then(function(productList){
			  	$scope.orderByCategory(productList);
			  }).catch(function(errors){
			  	console.log(errors);
			  });
	}

});