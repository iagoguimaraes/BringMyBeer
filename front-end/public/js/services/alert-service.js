angular.module('bringmybeer')
.service('alertService', function($rootScope){
    $rootScope.alertMessage = {};
    var service = {};

    service.setMessage = function(time, message, title, f){
        $rootScope.alertMessage = {
            title: title,
            message: message,
            time: time || 5000
        }
        $rootScope.$broadcast('showMessage');
    }

    service.getMessage = function(){
        return  $rootScope.alertMessage;
    }

    return service;
})