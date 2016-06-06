(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('BrowseController', ['$scope', '$log', '$http', 'LoginService',
        BrowseController
    ]);
	
    var albums = [];
    
    function BrowseController($scope, $log, $http, LoginService) {
        $scope.albums = albums;
        $scope.loggedIn = LoginService.loggedIn;
        
        if ($scope.loggedIn) {
            $http.get( 
                'getsongrelationships.php'
            ).then(function successCallback(response) {
                $scope.albums = response.data;
            }, function errorCallback(response) {
                console.error(response);
            });
        }
		
        $scope.addToCart = function(item, isSong) {
			item.isSong = isSong;
			$http.post(
				'addtocart.php',
				item
			).then(function successCallback(response) {
				console.log(response.data);
			}, function errorCallback(response) {
				console.error(response);
			});
            item.status = 1;
        }
		
		$scope.download = function(song) {
			window.location='downloadsong.php?song=' + song.id;
		}
		
		$scope.albumAllSongsBought = function(album) {
			for (var i = 0; i < album.songs.length; i++) {
				if (album.songs[i].status != 2)
					return false;
			}
			return true;
		}
    }
    
})();