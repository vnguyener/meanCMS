angular
    .module('main')
    .factory('customer-details.service', CustomerDetailsService);

CustomerDetailsService.$inject = ['$http'];

function CustomerDetailsService($http) {
    var factory = {};

    return factory;
};