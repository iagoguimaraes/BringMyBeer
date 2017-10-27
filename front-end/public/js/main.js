angular.module('bringmybeer', ['ngCookies', 'ngAnimate', 'mybeerService', 'ngRoute', 'bringmybeerDirectives', 'angularUtils.directives.dirPagination'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		// $routeProvider.when('/home', {
	 //        templateUrl: 'partials/home.html',
	 //        controller: 'HomeController'
		// }).when('/product/detail/:id', {
		// 	templateUrl: 'partials/product-detail.html',
		// 	controller: 'ProductController'
		// }).when('/products/category/:list', {
		// 	templateUrl: 'partials/home.html',
		// 	controller: 'HomeController'
		// }).when('/checkout', {
		// 	templateUrl: 'partials/checkout.html',
		// 	controller: 'CheckoutController'
		// }).when('/login', {
		// 	templateUrl: 'partials/login.html',
		// 	controller: 'LoginController'
		// }).when('/register', {
		// 	templateUrl: 'partials/register.html',
		// 	controller: 'RegisterController'
		// }).when('/payment', {
		// 	templateUrl: 'partials/payment.html',
		// 	// controller: 'PaymentController'
		// }).otherwise({
		// 	redirectTo: '/home'
		// });

		window.routes =
		{
		    "/home": {
		        templateUrl: 'partials/home.html',
		        controller: 'HomeController',
		        requireLogin: false
			},
		    "/product/detail/:id": {
				templateUrl: 'partials/product-detail.html',
				controller: 'ProductController',
		        requireLogin: false
			},
			"/products/category/:list": {
				templateUrl: 'partials/home.html',
				controller: 'HomeController',
				requireLogin: false
			},
			"/checkout": {
				templateUrl: 'partials/checkout.html',
				controller: 'CheckoutController',
				requireLogin: false
			},
			"/login": {
				templateUrl: 'partials/login.html',
				controller: 'LoginController',
				requireLogin: false
			},
			"/register": {
				templateUrl: 'partials/register.html',
				controller: 'RegisterController',
				requireLogin: false
			},
			"/payment": {
				templateUrl: 'partials/payment.html',
				controller: 'PaymentController',
				requireLogin: true
			},
			"/user-home": {
				templateUrl: 'partials/user-home.html',
				controller: 'HomeUserController',
				requireLogin: true
			}
		};

		for(var path in window.routes) {
			$routeProvider.when(path, window.routes[path]);
		}
		$routeProvider.otherwise({ redirectTo: '/home'});

		
}).config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('js/directives/dirPagination.html');
}).filter('passwordCount', [function() {
    return function(value, peak) {
        var value = angular.isString(value) ? value : '',
        peak = isFinite(peak) ? peak : 7;

        return value && (value.length > peak ? peak + '+' : value.length);
    };
}]).run(function($rootScope, SessionService, $location){
	$rootScope.$on("$locationChangeStart", function(event, next, current){
		var aux = (next.split("/")[next.split("/").length-1]);
		for(var i in window.routes){
			if(next.indexOf(i) != -1){
				!SessionService.getUserAuthenticated();
				if(window.routes[i].requireLogin && !SessionService.getUserAuthenticated()){
					alert("Usuário não autenticado");
					// aux != 'undefined' ? $rootScope.lastRoute = aux : 0;
					// SessionService.saveRoute(aux);
					$rootScope.lastRoute = current;
					console.log(next, current);
					event.preventDefault();
					$location.path('/login');
				} else if (SessionService.getUserAuthenticated() && window.routes[i].templateUrl.includes('/login')){
					$location.path('/user-home');
				}
				// else if(SessionService.getUserAuthenticated() && window.routes[i].requireLogin){
				// 	$location.path('/home');
				// }
			}
		}
	});
});
