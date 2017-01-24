var casamentarApp = angular.module('casamentarApp', []); 

//casamentarApp.factory('ConvidadoDAO', ['$resource', function($resource) {
//	return $resource('https://casamentario-dd6e7.firebaseio.com/convidado.json', null,
//		{
//			'confirmar': { method:'PUT' , params:{nome:'Fairy teste'}}
//		}
//	);
//}]);


casamentarApp.controller('homeControl',  ['$scope', '$http', function($scope, $http){
		
	$scope.teste = 'Angular LOADED';	
	
	$scope.confirmarConvidado = function(){
		
		var req = {
			method: 'PUT',
			url: 'https://casamentario-dd6e7.firebaseio.com/convidado.json',
			data: {
					nome: 'Daniel Teste'
			}
		}
		
		memoriesService = $http(req);
		memoriesService.then(function(resp){
			alert('sucesso');
			//sucesso
			$scope.teste = resp;			
		}, function(resp){
			alert('erro' + resp);
			//erro
			$scope.teste = resp;
		});
		
//		var convidado = '{"nome":"Daniel Teste"}';
//		ConvidadoDAO.confirmar(null, convidado);	
		$scope.teste = $scope.teste + ' - DAO done!';
	};
}
]
);


