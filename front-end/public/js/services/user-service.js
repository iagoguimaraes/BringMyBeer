angular.module('bringmybeer')
.service('userService', function(userResource, $q, $cookies, $rootScope, $http, userLogin){
    var service = {};
    $rootScope.orders = [];

    service.getUser = function(credentials){
        return $q(function(resolve, reject){
            $rootScope.$broadcast('show');
            userLogin.save(credentials, function(user){
                        $rootScope.$broadcast('hide');
                        $cookies.putObject('user', user);
                        $rootScope.user = user;
                        resolve(user);
                     }, function(error){
                        $rootScope.$broadcast('hide');
                        console.log(error);
                        reject({message: 'Erro ao autenticar usuário', title: 'Login', error: error});
                    });
        });
    }
    
    service.getAddres = function(cep){
        return $q(function(resolve, reject){
            $rootScope.$broadcast('show');
            $http.get('https://viacep.com.br/ws/'+ cep +'/json/')
                 .then(function(address){
                        $rootScope.$broadcast('hide');
                        resolve(address.data)
                 }).catch(function(error){
                    $rootScope.$broadcast('hide');
                    reject({message: 'Erro ao tentar localizar o CEP', title: 'CEP', error: error});
                 });
        });
    }

    service.saveUser = function(user){
        var d = $q.defer();
        $rootScope.$broadcast('show');
        userResource.save(user, function(user){
            $rootScope.$broadcast('hide');
            d.resolve(user);
        }, function(error){
            $rootScope.$broadcast('hide');
            d.reject({message: "Erro ao tentar editar usuário", title: "Cadastro", error: error})
        });
        return d.promise;
    }

    service.updateUser = function(user){
        return $q(function(resolve, reject){
            $rootScope.$broadcast('show');
            userResource.update(user, function(user){
                $rootScope.$broadcast('hide');
                resolve({message: user.mensagem, title: "Dados pessoais"});
            }, function(error){
                $rootScope.$broadcast('hide');
                reject(error);
            });
        });
    }

    return service;
});

