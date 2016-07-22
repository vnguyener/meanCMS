angular
    .module('main')
    .factory('customer-details.service', CustomerDetailsService);

CustomerDetailsService.$inject = ['$http'];

function CustomerDetailsService($http) {
    var factory = {};

    factory.getCustomerByID = function(id) {
        return $http.get('/api/customer/' + id);
    };

    factory.getHomeByCustomerHomeId = function(id) {
        return $http.get('/api/house/' + id);
    };

    return factory;
};