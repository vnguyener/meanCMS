angular
    .module("main")
    .factory("customer-summary.service", CustomerSummaryService);

CustomerSummaryService.$inject = ["$http", "$log"];

function CustomerSummaryService($http, logger) {

    return {
        saveHomeInfo: saveHomeInfo,
        saveCustomerInfo: saveCustomerInfo
    };

    function saveHomeInfo(data) {
        return $http.post("/api/house/save", data)
            .then(onComplete, onError);

        function onComplete(response) {
            return response.data;
        };

        function onError(error) {
            logger.error(error.data);
        };
    };

    function saveCustomerInfo(data) {
        return $http.post("/api/customer/save", data)
            .then(onComplete, onError);

        function onComplete(response) {
            return response.data;
        };

        function onError(error) {
            logger.error(error.data);
        };
    };
}