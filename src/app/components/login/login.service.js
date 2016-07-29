angular
	.module("main")
	.factory("login.service", LoginService);

LoginService.$inject = ["$http", "$q", "$log"];

function LoginService($http, $q, logger) {

	return {
		login: login
	};

	function login(email, password) {
		return $http.post("/api/user/authenticate", { email: email, password: password })
			.then(onComplete, onError);

		function onComplete(response) {
			return response.data;
		};

		function onError(error) {		
			return $q.reject(error);
		};
	};
}