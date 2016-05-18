(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('HomeController', ['$scope', '$log',
        HomeController
    ]);
    
    var shortcuts = {
        albums: [
            {
                name: 'Porcelain',
                image: 'porcelain_cover.jpg',
                color: '#8BC34A',
                url: 'browse'
            },
            {
                name: 'Rip',
                image: 'rip_cover.jpg',
                color: '#FFC107',
                url: 'browse'
            },
            {
                name: 'Royal Palace',
                image: 'royal_palace_cover.jpg',
                color: '#607D8B',
                url: 'browse'
            }
        ],
        bios: [
            {
                name: 'John',
                image: 'Immo_2.jpg',
                color: '#8BC34A',
                url: 'john'
            },
            {
                name: 'Van',
                image: 'Van.jpg',
                color: '#FFC107',
                url: 'van'
            },
            {
                name: 'Jane',
                image: 'Jane.jpg',
                color: '#607D8B',
                url: 'jane'
            }
        ]
    };
    
    function HomeController($scope, $log) {
        $scope.shortcuts = shortcuts;
        
        $scope.buyAll = function (viewCtrl) {
            //Add "All songs" to cart
            
            //Redirec to cart
            viewCtrl.navigateToPage('cart');
        }
        
        $scope.buyAlbum = function (viewCtrl, album) {
            //Add album to cart
            
            //Redirect to cart
            viewCtrl.navigateToPage('cart');
        }
    }
    
})();