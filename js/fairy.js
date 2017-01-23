var casamentarApp = angular.module('casamentarApp',  ['ngResource', 'ngRoute']); 

casamentarApp.factory('ConvidadoDAO', ['$resource', function($resource) {
	return $resource('https://casamentario-dd6e7.firebaseio.com/convidado.json', null,
		{
			'confirmar': { method:'PUT' , params:{nome:'Fairy teste'}}
		}
	);
}]);


casamentarApp.controller('homeControl', //['$scope', '$routeParams', 'ConvidadoDAO',
                                   function($scope)//, $routeParams, ConvidadoDAO) 
								   {
		
	$scope.teste = 'Angular LOADED';	
	
	$scope.confirmarConvidado = function(){
		var convidado = '{"nome":"Daniel Teste"}';
		//ConvidadoDAO.confirmar(null, convidado);	
		$scope.teste = 'DAO done!';
	};
	  
	

}
//]
);


