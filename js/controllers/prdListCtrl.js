angular.module('appmain')

.controller('prdListCtrl',['$scope','ProductService', function($scope,serPrd){
    console.log('Iniciando prdListCtrl');
        
    $scope.ListPrd = '';
    
    
    $scope.delPrd = function(producto){
        var index = $scope.ListPrd.indexOf(producto);        
        console.log('Borrando producto' ,producto.name);
        serPrd.deleteProduct(index);
    }
    console.log('Cargando Lista', $scope.ListPrd = serPrd.getProducts()) //error de ng-repeat a veces, le agrega un hash key al objeto producto ??
}])

//Podia ir junto al controlador Add y usarlo en ambas rutas de las vistas?