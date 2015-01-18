angular.module('words')
    .directive('letterList', function() {
        return {
            templateUrl: 'js/directives/letters.tmpl.html',
            controller: 'HomeController'
        }
    });