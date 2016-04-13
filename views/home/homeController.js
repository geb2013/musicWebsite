(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('HomeController', ['$scope', '$log',
        HomeController
    ]);
    
    var shortcuts = [
        {
            name: 'John',
            image: 'phone.svg',
            color: '#8BC34A'
        },
        {
            name: 'Van',
            image: 'mail.svg',
            color: '#FFC107'
        },
        {
            name: 'Jane',
            image: 'hangouts.svg',
            color: '#607D8B'
        },
        {
            name: 'Porcelain',
            image: 'porcelain_cover.jpg',
            color: '#8BC34A'
        },
        {
            name: 'Rip',
            image: 'rip_cover.jpg',
            color: '#FFC107'
        },
        {
            name: 'Royal Palace',
            image: 'royal_palace_cover.jpg',
            color: '#607D8B'
        }
    ];
    
    function HomeController($scope, $log) {
        $scope.shortcuts = shortcuts;
    }
    
})();