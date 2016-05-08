(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('LoginController', ['$scope', '$log',
        LoginController
    ]);
    
    function LoginController($scope, $log) {
        $scope.user = {
            email: "",
            password: ""
        };
        
        $scope.login = login($scope.user);
        $scope.createAccount = createAccount($scope.user);
    }
    
    function login(user) {
        //Perform login
    }
    
    function createAccount(user) {
        //Perform account creation
    }
    
})();