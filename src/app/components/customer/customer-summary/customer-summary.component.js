angular
    .module("main")
    .component("customerSummary", {
        templateUrl: "views/customer/customer-summary/customer-summary.template.html",
        controller: CustomerSummaryController
    });

CustomerSummaryController.$inject = ["customer-summary.service", "$location"];

function CustomerSummaryController(customerSummaryService, $location, $mdToast) {
    var self = this;

    self.customerInfo = {};
    self.homeInfo = {};
    self.rooms = [];

    self.$onInit = function () {
        getInfoFromLocalStorage();
    };

    self.save = function () {
        saveCustomerInfo();
        localStorage.clear();
        $location.path("/customers");
    };

    var getInfoFromLocalStorage = function () {
        if (("localStorage" in window) && window.localStorage !== null) {
            if (localStorage.customerInfo) self.customerInfo = JSON.parse(localStorage.customerInfo);
            if (localStorage.homeInfo) self.homeInfo = JSON.parse(localStorage.homeInfo);
            if (localStorage.roomsInfo) self.rooms = JSON.parse(localStorage.roomsInfo);
        }
    };

    var saveCustomerInfo = function () {
        customerSummaryService.saveCustomerInfo(self.customerInfo)
            .then(function (response) {
                saveHouseInfo(response.data.id);
            }, function (error) {
                console.log(error);
                throw new Error(error.message);
            })

    };

    var saveHouseInfo = function (customerId) {

        var reqObj = {
            "customerId": customerId,
            "homeInfo": self.homeInfo,
            "roomsInfo": self.rooms
        };

        customerSummaryService.saveHomeInfo(reqObj)
            .then(function (data) {
            }, function (error) {
                console.log(error);
                throw new Error(error.message);
            });
    };
}