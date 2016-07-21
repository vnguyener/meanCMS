angular
    .module('main')
    .factory('customer-add.service', CustomerAddService);

CustomerAddService.$inject = ['$http'];

function CustomerAddService($http) {
    var factory = {};

    return factory;
}