(function() {
'use strict';

    /**
     * @ngdoc function
     * @name angularGanttDemoApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the angularGanttDemoApp
     */
    angular.module('ng-starter')
        .controller('MoviesController', MoviesController);

    MoviesController.$inject = ['$scope', '$state', '$timeout', '$log']; 

    function MoviesController($scope, $state, $timeout, $log) {
    }
})();