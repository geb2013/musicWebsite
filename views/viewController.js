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
            avatar: 'images/home.svg',
            siteUrl: '',
            templateUrl: './views/home/homePage.html'
        },
        {
            name: 'Browse',
            avatar: 'images/search.svg',
            siteUrl: 'browse',
            templateUrl: './views/browse/browsePage.html'
        },
        {
            name: 'Cart',
            avatar: 'images/shopping_cart.svg',
            siteUrl: 'cart',
            templateUrl: './views/cart/cartPage.html'
        },
        {
            name: 'John',
            avatar: 'svg-2',
            siteUrl: 'john',
            templateUrl: './views/john/johnPage.html'
        },
        {
            name: 'Van',
            avatar: 'svg-1',
            siteUrl: 'van',
            templateUrl: './views/van/vanPage.html'
        },
        {
            name: 'Jane',
            avatar: 'svg-3',
            siteUrl: 'jane',
            templateUrl: './views/jane/janePage.html'
        },
        {
            name: 'Login',
            avatar: 'images/account_circle.svg',
            siteUrl: 'login',
            templateUrl: './views/login/loginPage.html'
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

        self.selected       = null;
        self.views          = views;
        self.navigateToPage = navigateToPage;
        self.selectView     = selectView;
        self.toggleList     = toggleViewsList;

        
        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleViewsList() {
            $mdSidenav('left').toggle();
        }
        
        function navigateToPage (url) {
            for (var i = 0; i < self.views.length; i++) {
                if (url == self.views[i].siteUrl) {
                    selectView(self.views[i]);
                    break;
                }
            }
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectView ( view ) {
            self.selected = view;
            window.location.hash = "/" + view.siteUrl;
        }
        
    }

})();
