angular
    .module("main")
    .factory("customer-summary.service", CustomerSummaryService);

CustomerSummaryService.$inject = ["$http"];

function CustomerSummaryService($http) {

    return {
        saveHomeInfo: saveHomeInfo,
        saveCustomerInfo: saveCustomerInfo
    };

    function saveHomeInfo(data) {
        return $http.post("/api/house/save", data);
    };

    function saveCustomerInfo (data) {
        return $http.post("/api/customer/save", data);
    };
}