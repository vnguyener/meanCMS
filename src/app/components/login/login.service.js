'use strict'

angular
    .module('main')
    .factory('login.service', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {

  var factory = {};

  factory.login = function () {
    return $http.get('api/authenticate').then(function (res) {
        return res.data;
      })
  };

  return factory;
}