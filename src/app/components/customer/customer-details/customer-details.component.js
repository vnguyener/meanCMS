angular
    .module("main")
    .component("customerDetails", {
        templateUrl: "views/customer/customer-details/customer-details.template.html",
        controller: CustomerDetailsController
    });

CustomerDetailsController.$inject = ["customer-details.service", "$routeParams"];

function CustomerDetailsController(customerDetailsService, $routeParams) {
    var self = this;

    self.customer = {};
    self.house = {};
    self.rooms = [];

    self.params = $routeParams;

    self.$onInit = function () {
        if (self.params) {
            getCustomerDetails(self.params.id);
        }
    };

    var getCustomerDetails = function (id) {
        customerDetailsService.getCustomerByID(id)
            .then(function (response) {
                self.customer = response.data;
                getHomeDetails(self.customer.id, getRooms);
            }, function (err) {
                throw new Error(err.message);
            });
    };

    var getHomeDetails = function (id, callback) {
        customerDetailsService.getHomeByCustomerId(id)
            .then(function (response) {
                self.house = response.data;
                callback(self.house.homeID);
            }, function (err) {
                throw new Error(err.message);
            });
    };

    var getRooms = function (id) {
        customerDetailsService.getRoomsByHomeId(id)
            .then(function (response) {
                self.rooms = response.data;
            }, function (err) {
                throw new Error(err.message);
            });
    }
}