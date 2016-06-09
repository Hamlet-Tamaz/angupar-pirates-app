(function() {
	angular
	.module('angular-pirates-app')
	.service('PirateServices', PirateServices)

	function PirateServices($http) {
		const BASE_URL = '/api/pirates'

		this.getPirates = function() {
			return $http.get(BASE_URL)
		}

		this.createPirate = function(newPirate) {
			return $http.post(BASE_URL, newPirate)
		}
		this.getPirate = function(id) {
        	return $http.get(BASE_URL + '/' + id);
        }

        this.deletePirate = function(id) {
        	return $http.delete(BASE_URL + '/' + id);
        }

        this.updatePirate = function(pirate) {
        	debugger
        	return $http.put(BASE_URL + '/' + pirate.pirate.id, pirate)
        }
    

    	PirateServices.$inject = ["$http"];

	}
	
})()