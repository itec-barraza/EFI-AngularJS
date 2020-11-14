angular.module('appmain') 

.controller('loginCtrl',['$scope', '$location', 'LoginService', function($scope, $location, logSrv){ 
    console.log('Iniciando LoginCtrl');
    
    $scope.user = {name: '', pwd: ''};
    $scope.saludo = '';
    
    $scope.login = function(){
        if (logSrv.userAuth($scope.user)){
            $location.path('/productlist');
            logSrv.addUser($scope.user);            
        }
    }

    $scope.usrdelete = function(){
        logSrv.deleteUser($scope.user)
        $location.path('/');        
    }

    //Actualiza cuando se actualiza la pagina por ??? motivo      
    if (logSrv.getUser()){ 
            $scope.saludo = 'Bienvenido ' +logSrv.getUser().name;  
            $scope.logout = 'Logout '
        }
}]);