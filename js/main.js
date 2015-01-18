
angular.module('words', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .state('letter', {
                url: '/:id',
                templateUrl: 'views/cards.html',
                controller: 'CardController'
            })
    });
