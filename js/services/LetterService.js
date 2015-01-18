angular.module('words')
    .factory('LetterService', function($q, $http) {
        var exports = {};

        exports.getCards = function(params) {
            var deferred = $q.defer();
            $http.get('json/' + params.id.toLowerCase() + '.json')
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };

        exports.selectLetter = function(letter) {
            exports.selectedLetter = letter;
            console.log(letter)
        };



        return exports;
    });