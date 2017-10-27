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
		detail: '&',
		off: '@'
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
}).directive('videoBackground', function(){
	var ddo = {}
	ddo.restrict = "E";
	ddo.templateUrl = "js/directives/video.html";

	return ddo;
}).directive('inputMask', function() {
    return {
        require: "ngModel",
        link: function(scope, el, attrs){
				$(el).inputmask(scope.$eval(attrs.inputMask));
				$(el).on('change', function(){
				scope.$eval(attrs.ngModel + "='" + el.val() + "'");
	        });
		}
    };
}).directive('okPassword', ['zxcvbn', function(zxcvbn) {
    return {
        // restrict to only attribute and class
        restrict: 'AC',

        // use the NgModelController
        require: 'ngModel',

        // add the NgModelController as a dependency to your link function
        link: function($scope, $element, $attrs, ngModelCtrl) {
            $element.on('blur change keydown', function(evt) {
                $scope.$evalAsync(function($scope) {
                    // update the $scope.password with the element's value
                    var pwd = $scope.password = $element.val();

                    // resolve password strength score using zxcvbn service
                    $scope.passwordStrength = pwd ? (pwd.length > 7 && zxcvbn.score(pwd) || 0) 
                    : null;

                    // define the validity criterion for okPassword constraint
                    ngModelCtrl.$setValidity('okPassword', $scope.passwordStrength >= 2);
                });
            });
        }
    };
}]);