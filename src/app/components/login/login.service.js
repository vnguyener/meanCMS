angular
  .module("main")
  .factory("login.service", LoginService);

LoginService.$inject = ["$http"];

function LoginService($http) {

  return {
    login: login
  };

  function login(email, password) {
    return $http.post("/api/user/authenticate", { email: email, password: password });
  };
}