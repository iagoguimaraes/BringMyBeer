angular.module('bringmybeer', ['ngAnimate', 'mybeerService', 'ngRoute', 'bringmybeerDirectives'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/home', {
	        templateUrl: 'partials/home.html',
	        controller: 'HomeController'
		}).when('/product/detail/:id', {
			templateUrl: 'partials/product-detail.html',
			controller: 'ProductController'
		}).when('/products/category/:list', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		}).when('/checkout', {
			templateUrl: 'partials/checkout.html',
			controller: 'CheckoutController'
		}).when('/login', {
			templateUrl: 'partials/login.html'
			// controller: 'LoginController'
		}).when('/payment', {
			templateUrl: 'partials/payment.html',
			// controller: 'PaymentController'
		}).otherwise({
			redirectTo: '/home'
		});
		
});
