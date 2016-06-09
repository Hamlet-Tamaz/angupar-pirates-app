(function() {
	angular
		.module('angular-pirates-app')
		.component('gsPirateShow', {
				bindings: {
					pirate: "<"
				}, 
				templateUrl: '../views/pirates/show.html',
				// transclude: true,
				controller: 'showPirateController',
				controllerAs: 'show'
		});
})()