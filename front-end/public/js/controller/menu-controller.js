angular.module('bringmybeer').controller('MenuController', 
	function($scope, $rootScope, cartService, productService, SessionService, $state){
	$scope.searchDesc = '';
	$scope.productSearch = [];
	$scope.showList = false;


	$scope.goToDetail = function(path){
		$scope.showList = false;
	  	$state.go('product-detail', {id: path});
	};

	$scope.goToPayment = function(){
	  	$state.go('checkout');
	  	$("#navbarToggleExternalContent").collapse('hide')
	};

	$scope.searchField = function() {
		productService
		.getProducts()
	  	.then(function(productList){
	  		$scope.productSearch = productList.filter(function(items){
				if(['produto','descricao'].some(function(key){
					return items.hasOwnProperty(key) && new RegExp($scope.searchDesc, 'ig').test(items[key]);
					}))
				{
				 	return items;
				};
			});
	  	}).catch(function(error){
	  		console.log(error);
	  	})
	}

	// $scope.goToUser = function() {
	// 	if(!SessionService.getSession()){ 
	// 		alert('Usuário não logado')
	// 		$location.path('/login');
	// 		return;
	// 	}
	// 	// $location.path('/user-home');
	// }

});