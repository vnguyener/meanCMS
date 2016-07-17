'use strict'

angular
    .module('main')
    .factory('login.service', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {

  var factory = {};

  factory.login = function (email, password) {
    console.log('login service');
    return $http.post('/api/user/authenticate', {email: email, password: password});
  };

  return factory;
}