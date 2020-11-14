angular.module('appmain',['ngRoute']) // definimos un modulo
.config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
      when('/', {
        controller: "homeCtrl",
        templateUrl: "views/home.html"
        })
        .when('/login', {
          controller: "loginCtrl",
          templateUrl: "views/login.html"
        })  
        .when('/addproduct', {
          controller: "prdAddCtrl",
          templateUrl: "views/prdAdd.html"
        })
        .when('/productlist', {
          controller: "prdListCtrl",
          templateUrl: "views/prdList.html"
        })  
      .otherwise({
        redirectTo: "/"
       });
  }
]);

