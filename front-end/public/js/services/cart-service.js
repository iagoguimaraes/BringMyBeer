angular.module('bringmybeer')
.service('cartService', function($rootScope, $cookies, alertService){
    $rootScope.products = [];
    $rootScope.subTotal = 0;
    var service = {};
    var a = $cookies.getAll();
    for(key in a){
        var json = JSON.parse(a[key]);
        if(json.hasOwnProperty('idProduto')){
            $rootScope.products.push(json);
            $rootScope.subTotal += parseFloat((json.preco * (1-(json.desconto.percentual/100) || 1))  * (json.quantidade || 1));
        }
    }

    service.addProduct = function(product){
        var isAlredy = $rootScope.products.filter(function(p){ if(p.idProduto===product.idProduto){ return p;} });
        if(isAlredy.length) { alertService.setMessage(7000, "Produto " + product.produto + "já foi adicionado", "Carrinho"); return; };
        if($rootScope.productList){
            $rootScope.productList.forEach(function(p){
                var i = p.productList.indexOf(product);
                if(i >= 0)
                    p.productList.splice(i, 1);
            });
        };
        product.quantidade = 1;
        $rootScope.products.push(product);
        $cookies.putObject(product.idProduto, product);
        service.getTotal();
        alertService.setMessage(2000, product.produto, "Adicionado");
    }

    service.removeProduct = function(product){
        $cookies.remove(product.idProduto);
        delete product['quantidade'];
        $rootScope.products.splice($rootScope.products.indexOf(product), 1);
        if($rootScope.productList.length) {
            $rootScope.productList.forEach(function(p){
                if(p.category===product.tipo.tipo){
                    p.productList.push(product);
                }
            });
        }
        service.getTotal();
    }

    service.getTotal = function() {
        $rootScope.subTotal = 0;
        $rootScope.products.forEach(function(product){
            $rootScope.subTotal += parseFloat((product.preco * (1-(product.desconto.percentual/100)))  * (product.quantidade || 0));
            $cookies.putObject(product.idProduto, product);
        })
    }

    service.clearAll = function() {
        $rootScope.subTotal = 0;
        $rootScope.products.forEach(function(p){
            $cookies.remove(p.idProduto);
        });

        $rootScope.products = []
    }

    return service;
});