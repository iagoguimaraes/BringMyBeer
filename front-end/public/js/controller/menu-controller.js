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
		if(!$scope.searchDesc) { return;}
		productService.getDesc($scope.searchDesc)
					  .then(function(products){
					  	$scope.productSearch = products
					  	// console.log(products)
					  }).catch(function(errors){
					  	console.log(errors.message);
					  });
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