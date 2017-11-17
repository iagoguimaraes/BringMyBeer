angular.module('bringmybeerDirectives', [])
.directive('inputMask', function() {
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