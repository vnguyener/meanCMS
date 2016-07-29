angular
    .module("main")
    .factory("customer-list.service", CustomerListService);

CustomerListService.$inject = ["$http", "$log"];

function CustomerListService($http, logger) {

    return {
        getCustomerList: getCustomerList
    };

    function getCustomerList() {
        return $http.get("/api/customers")
            .then(onComplete, onError);

        function onComplete(response) {
            return response.data;
        };

        function onError(error) {
            logger.error(error.data);
        };
    };
};