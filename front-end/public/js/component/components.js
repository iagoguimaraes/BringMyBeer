angular.module('components', [])
.directive('menuTop', function() {
	return {
		restrict: "AE",
		templateUrl: 'js/component/menu-top.html',
		controller: 'MenuController'
	}
}).directive('card', function(){
	return {
		restrict: "AE",
		scope: {
			product: '=',
			detail: '&',
			action: '&'
		},
		templateUrl: "js/component/card.html"
	}
}).directive('menuBottom', function(){
	return {
		restrict: "AE",
		templateUrl: "js/component/menu-bottom.html"
	};
}).directive('loader', function(){
	return{
		restrict: "E",
		link : function(scope, element){
			scope.$on('show', function(){
				element.css('display', '');
			});
			scope.$on('hide', function(){
				setTimeout(function(){
					element.css('display', 'none');
				}, 500)
			});
		},
		templateUrl : "js/component/loader.html"
	}
}).directive('videoBackground', function(){
	return{
		restrict: "E",
		templateUrl: "js/component/video.html"
	}
}).directive('alert', function(alertService){
	var message = {};
	return {
		restrict: "E",
		link: function(sc, element){
			sc.$on('showMessage', function(){
				message = alertService.getMessage();
				$(element).stop().fadeIn('fast', function(){
					setTimeout(function(){
						$(element).stop().fadeOut('slow');
					}, alertService.getMessage().time)
				});
			});
		},
		templateUrl: 'js/component/alert-message.html'
	}
}).directive('userData', function(){
	return {
		scope: {
			titles: "=",
			model: "=",
			disabled: "=",
			edit: "&"
		},
		templateUrl: 'js/component/user-data.html',
		restrict: "AE"
	}
}).directive('userAddress', function(){
	return {
		scope: {
			titles: "=",
			model: "=",
			disabled: "=",
			edit: "&",
			getAddress: "&"
		},
		templateUrl: 'js/component/user-address.html',
		restrict: "AE"
	}
}).directive('cart', function(){
	return {
		controller: 'CheckoutController',
		templateUrl: 'js/component/user-cart.html',
		restrict: "AE",
		scope: {
			products: "=",
			controls: '=',
			message: "@",
			action: "&",
			buttonText: "@",
			subTotal: "=",
			remove: "="
		}
	}
});