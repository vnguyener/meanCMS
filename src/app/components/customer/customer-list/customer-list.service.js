angular
    .module('main')
    .factory('customer-list.service', CustomerListService);

CustomerListService.$inject = ['$http'];

function CustomerListService($http) {

    return {
        getCustomerList: getCustomerList
    };

    function getCustomerList() {
        return $http.get('/api/customers');
    };
};