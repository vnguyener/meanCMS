angular
    .module("main")
    .component("customerList", {
        templateUrl: "views/customer/customer-list/customer-list.template.html",
        controller: CustomerListController
    });

CustomerListController.$inject = ["customer-list.service", "$location"];

function CustomerListController(customerListService, $location, auth) {
    var self = this;

    self.customers = [];

    self.$onInit = function () {
        self.getCustomerList();
    };

    self.getCustomerList = function () {
        customerListService.getCustomerList()
            .then(function (response) {
                self.customers = response;
            });
    };

    self.viewCustomerDetails = function (id) {
        $location.path("/customer/" + id);
    };

    self.addNewCustomer = function () {
        $location.path("/customer/new");
    };
};