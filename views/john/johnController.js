(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('JohnController', ['$scope', '$log',
        JohnController
    ]);
    
    var albums = [
        {
            name: 'Porcelain',
            image: 'svg-1',
            color: '#8BC34A',
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
            image: 'svg-1',
            color: '#FFC107',
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
            image: 'svg-1',
            color: '#607D8B',
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
    
    function JohnController($scope, $log) {
        $scope.albums = albums;
    }
    
})();