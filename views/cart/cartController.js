(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('CartController', ['$scope', '$log',
        CartController
    ]);
    
    // Populate this list from database
    var items = [
        { 
            title: 'Porcelain (Album)',
            status: 1,
            price: 10
        },
        { 
            title: 'Icepatch',
            status: 1,
            price: 1
        },
        { 
            title: 'Got The Time',
            status: 1,
            price: 1
        },
        { 
            title: 'My Old Girlfriend',
            status: 1,
            price: 1
        },
        { 
            title: 'So Cool',
            status: 1,
            price: 1
        },
        { 
            title: 'Creeps',
            status: 1,
            price: 1
        }
    ];
    
    function CartController($scope, $log) {
        $scope.items = items;
        $scope.numItems = getNumItems($scope.items);
        
        $scope.removeFromCart = function(item) {
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
        for(var i = 0; i < itemList.length; i++) {
            if (itemList[i].status == 1) {
                count++
            }
        }
        return count;
    }
})();