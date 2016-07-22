angular
    .module('main')
    .factory('customer-summary.service', CustomerSummaryService);

CustomerSummaryService.$inject = ['$http'];

function CustomerSummaryService($http) {
    var factory = {};

    //todo: save method

    return factory;
}