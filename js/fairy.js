var mainApp = angular.module('mainApp',  ['ngResource', 'ngRoute']); 

mainApp.factory('ConvidadoDAO', ['$resource', function($resource) {
	return $resource('https://casamentario-dd6e7.firebaseio.com/convidado.json', null,
		{
			'confirmar': { method:'PUT' , params:{nome:'Fairy teste'}}
		}
	);
}]);


mainApp.controller('mainControl',  ['$scope', '$routeParams', 'ConvidadoDAO',
                                   function($scope, $routeParams, ConvidadoDAO) {
		
		
	
	$scope.confirmarConvidado = function(){
		var convidado = '{"nome":"Daniel Teste"}';
		ConvidadoDAO.confirmar(null, convidado);	
		$scope.teste = 'DAO done!';
	};
	  
	$scope.teste = 'Angular LOADED';

}]);


