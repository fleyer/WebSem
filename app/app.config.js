(function () {
    'use strict';

    /** @namespace ng-starter */
    var ngStarter = angular.module('ng-starter', [
        'ng-starter.services',
        'ng-starter.directives',
        'ng-starter.main',
        'ng-starter.header',
        'ng-starter.footer',
        'ng-starter.sidemenu',
        'ng-starter.vendor',
        'ng-starter.index'
        ,
        'ng-starter.movies'
    ]);

    ngStarter.config(config);

    /**
     * ng-starter application config.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     * @param {$translateProvider} $translateProvider
     * @param {$provide} $provide
     * @param {$logProvider} $logProvider
     * @param {$compileProvider} $compileProvider
     */
    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, $translateProvider, $provide, $logProvider, $compileProvider) {

        //Disable the log messages.
        $logProvider.debugEnabled(false);

        //Disable the debug info.
        $compileProvider.debugInfoEnabled(false);

        //Register the exception handler.
        $provide.decorator('$exceptionHandler', exceptionHandler);

        //Register the abstract states.
        registerStates($stateProvider, $urlRouterProvider);

        //Register translations.
        $translateProvider.useLoader('$translatePartialLoader', {urlTemplate: 'app/{part}/localizations/{lang}.json'});
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage('en-US');
    }

    /**
     * Register the abstract application-wide states.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     */
    /* @ngInject */
    function registerStates($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('ngstarter', {
                abstract: true,
                views: {
                    '': {
                        controller: 'MainController',
                        templateUrl: '/app/main/main.html',
                        controllerAs: 'vm'
                    },
                    'header@': {
                        controller: 'HeaderController',
                        templateUrl: '/app/header/header.html',
                        controllerAs: 'vm'
                    },
                    'footer@': {
                        controller: 'FooterController',
                        templateUrl: '/app/footer/footer.html',
                        controllerAs: 'vm'
                    }
                }
            });

        //Default url.
        $urlRouterProvider.otherwise('/index/home');
    }

    /**
     * Angular global exception handler.
     * @param {exceptionService} exceptionService
     */
    /* @ngInject */
    function exceptionHandler(exceptionService) {
        return function (exception, cause) {
            exceptionService.handle(exception, cause);
        };
    }
})();
