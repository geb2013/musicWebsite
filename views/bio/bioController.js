(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('BioController', ['$scope', '$log',
        BioController
    ]);
    
    var bios = {
        john: {
            name: 'John Immo',
            content: 'Description of John.',
            picture: 'images/Immo.jpg'
        },
        van: {
            name: 'Van',
            content: 'Description of Van.',
            picture: 'images/Van.jpg'
        },
        jane: {
            name: 'Jane',
            content: 'Description of Jane.',
            picture: 'images/Jane.jpg'
        }
    }
    
    function BioController($scope, $log) {
        $scope.bios = bios;
        
        $scope.setBio = function(person) {
            $scope.selected = person;
        }
    }
    
})();