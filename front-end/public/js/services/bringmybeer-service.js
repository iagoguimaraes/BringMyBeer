angular.module('mybeerService', ['ngResource'])
.factory('photoResource', function($resource){
    return $resource('/products/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('categoryResource', function($resource){
    // { params: { category: '@category', price: '@price', sale: '@sale', off: '@off'} }
    return $resource('/products/filters', { category: '@category', price: '@price', sale: '@sale', off: '@off'}, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('productService', function(photoResource, categoryResource, $q, $rootScope, cartService){


    var service = {};
    const event = 'focused';
    // servicos.register = function(foto){
    //     return $q(function(resolve, reject){
    //         if(foto._id){
    //             $rootScope.$broadcast(event);
    //             photoResource.update({id: foto._id}, foto, function(){
    //                 resolve({
    //                     message: 'Photo update with success',
    //                     inclusion: false
    //                 });
    //             }, function(error){
    //                 console.log(error);
    //                 reject({
    //                     message: 'Error occured while update Photo ' + foto.title,
    //                     inclusion: true
    //                 });
    //             });
    //         } else {
    //             photoResource.save(foto, function(){
    //                 $rootScope.$broadcast(event);
    //                 resolve({
    //                     message: 'Photo included with success',
    //                     inclusion: true
    //                 })
    //             }, function(error){
    //                 console.log(error);
    //                 reject({
    //                     message: 'Error occured while included Photo ' + foto.title,
    //                     inclusion: true
    //                 });
    //             })
    //         }
    //     });
    // }

    service.getProducts = function(){
        $rootScope.$broadcast('show');
        return $q(function(resolve, reject){
            photoResource.query(function(products){
                $rootScope.$broadcast('hide');
                $rootScope.products.forEach(function(productCookie){
                    products.forEach(function(pL, i){
                        if(productCookie._id===pL._id){
                            products.splice(i, 1);
                        }
                    });
                });
                resolve(products);
            }, function(error){
                console.log(error);
                reject({
                    message: 'Error occured while get products ',
                });
            });
        });
    }

    service.searchFilter = function(params){
        $rootScope.$broadcast('show');
        return $q(function(resolve, reject){
            categoryResource.query({params}, function(products){
                $rootScope.$broadcast('hide');
                $rootScope.products.forEach(function(productCookie){
                    products.forEach(function(pL, i){
                        if(productCookie._id===pL._id){
                            products.splice(i, 1);
                        }
                    });
                });
                resolve(products);
            }, function(error){
                console.log(error);
                reject({
                    message: 'Error occured while get products',
                });
            });
        });
    }

    return service;
}).factory('cartService', function($rootScope){

    $rootScope.products = [];
    var service = {};

    service.addProduct = function(product){
        var isAlredy = $rootScope.products.filter(function(p){ if(p._id===product._id){ return p;} })
        if(isAlredy.length) { alert('product alredy taken'); return; }
        $rootScope.products.push(product);
        $rootScope.productList.splice($rootScope.productList.indexOf(product), 1);

    }

    service.removeProduct = function(product){
        var indexOf = $rootScope.products.indexOf(product);
        $rootScope.products.splice(indexOf, 1);
        $rootScope.productList.push(product);
    }

    return service;

});