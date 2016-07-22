angular
    .module('main')
    .factory('customer-add.service', CustomerAddService);

CustomerAddService.$inject = ['$http'];

function CustomerAddService($http) {
    var factory = {};

    //todo: possible have service methods to retrieve dropdown data & address validation-y things
    
    return factory;
}