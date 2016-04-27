(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('BrowseController', ['$scope', '$log',
        BrowseController
    ]);
    
    var albums = [
        {
            name: 'Porcelain',
            image: 'porcelain_cover.jpg',
            color: '#8BC34A',
            collapsed: false,
            status: 0,
            songs: [
                { 
                    title: 'Hard To Find',
                    fileName: '01 Hard to Find.m4a',
                    status: 0
                },
                { 
                    title: 'Icepatch',
                    fileName: '02 Icepatch.m4a',
                    status: 0
                },
                { 
                    title: 'Got The Time',
                    fileName: '03 Got The Time.m4a',
                    status: 0
                },
                { 
                    title: 'My Old Girlfriend',
                    fileName: '04 My Old Girlfriend.m4a',
                    status: 0
                },
                { 
                    title: 'So Cool',
                    fileName: '05 So Cool.m4a',
                    status: 0
                },
                { 
                    title: 'Creeps',
                    fileName: '06 Creeps.m4a',
                    status: 0
                }
            ]
        },
        {
            name: 'Rip',
            image: 'rip_cover.jpg',
            color: '#FFC107',
            collapsed: false,
            status: 0,
            songs: [
                { 
                    title: 'Misery',
                    fileName: '01 Misery.m4a',
                    status: 0
                },
                { 
                    title: 'Hard To Find',
                    fileName: '02 Hard To Find.m4a',
                    status: 0
                }
            ]
        },
        {
            name: 'Royal Palace',
            image: 'royal_palace_cover.jpg',
            color: '#607D8B',
            collapsed: false,
            status: 0,
            songs: [
                { 
                    title: 'Another In A Million',
                    fileName: '01 Another In A Million.m4a',
                    status: 0
                },
                { 
                    title: 'Living Dead Again',
                    fileName: '02 Living Dead Again.m4a',
                    status: 0
                }
            ]
        },
    ];
    
    function BrowseController($scope, $log) {
        $scope.albums = albums;
        
        $scope.addToCart = function(item) {
            item.status = 1;
        }
    }
    
})();