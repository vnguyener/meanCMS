angular
    .module('main')
    .component('customerDetails', {
        templateUrl: 'views/customer/customer-details/customer-details.template.html',
        controller: CustomerDetailsController
    });

CustomerDetailsController.$inject = ['customer-details.service', '$routeParams'];

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
                getHomeDetails(self.customer.homeID);
                getRooms(self.customer.homeID);
            }, function (error) {
                throw new Error(error);
            });
    };

    var getHomeDetails = function (id) {
        customerDetailsService.getHomeByCustomerHomeId(id)
            .then(function (response) {
                self.house = response.data;
            }, function (err) {
                throw new Error(err);
            });
    };

    var getRooms = function (id) {
        customerDetailsService.getRoomsByCustomerHomeId(id)
            .then(function (response) {
                self.rooms = response.data;
            }, function (err) {
                throw new Error(err);
            });
    }
}