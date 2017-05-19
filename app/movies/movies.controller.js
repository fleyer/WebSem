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

    MoviesController.$inject = ['$scope', '$state', '$timeout', '$log','FuzekiService']; 

    function MoviesController($scope, $state, $timeout, $log, FuzekiService){
		
		var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

		var marker;
		
		FuzekiService.getCount().then(function(response){
			var random = getRandomArbitrary(0,response.data.results.bindings[0].count.value-1);
			var loc;
			FuzekiService.getRandom(random).then(function(response2){
				var map;
				map = initMap();
				
				$scope.title = response2.data.results.bindings[0].title.value;
				
				response2.data.results.bindings.forEach(function(elem){
					loc = showMarkerPlace(parseFloat(elem.latitude.value),parseFloat(elem.longitude.value),map);
				});
				
				map.panTo(loc);
			});
		});
		
			/**
		 * Returns a random number between min (inclusive) and max (exclusive)
		 */
		function getRandomArbitrary(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		}

		function initMap() {
			
			return new google.maps.Map(document.getElementById('map'), {
				zoom:8,
				center:{lat: 43.6, lng:1.4333},
				mapTypeId: 'roadmap',
				scrollwheel: false
			});
			
		};
		
		function showMarkerPlace(latitude,longitude,p_map) {
			
			var loc;
			var marker;
			
			loc = new google.maps.LatLng(latitude,longitude);
			
			marker = new google.maps.Marker({
				position: loc,
				map: p_map
			});
			
			return loc;
			
		};
	
    }
	
	
	
})();