(function() {
	angular
		.module('angular-pirates-app')
		.controller('homeController', homeController)
		.controller('newPirateController', newPirateController)
		.controller('showPirateController', showPirateController)
		.controller('editPirateController', editPirateController)


		
		
		function homeController($http, pirates){
 			var vm = this;	
			
			vm.pirates = pirates.data;
		}

		function newPirateController($http, PirateServices, $location) {
			var vm = this;
			vm.pirate = {};

			vm.addPirate = function(newPirate) {
				var req = { pirate: newPirate};
				PirateServices.createPirate(req).then(function(res) {
					console.log(res)
					$location.path('/pirates');
				})
			}
		}

		function showPirateController($http, PirateServices, $route, $location) {
			var vm = this;
			console.log("in the show controller")
			vm.removePirate = function(id) {
				PirateServices.deletePirate(id).then(function(res) {
					$route.reload();
				})
			}

		}

		function editPirateController($http, PirateServices, $location, $routeParams) {
			var vm = this;
			
			PirateServices.getPirate($routeParams.id).then(function(pirate) {
				debugger
				vm.pirate = pirate.data;
			})

			vm.updatePirate = function(pirate) {
				debugger
				
				var req = {pirate: pirate}

				PirateServices.updatePirate(req).then(function(res) {
					$location.path('/pirates')
				})
			}

		}


		homeController.$inject = ['$http', 'pirates']
		newPirateController.$inject = ['$http', 'PirateServices', '$location']
		showPirateController.$inject = ['$http', 'PirateServices', '$route', '$location']
		editPirateController.$inject = ['$http', 'PirateServices', '$location', '$routeParams']

})()




