'use strict'

angular
    .module('main')
    .factory('login.service', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {
  var contacts = $http.get('api/User/1').then(function (res) {
    return res.data;
  });

  var factory = {};

  factory.all = function () {
    return contacts;
  };

  factory.get = function (id) {
    return contacts.then(function(){
      return utils.findById(contacts, id);
    })
  };

  return factory;
}