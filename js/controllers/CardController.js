angular.module('words')
.controller('CardController', function ($scope, $stateParams, LetterService) {
        var getCards = LetterService.getCards($stateParams);
        if(getCards) {
            getCards.then( angular.bind(this, function (response) {
               $scope.cards = response;
            }) );
        }

        $scope.shorten = function(str) {
            if(str.length > 120) {
                return str.substr(0, 122)+ ". . .";
            }
            return str;
        }
    });