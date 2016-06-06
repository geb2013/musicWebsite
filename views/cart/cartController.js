(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('CartController', ['$scope', '$log', '$http', 'LoginService',
        CartController
    ]);
	
    // Populate this list from database
    var items = [];
    
    function CartController($scope, $log, $http, LoginService) {
		$scope.items = items;
        $scope.loggedIn = LoginService.loggedIn;
        
        if ($scope.loggedIn) {
            $http.get(
                'getcart.php'
            ).then(function successCallback(response) {
                console.log(response.data);
                $scope.items = response.data;
                $scope.numItems = getNumItems($scope.items);
            }, function errorCallback(response) {
                console.error(response);
            });
        }
        
        $scope.removeFromCart = function(item) {
			console.log(item);
			$http.post(
				'removefromcart.php',
				item
			).then(function successCallback(response) {
				console.log(response.data);
			}, function errorCallback(response) {
				console.error(response);
			});
			
            item.status = 0;
            $scope.numItems = getNumItems($scope.items);
        }
        
        $scope.checkout = function() {
            //Generate Paypal token in backend then navigate to:
            //https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=tokenValue
        }
        
        $scope.myFunc = function () {
            $scope.myTxt = "You clicked submit!";
        }
        
        $scope.inCart = {
            status: 1
        }
    }
    
    function getNumItems(itemList) {
        var count = 0;
		console.log(itemList.length);
        for(var i = 0; i < itemList.length; i++) {
            if (itemList[i].status == 1) {
                count++;
            }
        }
        return count;
    }
})();