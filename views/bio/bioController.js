(function(){
    'use strict';
    
    var myApp = angular.module('myApp');
    
    myApp.controller('BioController', ['$scope', '$log', '$sce',
        BioController
    ]);
    
    var bios = {
        john: {
            name: 'John Immo',
            picture: 'images/Immo.jpg',
            content: "<div>John Immonen was born on December 1, 1967.  He was a taken from us in 2009, far too soon.  This website was established to keep him in our hearts.<br><br>" +
            "First and foremost, Immo was a great husband and father.  Family meant everything to him – his beautiful wife, Claire, his children, Van and Jane, his wonderful parents, Dave and Pat, his loving sister, Kathy his brother, David, his sister-in-law, Kathleen, and his nephews and nieces – you couldn’t have a conversations with him without them coming up.  For those of us who were fortunate enough to know him, you know that Immo was as kind and generous to everyone.  For those who did not know him, I have this to say: Being around him, you felt part of his family…he was that genuine.<br><br>" +
            "Oh – and he was also a great guitar player, singer, and song-writer.  His bands in his hometown of Greenville, Pennsylvania, at the University of Notre Dame, and in Chicago (Tarnations, Two-Fisted Cool, and Wotan) drew loyal followings.  Heart-felt lyrics, shredding solos, and a high-energy tempo…makes me sweat just thinking about it!<br><br>" +
            "You can purchase Immo’s Music here at this website.  There are three releases (“Porcelain” and “Rip” from Tarnations and “Royal Palace” from Two-Fisted Cool) available as singles, albums, or the whole collection.  All revenue generated through this effort will be placed in trust for his children.<br><br>" +
            "Thank you for your support,<br><br>" +
            "Friends of Immo</div>"
        },
        van: {
            name: 'Van',
            picture: 'images/Van.jpg',
            content: "Van Immonen is Immo’s older child.  He was born with Spina Bifida and Un-shunted Hydrocephalus, but that barely slowed him down.  Wise and witty, he loves the Cubs and the Blackhawks and even plays on a champion-level sled hockey team.  He is a great-looking kid, too – obviously he gets that from his mom!"
        },
        jane: {
            name: 'Jane',
            picture: 'images/Jane.jpg',
            content: "Jane Immonen is as sweet as can be and as pretty as a button.  She loves her older brother and her mom and her grandparents and being in First Grade and being 7 1/2 and her 4 cats and the beach and ice skating and…and…and…and she can’t wait to be eight next year."
        }
    }
    
    function BioController($scope, $log, $sce) {
        $scope.bios = bios;
        if (typeof bios.john.content == "string") {
            $scope.bios.john.content = $sce.trustAsHtml(bios.john.content);
            $scope.bios.van.content = $sce.trustAsHtml(bios.van.content);
            $scope.bios.jane.content = $sce.trustAsHtml(bios.jane.content);
        }
        
        $scope.setBio = function(person) {
            $scope.selected = person;
        }
        
        //SET THIS TO ALLOW EDIT
        $scope.isAdmin = false;
        
        $scope.modify = false;
        
        $scope.startEdit = function() {
            $scope.modify = $scope.isAdmin;
        }
        
        $scope.saveContent = function(person) {
            var textElement = document.getElementById("modify-textarea");
            $scope.selected.content = $sce.trustAsHtml(textElement.value);
            
            $scope.modify = false;
        }
        
        $scope.cancel = function() {
            $scope.modify = false;
        }
        
        $scope.changePicture = function() {
            var fileInput = document.getElementById('file-input');
            fileInput.onchange = function () {
                // Use this.files[0] to access the selected file
            };
        }
 
    }
    
})();