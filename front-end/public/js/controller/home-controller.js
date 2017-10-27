angular.module('bringmybeer').controller('HomeController', function(productService, $scope, $routeParams, cartService, $rootScope, $location){
	$rootScope.productList = []
	$scope.price = 500;
	$scope.off = false;
	$scope.sale = false;
	$scope.category = 'all';
	$scope.orderByCustom = ['category', 'name'];
	$scope.itemPerPage = 4;

	var params = {
		category: $scope.category,
		price: $scope.price,
		off: $scope.off,
		sale: $scope.sale
	}


	$scope.goToDetail = function ( path ) {
	  $location.path( '/product/detail/'+path );
	};

	$scope.all = function(){
			params.category = $scope.category = 'all';
			params.price = $scope.price = 500;
			params.off = $scope.off = false;
			params.sale = $scope.sale = false;
			$scope.searchFilter();
			$scope.orderByCustom = ['category', 'name'];
			$scope.updown = null;
	}


	$scope.categoryF = function(cat){
		params.category = cat;
		$scope.searchFilter();
	}

	$scope.searchFilter = function(){
		productService.searchFilter(params)
						  .then(function(productList){
				          	$scope.orderByCategory(productList);
						  }).catch(function(errors){
						  	console.log(errors.message);
						  });
	}
	
	$scope.searchByPrice= function(){
		params.price = $scope.price;
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

	if($routeParams.list){
		params.category = $routeParams.list;
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
		['cerveja', 'vinho', 'outros'].some(function(key){
  			//e.hasOwnProperty(test) && e['category'].test(e[key])
  				test.push({ category: key, productList: [] });
  		});

	  	productList.forEach(function(p){
	  		for(var i in test){
	  			if(p.category===test[i].category){
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