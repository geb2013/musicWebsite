(function(){
    'use strict';

    var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

    myApp.config(function($mdThemingProvider, $mdIconProvider){
      $mdIconProvider
          .defaultIconSet("./images/avatars.svg", 128)
          .icon("menu"       , "./images/menu.svg"        , 24)
          .icon("share"      , "./images/share.svg"       , 24)
          .icon("google_plus", "./images/google_plus.svg" , 512)
          .icon("hangouts"   , "./images/hangouts.svg"    , 512)
          .icon("twitter"    , "./images/twitter.svg"     , 512)
          .icon("phone"      , "./images/phone.svg"       , 512);
          $mdThemingProvider.theme('default')
              .primaryPalette('brown')
              .accentPalette('red');
    });
    
    myApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-purple')
            .warnPalette('red');
    });

})();