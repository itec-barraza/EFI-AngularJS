angular.module('appmain')

.controller('prdListCtrl',['$scope','ProductService', function($scope,serPrd){
    console.log('Iniciando prdListCtrl');
        
    $scope.ListPrd = '';
    
    
    $scope.delPrd = function(producto){
        serPrd.deleteProduct(producto)
    }
    console.log('Cargando Lista', $scope.ListPrd = serPrd.getProducts()) //error de ng-repeat a veces, le agrega un hash key al objeto producto ??
}])

//Podia ir junto al controlador Add y usarlo en ambas rutas de las vistas?