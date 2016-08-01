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
                self.customer = response;
                if (self.customer && self.customer.id) {
                    getHomeDetails(self.customer.id, getRooms);
                }
            });
    };

    var getHomeDetails = function (id, callback) {
        customerDetailsService.getHomeByCustomerId(id)
            .then(function (response) {
                self.house = response;
                if (self.house && self.house.id) {
                    callback(self.house.id);
                }
            });
    };

    var getRooms = function (id) {
        customerDetailsService.getRoomsByHomeId(id)
            .then(function (response) {
                self.rooms = response;
            });
    }
}