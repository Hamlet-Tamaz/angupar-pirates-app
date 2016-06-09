(function() {
	
angular
	.module("angular-pirates-app", ["ngRoute"])
	.config(config);

function config($routeProvider, $locationProvider){
	    $routeProvider
	        .when("/pirates", {
	            templateUrl: "../views/pirates/index.html",
	            controller: "homeController",
	            controllerAs: 'home',
				resolve: {
					pirates: getAllPirates
				}
	        })
	        .when('/pirates/new', {
	        	templateUrl: "../views/pirates/new.html",
	        	controller: 'newPirateController',
	        	controllerAs: 'new'
	        })
	        .when('/pirates/edit/:id', {
	        	templateUrl: '../views/pirates/edit.html',
	        	controller: 'editPirateController',
				controllerAs: 'edit'
	        })
	        .otherwise({redirectTo: '/pirates'})
	$locationProvider.html5Mode(true);
}

function getAllPirates(PirateServices) {
	return PirateServices.getPirates();
}

getAllPirates.$inject = ['PirateServices']


})()
