angular.module('words').
    controller('HomeController', function($scope, LetterService) {
        $scope.list = [];
        for(var i = 65; i <= 90; i++) {
            $scope.list.push(String.fromCharCode(i));
        }

        $scope.activeLetter = function(letter) {
            LetterService.selectLetter(letter);
        };

        $scope.isActive = function(letter) {
            return LetterService.selectedLetter == letter;
        }



    });