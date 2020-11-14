angular.module('appmain') 

.controller('prdAddCtrl',['$scope', '$location', 'ProductService', function($scope, $location, serPrd){
    console.log('Iniciando prdAddCtrl');

    $scope.product = {code: '0', name: '', detail: '', price: '0', stockmin: '0', stockmax: '0', active: 'null'};

    $scope.addPrd= function(){
        if ( $scope.product.active == 'null' || $scope.product.code == '0' || $scope.product.name == '' )
            alert('Campos vacios')        
        else{
            serPrd.addProduct($scope.product);
            $location.path('/productlist');
            alert('Added '+$scope.product.name)
        }
    }
}])
