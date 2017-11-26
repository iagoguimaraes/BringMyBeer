angular.module('bringmybeer')
.service('productService', function(photoResource, categoryResource, $q, $rootScope, cartService, searchResource, $http, vendaResource){
    var service = {};
    const event = 'focused';

    var filterCookie = function (products){
        $rootScope.products.forEach(function(productCookie){
            products.forEach(function(pL, i){
                if(productCookie.idProduto===pL.idProduto){
                    products.splice(i, 1);
                }
            });
        });
        return products;
    }

    service.buy = function(venda){
        return $q(function(resolve, reject){
            vendaResource.save(venda, function(products){
                resolve(products);
            }, function(errors){
                reject({message: "erro ao tentar finalizar a compra", title: "Compra", error: errors});
            })
        })
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


    service.getDesc = function(desc){
        return $q(function(resolve, reject){
                searchResource.query({descricao: desc}, function(products){
                resolve(products);
            }, function(errors){
                reject({message: errors});
            })
        })
    }

    service.getCategory = function(category) {
        $rootScope.$broadcast('show');
        return $q(function(resolve, reject){
            categoryResource.query({tipo: category}, function(products){
                $rootScope.$broadcast('hide');
                resolve(products);
            }, function(error){
                $rootScope.$broadcast('hide');
                reject({message: 'Erro ao tentar localizar produtos Similares', title: 'Produtos', error: error});
            })
        })
    }

    service.getProducts = function(){
        $rootScope.$broadcast('show');
        return $q(function(resolve, reject){
            photoResource.query(function(products){
                $rootScope.$broadcast('hide');
                products = filterCookie(products);
                resolve(products);
            }, function(error){
                $rootScope.$broadcast('hide');
                reject({
                    message: 'Erro durante a consulta de Produto',
                });
            });
        });
    }

    service.getProduct = function(id){
        $rootScope.$broadcast('show');
        return $q(function(resolve, reject){
            photoResource.get({id: id}, function(product){
                $rootScope.$broadcast('hide');
                resolve(product);
            }, function(error){
                $rootScope.$broadcast('hide');
                reject({
                    message: 'Erro durante a consulta do produto',
                    title: 'Detalhe do Produto',
                    error: error
                });
            });
        });
    }

    service.searchFilter = function(params){
        if(!params.marca){
            delete params['marca'];
        }

        if(!params.tipo){
            delete params['tipo'];
        }

        $rootScope.$broadcast('show');
        return $q(function(resolve, reject){
            categoryResource.save(params, function(products){
                // products = filterCookie(products);
                $rootScope.$broadcast('hide');
                resolve(products);
            }, function(error){
                $rootScope.$broadcast('hide');
                reject({
                    message: 'Erro durante a consulta com filtros',
                    title: 'Filters',
                    error: errors
                });
            });
        });
    }


    service.insertProduct = function (product) {
        return $q(function(resolve, reject){
            photoResource.save(product, function(data){
                resolve(data);
            }, function(error){
                reject({message: "Erro ao tentar cadastrar produto", title: "Cadastro", error: error});
            });
        });
    }

    service.updateProduct = function (product) {
        return $q(function(resolve, reject){
            photoResource.update(product, function(data){
                resolve(data);
            }, function(error){
                reject({message: "Erro ao tentar editar produto", title: "Cadastro", error: error});
            });
        });
    }

    return service;
});