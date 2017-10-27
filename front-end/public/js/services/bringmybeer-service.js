angular.module('mybeerService', ['ngResource'])
.factory('zxcvbn', [function() {
    return {
        score: function() {
            var compute = zxcvbn.apply(null, arguments);
            return compute && compute.score;
        }
    };
}]).factory('photoResource', function($resource){
    return $resource('/products/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('categoryResource', function($resource){
    // { params: { category: '@category', price: '@price', sale: '@sale', off: '@off'} }
    return $resource('/products/filters', {params: '@params'}, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('searchResource', function($resource){
    // { params: { category: '@category', price: '@price', sale: '@sale', off: '@off'} }
    return $resource('/products/search/:name', null, {
        'update': {
            method: 'PUT'
        }
    });
}).service('productService', function(photoResource, categoryResource, $q, $rootScope, cartService, searchResource, $http){
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

    service.getAddres = function(cep){
        return $q(function(resolve, reject){
            $rootScope.$broadcast('show');
            $http.get('https://viacep.com.br/ws/'+ cep +'/json/')
                 .then(function(address){
                    setTimeout(function(){
                        resolve(address.data)
                        $rootScope.$broadcast('hide');
                    }, 500);
                 }).catch(function(error){
                    reject({message: error})
                 });
        });
    }


    service.getDesc = function(desc){
        return $q(function(resolve, reject){
            searchResource.query({name: desc}, function(products){
                resolve(products);
            }, function(errors){
                reject({message: errors});
            })
        })
    }


    service.getProducts = function(){
        $rootScope.$broadcast('show');
        return $q(function(resolve, reject){
            photoResource.query(function(products){
                $rootScope.products.forEach(function(productCookie){
                    products.forEach(function(pL, i){
                        if(productCookie._id===pL._id){
                            products.splice(i, 1);
                        }
                    });
                });
                resolve(products);
                $rootScope.$broadcast('hide');
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
                $rootScope.products.forEach(function(productCookie){
                    products.forEach(function(pL, i){
                        if(productCookie._id===pL._id){
                            products.splice(i, 1);
                        }
                    });
                });
                resolve(products);
                $rootScope.$broadcast('hide');
            }, function(error){
                console.log(error);
                reject({
                    message: 'Error occured while get products',
                });
            });
        });
    }

    return service;
}).service('cartService', function($rootScope, $cookies){
    $rootScope.products = [];
    $rootScope.subTotal = 0;
    var service = {};
    var a = $cookies.getAll();
    for(key in a){
        var json = JSON.parse(a[key]);
        if(json.hasOwnProperty('_id')){
            $rootScope.products.push(json);
            $rootScope.subTotal += parseFloat((json.price * (1-(json.off/100)))  * (json.quantity || 1));
        }
    }



    service.addProduct = function(product){
        var isAlredy = $rootScope.products.filter(function(p){ if(p._id===product._id){ return p;} });
        if(isAlredy.length) { alert('product alredy taken'); return; };
        if($rootScope.productList){
            $rootScope.productList.forEach(function(p){
                let i = p.productList.indexOf(product);
                if(i >= 0)
                    p.productList.splice(i, 1);
            });
        };
        product.quantity = 1;
        // product.desc = "";
        // product.images = product.images[0];
        $rootScope.products.push(product);
        $cookies.putObject(product._id, product);
        service.getTotal();
    }

    service.removeProduct = function(product){
        $cookies.remove(product._id);

        delete product['quantity'];
        $rootScope.products.splice($rootScope.products.indexOf(product), 1);
        $rootScope.productList.forEach(function(p){
            if(p.category===product.category)
                p.productList.push(product);
                return;
        });
        
        service.getTotal();
    }

    service.getTotal = function() {
        $rootScope.subTotal = 0;
        $rootScope.products.forEach(function(product){
            $rootScope.subTotal += parseFloat((product.price * (1-(product.off/100)))  * (product.quantity || 0));
            $cookies.putObject(product._id, product);
        })
    }

    return service;

}).service('SessionService', function($cookies, $rootScope, $location){
    $rootScope.user = $cookies.getObject('user') || null;
    var service = {};
    $rootScope.lastRoute = [];

    service.setUserAuthenticated = function(){
        $rootScope.user = {
                name: 'Miqueas',
                lastname: "Batista do santos",
                birthday: "21/04/96",
                cpf: "999.999.999.44",
                email: "miqueas.bsantos@gmail.com",
                tel: "99-9999-9999",
                cellphone: "99-9999-9999",
                token: "ASDKJSAKLDJKLASJD547",
                address: [
                    {
                        address: "Rua Atonio Simão da Costa",
                        number: "701",
                        complement: "casa",
                        zipcode: "04844150",
                        botherhood: "Jardim Manáca",
                        city: "São Paulo",
                        state: "SP" 
                    },
                    {
                        address: "Rua Atonio Simão da Costa 2",
                        number: "701 2",
                        complement: "casa 2",
                        zipcode: "04844150 2",
                        botherhood: "Jardim Manáca 2",
                        city: "São Paulo 2",
                        state: "SP 2" 
                    }
                ]
        };
        $cookies.putObject('user', $rootScope.user);
    };

    service.getSession = function() {
        $rootScope.user = $cookies.getObject('user');
        return $rootScope.user;
    }

    // service.login = function(){
    //     // var r = $rootScope.lastRoute.toString().split("/");
    //     if(service.getUserAuthenticated()){
    //         // r[r.length-1].length ? $location.path(r[r.length-1]) : $location.path('/user-home');
    //         // $rootScope.lastRoute = [];
    //     }
    // }

    service.logout = function(){
        $cookies.remove('user');
        $location.path('/home');
        $rootScope.user = null;
    }

    // service.saveRoute = function(route){
    //     if(route && $rootScope.save){
    //         $rootScope.save = false;
    //         $rootScope.lastRoute.push(route);
    //         console.log(route, $rootScope.lastRoute);
    //     }
    // }

    service.getUserAuthenticated = function(){
        service.getSession();
        return $rootScope.user && $rootScope.user.token;
    }

    return service;
});