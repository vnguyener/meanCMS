angular
    .module('main')
    .factory('customer-details.service', CustomerDetailsService);

CustomerDetailsService.$inject = ['$http'];

function CustomerDetailsService($http) {

    return {
        getCustomerByID: getCustomerByID,
        getHomeByCustomerId: getHomeByCustomerId,
        getRoomsByHomeId: getRoomsByHomeId
    };

    function getCustomerByID(id) {
        return $http.get('/api/customer/' + id);
    };

    function getHomeByCustomerId(id) {
        return $http.get('/api/house/' + id);
    };

    function getRoomsByHomeId(id) {
        return $http.get('/api/house/' + id + '/rooms')
    };
};