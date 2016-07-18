angular
    .module('main')
    .component('customerList', {
        templateUrl: 'views/customer/customer-list/customer-list.template.html',
        controller: CustomerListController
    });

CustomerListController.$inject = ['customer-list.service'];

function CustomerListController() {
    var self = this;
    
    self.customers = [
        {
            id: 1,
            name: 'Bob Builder'
        },
        {
            id: 2,
            name: 'Dora Explora'
        }
    ];

    self.$onInit = function() {
    };

    self.viewCustomerDetails = function() {
    };
};