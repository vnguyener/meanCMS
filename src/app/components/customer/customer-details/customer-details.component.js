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
    self.params = $routeParams;

    self.$onInit = function () {
        if (self.params) {
            getCustomerDetails(self.params.id, getHomeDetails);
        }
    }

    var getCustomerDetails = function (id, callback) {
        customerDetailsService.getCustomerByID(id)
            .then(function (data) {
                self.customer = data.data;
                callback(self.customer.homeID);
            }, function (error) {
                throw new Error(error);
            });
    }

    var getHomeDetails = function (id) {
        customerDetailsService.getHomeByCustomerHomeId(id)
            .then(function (data) {
                self.house = data.data;
            }, function (err) {
                throw new Error(err);
            })
    }
}