angular.module('bringmybeer', ['bringmybeerFactory','components','ngCookies', 'ngAnimate', 'ui.router', 'bringmybeerDirectives', 'angularUtils.directives.dirPagination'])
	.config(function($stateProvider, $urlRouterProvider,$locationProvider, $qProvider) {
		$qProvider.errorOnUnhandledRejections(false); // mask error
		$locationProvider.html5Mode(true); // base ref
		window.states =
		{
		    "home": {
		    	url: '/home',
		        templateUrl: 'partials/home.html',
		        controller: 'HomeController',
		        data: { 
		        	requireLogin: false
		        }
			},
		    "product-detail": {
		    	url: '/product/detail/:id',
				templateUrl: 'partials/product-detail.html',
				controller: 'ProductController',
		        data: { 
		        	requireLogin: false
		        }
			},
			"category": {
				url: '/products/category/:list',
				templateUrl: 'partials/home.html',
				controller: 'HomeController',
				data: { 
					requireLogin: false
				}
			},
			"checkout": {
				url: '/checkout',
				templateUrl: 'partials/checkout.html',
				controller: 'CheckoutController',
				data: { 
					requireLogin: false
				}
			},
			"login": {
				url: '/login',
				templateUrl: 'partials/login.html',
				controller: 'LoginController',
				data: { 
					requireLogin: false
				}
			},
			"register": {
				url: '/register',
				templateUrl: 'partials/register.html',
				controller: 'RegisterController',
				data: { 
					requireLogin: false
				}
			},
			"payment": {
				url: '/payment',
				templateUrl: 'partials/payment.html',
				controller: 'PaymentController',
				data: { 
					requireLogin: true
				}
			},
			"user-home": {
				url: '/user',
				templateUrl: 'partials/user-home.html',
				controller: 'HomeUserController',
				data: { 
					requireLogin: true
				}
			},
			"user-data":{
				url: '/detail/data',
				templateUrl: 'partials/user-data.html',
				controller: 'HomeUserController',
				parent: 'user-home'
			},
			"user-address":{
				url: '/detail/address',
				templateUrl: 'partials/user-address.html',
				controller: 'AddressController',
				parent: 'user-home'
			},
			"user-cart":{
				url: '/cart',
				templateUrl: 'partials/user-cart.html',
				controller: 'HomeUserController',
				parent: 'user-home'
			},
			"user-orders":{
				url: '/orders',
				templateUrl: 'partials/user-orders.html',
				controller: 'HomeUserController',
				parent: 'user-home'
			}
		};

		for(var path in window.states) {
			$stateProvider.state(path, window.states[path]);
		}
		
	    $urlRouterProvider.otherwise('/home');

}).run(function($transitions, $trace, $state, $rootScope){
	$trace.disable('TRANSITION');
	$state.defaultErrorHandler(function() { /* do nothing */});
	var views = []; // base ref

	for(path in window.states){
		if(window.states[path].data.requireLogin){
			views.push(path)
		}
	}
	var alertService = {};
    var MyAuthService = {};
    var $state = {};

	$transitions.onStart({ to: views, from: "**" }, function(trans) {
		alertService = trans.injector().get('alertService');
    	MyAuthService = trans.injector().get('SessionService');
    	$state = trans.router.stateService;
		MyAuthService.getUserAuthenticated().then(function (user) {
			    }).catch(function(error) {
			        alertService.setMessage(7000, error.message, error.title);
			        $rootScope.lastRoute =  trans.to().name;
			        return $state.go('login');
			    });
	});
	$transitions.onSuccess({to: 'login'}, function(trans){
		alertService = trans.injector().get('alertService');
    	MyAuthService = trans.injector().get('SessionService');
    	$state = trans.router.stateService;
		MyAuthService.getUserAuthenticated().then(function (user) {
					if(trans.to().name === 'login'){
						$state.go('user-home');
					}
			    }).catch(function(error) {
			        alertService.setMessage(7000, error.message, error.title);
			        return $state.go('login');
			    });
	})
}).config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('js/directives/pagination.html');
}).filter('passwordCount', [function() {
    return function(value, peak) {
        var value = angular.isString(value) ? value : '',
        peak = isFinite(peak) ? peak : 7;

        return value && (value.length > peak ? peak + '+' : value.length);
    };
}]);
