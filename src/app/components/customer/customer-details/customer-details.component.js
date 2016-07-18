angular
    .module('main')
    .component('customerDetails', {
        templateUrl: 'views/customer/customer-details/customer-details.template.html',
        controller: CustomerDetailsController
    });

CustomerDetailsController.$inject = ['customer-details.service'];

function CustomerDetailsController() {
    var self = this;

    self.$onInit = function() {

    }
}