(function(){
    'use strict';
    
    var viewModule = angular.module('views', [ 'ngMaterial', 'ngRoute' ]);
    
    viewModule.controller('ViewController', ['$mdSidenav', '$mdBottomSheet', '$log', '$q',
        ViewController
    ]);
    
    var views = [
        {
            name: 'Home',
            avatar: 'svg-1',
            siteUrl: '',
            templateUrl: './views/homePage.html',
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        },
        {
            name: 'Browse',
            avatar: 'svg-2',
            siteUrl: 'browse',
            templateUrl: './views/browsePage.html',
            content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
        },
        {
            name: 'Contact Us',
            avatar: 'svg-3',
            siteUrl: 'contact',
            templateUrl: './views/contactSheet.html',
            content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
        }
    ];
    
    viewModule.config(['$routeProvider',
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
