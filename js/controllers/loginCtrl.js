angular.module('appmain') 

.controller('loginCtrl',['$scope', '$location', 'LoginService', function($scope, $location, logSrv){ 
    console.log('Iniciando LoginCtrl');
    
    $scope.user = {name: '', pwd: ''};
    
    
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

    $scope.saludo = function(){
        if (logSrv.getUser()) 
            return 'Bienvenido ' +logSrv.getUser().name;    
    }
    $scope.logout = function(){
        if (logSrv.getUser())
            return 'Logout ';
    }
    
}]);