angular.module('bringmybeerFactory', ['ngResource'])
.factory('zxcvbn', [function() {
    return {
        score: function() {
            var compute = zxcvbn.apply(null, arguments);
            return compute && compute.score;
        }
    };
}])
.factory('vendaResource', function($resource){
    return $resource('http://localhost:8080/BringMyBeer/webresources/venda/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('photoResource', function($resource){
    return $resource('http://localhost:8080/BringMyBeer/webresources/produto/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('categoryResource', function($resource){
    // { params: { category: '@category', price: '@price', sale: '@sale', off: '@off'} }
    return $resource('http://localhost:8080/BringMyBeer/webresources/produto/filter/:tipo', null, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('searchResource', function($resource){
    return $resource('/products/search/:name', null, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('userResource', function($resource){
    return $resource('http://localhost:8080/BringMyBeer/webresources/usuario/:id', null, {
        'update': {
            method: 'PUT'
        },
        'save': {
            method: 'POST',
            isArray: false
        }
    });
}).factory('userLogin', function($resource){
    return $resource('http://localhost:8080/BringMyBeer/webresources/usuario/login', null, {
        'update': {
            method: 'PUT'
        }
    });
}).factory('addressResource', function($resource){
    return $resource('http://localhost:8080/BringMyBeer/webresources/enderecos', null, {
        'update': {
            method: 'PUT'
        }
    });
});