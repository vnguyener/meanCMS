angular
    .module("main")
    .factory("customer-details.service", CustomerDetailsService);

CustomerDetailsService.$inject = ["$http", "$log"];

function CustomerDetailsService($http, logger) {

    return {
        getCustomerByID: getCustomerByID,
        getHomeByCustomerId: getHomeByCustomerId,
        getRoomsByHomeId: getRoomsByHomeId
    };

    function getCustomerByID(id) {
        return $http.get("/api/customer/" + id)
            .then(onComplete, onError);

        function onComplete(response) {
            return response.data;
        };

        function onError(error) {
            logger.error(error.data);
        };
    };

    function getHomeByCustomerId(id) {
        return $http.get("/api/house/" + id)
            .then(onComplete, onError);

        function onComplete(response) {
            return response.data;
        };

        function onError(error) {
            logger.error(error.data);
        };
    };

    function getRoomsByHomeId(id) {
        return $http.get("/api/house/" + id + "/rooms")
            .then(onComplete, onError);

        function onComplete(response) {
            return response.data;
        };

        function onError(error) {
            logger.error(error.data);
        };
    };
};