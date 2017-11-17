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
}).factory('userResource', function($resource){
    // { params: { category: '@category', price: '@price', sale: '@sale', off: '@off'} }
    return $resource('/user/:id', null, {
        'update': {
            method: 'PUT'
        },
        'save': {
            method: 'POST',
            isArray: false
        }
    });
}).service('productService', function(photoResource, categoryResource, $q, $rootScope, cartService, searchResource, $http){
    var service = {};
    const event = 'focused';

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
                    $rootScope.$broadcast('hide');
                    reject({message: 'Erro ao tentar localizar o CEP', title: 'CEP', error: error})
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
}).service('userService', function(userResource, $q, $cookies, $rootScope){
    var service = {};
    $rootScope.orders = [];
    service.getUser = function(credentials){
        var d = $q.defer();
        userResource.save(credentials, function(user){
            if(user && user.token){
                delete user['orders'];
                $cookies.putObject('user', user);
                $rootScope.user = user;
                d.resolve(user);
            } else{
                d.reject({message: 'invalid user', title: 'Authentication'});
            }
        }, function(error){
            d.reject({message: 'Error while try to Authenticate', title: 'Authentication', error: error});
        });
        return d.promise;
    }

    service.getOrders = function(){
        var credentials = {
            email: $cookies.getObject('user').email,
            password: $cookies.getObject('user').password
        };
        var d = $q.defer();
        userResource.save(credentials, function(orders){
            if(orders.orders.length){
                d.resolve(orders.orders);
            } else {
                d.reject({message: 'Any orders was found', title: 'User orders'});
            }
        }, function(error){
            d.reject({message: 'Error while consulting orders data', title: 'Orders', error: error});
        });
        return d.promise;
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

}).service('SessionService', function($cookies, $rootScope, $q, $state){
    var user = { token: false, user: false};
    if($cookies.getObject('user')){
        user = $cookies.getObject('user');
        $rootScope.user = user;
    }
    console.log($rootScope.user)
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
}).service('alertService', function($rootScope){
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
