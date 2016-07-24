angular
    .module("main")
    .factory("customer-add.service", CustomerAddService);

CustomerAddService.$inject = ["$http"];

function CustomerAddService($http) {

    return {
        //todo: possible have service methods to retrieve dropdown data & address validation-y things
    };

}