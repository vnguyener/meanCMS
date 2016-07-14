'use strict'

angular
    .module('main')
    .factory('login.service', LoginService);

LoginService.$inject = ['$http', 'utils.service'];

function LoginService($http, utils) {
  var contacts = $http.get('').then(function (resp) {
    return resp.data.contacts;
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