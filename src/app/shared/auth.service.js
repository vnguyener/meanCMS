angular
	.module("main")
	.factory("authService", AuthService);

AuthService.$inject = ["$http", "$q", "$log", "$location", "$cookies"];

//todo: extract locationing out of service move into a broadcast of sorts.... or just a httpprovidor.interceptor
function AuthService($http, $q, logger, $location, $cookies) {

	return {
		getUser: getUser
	};

	function getUser() {
		return $http.get("/auth")
			.then(onComplete, onError);

		function onComplete(response) {
			return response.data;
		};

		function onError(error) {
			$location.path("/");
		};	
    };
}