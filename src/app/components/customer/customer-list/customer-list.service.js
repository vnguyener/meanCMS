angular
    .module('main')
    .factory('customer-list.service', CustomerListService);

CustomerListService.$inject = ['$http'];

function CustomerListService($http) {
    var factory = {};

    factory.getCustomerList = function() {
        return $http.get('/api/customers');
    };

    return factory;
};