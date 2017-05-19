(function(){
	'use strict';
	
	angular
		.module('ng-starter')
		.service('FuzekiService', FuzekiService);

	FuzekiService.$inject = ['$http'];

	function FuzekiService($http){
		var apiFusekiServer = 'http://127.0.0.1:3030/cinema/query';
		var prefixPayload = '\
		PREFIX owl: <http://www.w3.org/2002/07/owl#> \
		PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \
		prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
		prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> \
		PREFIX : <http://www.semanticweb.org/clement/ontologies/2017/2/untitled-ontology-2#> ';
		
		return{
			getCount: function(){
				var payload = prefixPayload + '\
				  SELECT (count(distinct ?film) as ?count) \
					WHERE { \
					  ?film a ?type. \
					  ?type rdfs:label "Films"@fr. \
					}';

				return requestFusekiServer(payload);
			},
			
			getRandom: function(os){
				var payload = prefixPayload + 
					"SELECT ?title ?latitude ?longitude "+
					"WHERE { "+
						"?film rdfs:label ?title. "+
						"?film ?aPourAdresse ?adresse. "+
						"?adresse ?aPourLatitude ?latitude. "+
						"?adresse ?aPourLongitude ?longitude."+
					  
						"?aPourAdresse rdfs:label 'aPourAdresse'@fr. "+
						"?aPourLongitude rdfs:label 'A pour longitude'@fr. "+
						"?aPourLatitude rdfs:label 'A pour latitude'@fr. "+
						"{"+
							"Select ?film "+
							"Where { "+
								"?film a ?type. "+
								"?type rdfs:label \"Films\"@fr. "+
							"}"+
							"order by ?film offset "+os+" Limit 1 "+
						"}"+
					"}";

				return requestFusekiServer(payload);
			}
		};

		function requestFusekiServer(payload){
			var options ={
				method: 'GET',
				url: apiFusekiServer,
				headers: {'Accept': 'application/sparql-results+json,*/*;q=0.9'},
				params: {query: payload},// Will be urlencoded
			};
			
			return $http(options);
		}
	};
})();