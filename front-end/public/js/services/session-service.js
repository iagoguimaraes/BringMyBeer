angular.module('bringmybeer')
.service('SessionService', function($cookies, $rootScope, $q, $state){
    var user = { token: false, user: false};
    if($cookies.getObject('user')){
        user = $cookies.getObject('user');
        $rootScope.user = user;
    }
    // console.log($rootScope.user)
    var service = {};
    $rootScope.lastRoute = [];

    service.getSession = function() {
        $rootScope.user = $cookies.getObject('user');
        return $rootScope.user;
    }

    service.logout = function(){
        $cookies.remove('user');
        $state.go('home');
        $rootScope.user = null;
    }

    service.getUserAuthenticated = function(){
        var q = $q.defer();
        user = $cookies.getObject('user');
        if(user && user.token){
            q.resolve(user);
        } else{
            q.reject({message: 'Usuário não autenticado', title: "Login"});
        }

        return q.promise; 
    }

    return service;
})