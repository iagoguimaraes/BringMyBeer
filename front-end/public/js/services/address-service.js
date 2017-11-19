angular.module('bringmybeer')
.service('addressService', ['$q', '$rootScope', 'addressResource', '$http', '$cookies', function ($q, $rootScope, addressResource, $http, $cookies) {
	var service = {};

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


    service.updateAddress = function(address){
    	return $q(function(resolve, reject){
    		delete address['$$hashKey'];
    		$rootScope.$broadcast('show');
    		addressResource.update(address, function(message){
    			$rootScope.$broadcast('hide');
                $cookies.putObject('user', $rootScope.user);
    			resolve({message: message.mensagem, title: "Endereço"});
    		}, function(error){
                console.log(error);
    			$rootScope.$broadcast('hide');
    			reject({message: "Erro ao tentar atualizar endereço", title: "Endereço"});
    		});
    	});
    }

    service.insertAddress = function(address){
    	return $q(function(resolve, reject){
    		$rootScope.$broadcast('show');
    		addressResource.save(address, function(address){
    			$rootScope.$broadcast('hide');
                $rootScope.user.enderecos.push(address);
                $cookies.putObject('user', $rootScope.user);
    			resolve({message: "Cadastrado com sucesso", title: "Endereço"});
    		}, function(error){
    			$rootScope.$broadcast('hide');
    			reject({message: "Erro ao tentar inserir endereço", title: "Endereço"});
    		});
    	});
    }

    service.removeAddrees = function(address){
    	return $q(function(resolve, reject){
    		$rootScope.$broadcast('show');
    		addressResource.delete({idEndereco: address.idEndereco}, function(message){
                $rootScope.user.enderecos.splice($rootScope.user.enderecos.indexOf(address), 1);
    			$rootScope.$broadcast('hide');
                $cookies.putObject('user', $rootScope.user);
    			resolve({message: message.mensagem, title: "Endereço"});
    		}, function(error){
    			$rootScope.$broadcast('hide');
    			reject({message: "Erro ao tentar remover endereço", title: "Endereço"});
    		});
    	});
    }

    return service;
}])