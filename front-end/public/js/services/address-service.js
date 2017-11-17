angular.module('bringmybeer')
.service('addressService', ['$q', '$rootScope', 'addressResource', '$http', function ($q, $rootScope, addressResource, $http) {
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
    			resolve({message: message.mensagem, title: "Endereço"});
    		}, function(error){
    			$rootScope.$broadcast('hide');
    			reject({message: "Erro ao tentar atualizar endereço", title: "Endereço"});
    		});
    	});
    }

    service.insertAddress = function(address){
    	return $q(function(resolve, reject){
    		$rootScope.$broadcast('show');
    		addressResource.save(address, function(message){
    			$rootScope.$broadcast('hide');
    			resolve({message: message.mensagem, title: "Endereço"});
    		}, function(error){
    			$rootScope.$broadcast('hide');
    			reject({message: "Erro ao tentar inserir endereço", title: "Endereço"});
    		});
    	});
    }

    service.removeAddrees = function(id){
    	return $q(function(resolve, reject){
    		$rootScope.$broadcast('show');
    		addressResource.delete(id, function(message){
    			$rootScope.$broadcast('hide');
    			resolve({message: message.mensagem, title: "Endereço"});
    		}, function(error){
    			$rootScope.$broadcast('hide');
    			reject({message: "Erro ao tentar inserir endereço", title: "Endereço"});
    		});
    	});
    }

    return service;
}])