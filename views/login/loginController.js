(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('LoginController', ['$scope', '$log', 'LoginService',
        LoginController
    ]);
    
    myApp.service('LoginService', function() {
        var _this = this;
        _this.loggedIn = false;
    });
    
    function LoginController($scope, $log, LoginService) {
        $scope.user = {
            email: "",
            password: ""
        };
        
        $scope.login = function() { login($scope.user) };
        $scope.createAccount = createAccount($scope.user);
        
        $scope.loggedIn = LoginService.loggedIn;
    
        function login(user) {
            //Perform login
            function callback() {
                loginCallback(LoginService)
            }

            callback();
        }

        function loginCallback() {
            var success = true;

            if (success) {
                LoginService.loggedIn = true;
                $scope.loggedIn = true;
            }
        }

        function createAccount(user) {
            //Perform account creation
        }
    }
    
})();