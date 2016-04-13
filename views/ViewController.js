(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('ViewController', 
                          ['$mdSidenav', '$mdBottomSheet', '$log', '$q',
        ViewController
    ]);
    
    var views = [
        {
            name: 'Home',
            avatar: '',
            siteUrl: '',
            templateUrl: './views/home/homePage.html',
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        },
        {
            name: 'Browse',
            avatar: '',
            siteUrl: 'browse',
            templateUrl: './views/browse/browsePage.html',
            content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
        },
        {
            name: 'John',
            avatar: 'svg-2',
            siteUrl: 'john',
            templateUrl: './views/john/johnPage.html'
        },
        {
            name: 'Van',
            avatar: 'svg-2',
            siteUrl: 'van',
            templateUrl: './views/van/vanPage.html'
        },
        {
            name: 'Jane',
            avatar: 'svg-3',
            siteUrl: 'jane',
            templateUrl: './views/jane/janePage.html'
        }
    ];
    
    myApp.config(['$routeProvider',
        function($routeProvider) {
            for (var i = 0; i < views.length; i++) {
                $routeProvider.when('/' + views[i].siteUrl, {
                    templateUrl: views[i].templateUrl,
                    controller: views[i].controller,
                    caseInsensitiveMatch: true
                });
            }

            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    ]);

    /**
    * Main Controller for the Angular Material Starter App
    * @param $scope
    * @param $mdSidenav
    * @param avatarsService
    * @constructor
    */
    function ViewController( $mdSidenav, $mdBottomSheet, $log) {
        var self = this;

        self.selected     = null;
        self.views        = views;
        self.selectView   = selectView;
        self.toggleList   = toggleViewsList;

        
        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleViewsList() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectView ( view ) {
            self.selected = angular.isNumber(view) ? $scope.views[view] : view;
            window.location.hash = "/" + view.siteUrl;
        }
        
    }

})();
