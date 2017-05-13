// (function() {
//     'use strict';

//     var movies = angular.module('ng-starter.movies', [
//         'ng-starter.services',
//         'ng-starter.vendor'
//     ]);

//     movies.config(config);

//     function config($stateProvider, $translatePartialLoaderProvider) {
//         $stateProvider.state('ngstarter.movies', {
//                 url: '/movies',
//                 data: {
//             		pageTitle: "Movies"
//                 },
//                 views: {
//                     'content@': {
//                         templateUrl: 'app/movies/movies.html',
//                         controller: 'MoviesController',
//                         controllerAs: 'vm'
//                     }
//                 }
//         });
//     }
// })();

(function () {
    'use strict';

    /** @namespace ng-starter.movies */
    var movies = angular.module('ng-starter.movies', [
        'ng-starter.services',
        'ng-starter.vendor'
    ]);

    movies.config(config)

    /**
     * ng-starter.movies config function.
     * @param {$stateProvider} $stateProvider
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($stateProvider,$translatePartialLoaderProvider) {
        $stateProvider
            .state('ngstarter.movies', {
                url: '/movies',
                views: {
                    'main': {
                        controller: 'MoviesController',
                        templateUrl: '/app/movies/movies.html',
                        controllerAs: 'vm'
                    }
                }
            });
    }

})();
