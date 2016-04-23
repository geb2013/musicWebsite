(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('HomeController', ['$scope', '$log',
        HomeController
    ]);
    
    var shortcuts = [
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
        },
        {
            name: 'John',
            image: 'phone.svg',
            color: '#8BC34A',
            url: 'john'
        },
        {
            name: 'Van',
            image: 'mail.svg',
            color: '#FFC107',
            url: 'van'
        },
        {
            name: 'Jane',
            image: 'hangouts.svg',
            color: '#607D8B',
            url: 'jane'
        }
    ];
    
    function HomeController($scope, $log) {
        $scope.shortcuts = shortcuts;
        $scope.random = "testing"
    }
    
})();