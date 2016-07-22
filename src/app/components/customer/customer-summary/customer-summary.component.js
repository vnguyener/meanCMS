angular
    .module('main')
    .component('customerSummary', {
        templateUrl: 'views/customer/customer-summary/customer-summary.template.html',
        controller: CustomerSummaryController
    });

CustomerSummaryController.$inject = ['customer-summary.service', '$location'];

function CustomerSummaryController(customerSummaryService, $location) {
    var self = this;

    self.customerInfo = {};
    self.homeInfo = {};
    self.rooms = [];

    self.$onInit = function () {
        getInfoFromLocalStorage();
    };

    self.save = function() {
        //customerSummaryService save
        //show toaster
        localStorage.clear();
        $location.path('/customers');
    };

    var getInfoFromLocalStorage = function () {
        if (('localStorage' in window) && window.localStorage !== null) {
            if (localStorage.customerInfo) self.customerInfo = JSON.parse(localStorage.customerInfo);
            if (localStorage.homeInfo) self.homeInfo = JSON.parse(localStorage.homeInfo);
            if (localStorage.roomsInfo) self.rooms = JSON.parse(localStorage.roomsInfo);
        }
    };
}