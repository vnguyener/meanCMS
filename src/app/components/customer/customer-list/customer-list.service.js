angular
    .module('main')
    .factory('customer-list.service', CustomerListService);

CustomerListService.$inject = ['$http'];

function CustomerListService($http) {
    var factory = {};

    return factory;
};