angular.module('bringmybeer')
.service('categoryService', [ 'typeResource', '$q',
	function (typeResource, $q) {
		var service = {};

		service.getCategorys = function(){
			return $q(function(resolve, reject){
				typeResource.query(function(types){
					resolve(types);
				}, function(error){
					reject({message: "erro ao localizar categorias", title: "Categoria invalida", error: error})
				});
			});
		}

		return service;
	
}])