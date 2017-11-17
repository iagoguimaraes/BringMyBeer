angular.module('bringmybeer').controller('HomeController', 
	function(productService, $scope, cartService, $rootScope, $stateParams, $state, alertService){
	$rootScope.productList = []
	$scope.preco = 500;
	$scope.desconto = 0;
	$scope.maisComprados = false;
	$scope.tipo = 'all';
	$scope.orderByCustom = ['tipo', 'produto'];
	$scope.itemPerPage = 4;

	var params = {
		tipo: $scope.tipo,
		preco: $scope.preco,
		desconto: $scope.desconto,
		maisComprados: $scope.maisComprados
	}


	$scope.all = function(){
			params.tipo = $scope.tipo = 'all';
			params.preco = $scope.preco = 500;
			params.desconto = $scope.desconto = 0;
			params.maisComprados = $scope.maisComprados = false;
			$scope.searchFilter();
			$scope.orderByCustom = ['tipo', 'produto'];
			$scope.updown = null;
	}


	$scope.categoryF = function(cat){
		params.tipo = cat;
		$scope.searchFilter();
	}

	$scope.searchFilter = function(){
		productService.searchFilter(params)
						  .then(function(productList){
						  	console.log(productList)
				          	// $scope.orderByCategory(productList);
						  }).catch(function(errors){
						  	alertService.setMessage(7000, errors.message, errors.title)
						  });
	}
	
	$scope.searchByPrice= function(){
		params.preco = $scope.preco;
		$scope.searchFilter();
	}

	$scope.saleChange = function(){
		params.sale = $scope.sale;
		$scope.searchFilter();
	}

	$scope.offChange = function(){
		params.off = $scope.off;
		$scope.searchFilter();
	}

	if($stateParams.list){
		params.category = $stateParams.list;
		$scope.searchFilter();
	} else {
		productService.getProducts()
			  .then(function(productList){
			  	$scope.orderByCategory(productList);
			  }).catch(function(errors){
			  	console.log(errors);
			  });
	}

	$scope.addProduct = function(product) {
		cartService.addProduct(product);
	}


	$scope.cleanFilter = function(){
		$scope.all();
	}

	$scope.orderByCategory = function(productList) {
		var test = [];
		['cerveja', 'vinho', 'outros', 'alimentos'].some(function(key){
  			//e.hasOwnProperty(test) && e['category'].test(e[key])
  				test.push({ category: key, productList: [] });
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
	}

	$scope.test = function(){
		var cont = 0;
		cont++;
		return "test"+cont;
	}

	$scope.orderPrice = function(){
		$scope.orderByCustom = $scope.updown;
	}

});