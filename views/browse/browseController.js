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
            songs: [
                { 
                    title: 'Hard To Find',
                    fileName: '01 Hard to Find.m4a'
                },
                { 
                    title: 'Icepatch',
                    fileName: '02 Icepatch.m4a'
                },
                { 
                    title: 'Got The Time',
                    fileName: '03 Got The Time.m4a'
                },
                { 
                    title: 'My Old Girlfriend',
                    fileName: '04 My Old Girlfriend.m4a'
                },
                { 
                    title: 'So Cool',
                    fileName: '05 So Cool.m4a'
                },
                { 
                    title: 'Creeps',
                    fileName: '06 Creeps.m4a'
                }
            ]
        },
        {
            name: 'Rip',
            image: 'rip_cover.jpg',
            color: '#FFC107',
            collapsed: false,
            songs: [
                { 
                    title: 'Misery',
                    fileName: '01 Misery.m4a'
                },
                { 
                    title: 'Hard To Find',
                    fileName: '02 Hard To Find.m4a'
                }
            ]
        },
        {
            name: 'Royal Palace',
            image: 'royal_palace_cover.jpg',
            color: '#607D8B',
            collapsed: false,
            songs: [
                { 
                    title: 'Another In A Million',
                    fileName: '01 Another In A Million.m4a'
                },
                { 
                    title: 'Living Dead Again',
                    fileName: '02 Living Dead Again.m4a'
                }
            ]
        },
    ];
    
    function BrowseController($scope, $log) {
        $scope.albums = albums;
    }
    
})();