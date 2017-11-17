angular.module('bringmybeerDirectives', []).directive('menuTop', function(){
	var ddo = {};

	ddo.restrict = "AE";

	ddo.templateUrl = "js/directives/menu-top.html";
	return ddo;
}).directive('menuBottom', function(){
	var ddo = {};

	ddo.restrict = "AE";

	ddo.templateUrl = "js/directives/menu-bottom.html";
	return ddo;
}).directive('card', function(){
	var ddo = {};

	ddo.restrict = "AE";
	ddo.scope = {
		title: '@',
		desc: '@',
		price: '@',
		url: '@',
		action: '&',
		detail: '&'
	}

	ddo.templateUrl = "js/directives/card.html";
	return ddo;
}).directive('loader', function(productService){
	var ddo = {};

	ddo.restrict = "E";

	ddo.link = function(scope, element){
		scope.$on('show', function(){
			element.css('display', '');
		});
		scope.$on('hide', function(){
			element.css('display', 'none');
		});
	}

	ddo.templateUrl = "js/directives/loader.html";
	return ddo;
});