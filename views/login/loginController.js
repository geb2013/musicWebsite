(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('LoginController', ['$scope', "$log", '$http', 'LoginService',
        LoginController
    ]);
    
    myApp.service('LoginService', function() {
        var _this = this;
        _this.loggedIn = false;
    });
    
    function LoginController($scope, $log, $http, LoginService) {
        $scope.user = {
            email: '',
            password: ""
        };
        
        $scope.loggedIn = LoginService.loggedIn;
        
        $scope.errorMessage = "";
        
        $scope.login = function () {
			console.log($scope.user);
			$http.post(
				'login.php',
				$scope.user
			).then(function successCallback(response) {
				console.log(response.data);
                LoginService.loggedIn = true;
                $scope.loggedIn = true;
			}, function errorCallback(response) {
				console.error(response);
                $scope.errorMessage = "Failed to login.";
			});
		}
        $scope.createAccount = function () {
			console.log($scope.user);
			$http.post(
				'register.php',
				$scope.user
			).then(function successCallback(response) {
				console.log(response.data);
                LoginService.loggedIn = true;
                $scope.loggedIn = true;
			}, function errorCallback(response) {
				console.error(response);
                $scope.errorMessage = "Failed to create account.";
			});
		}
        
        $scope.logout = function () {
            LoginService.loggedIn = false;
            $scope.loggedIn = false;
        }
    }
    
})();