angular
    .module('main')
    .component('customerAdd', {
        templateUrl: 'views/customer/customer-add/customer-add.template.html',
        controller: CustomerAddController
    });

CustomerAddController.$inject = ['customer-add.service', '$location'];

function CustomerAddController(customerAddService, $location) {
    var self = this;

    self.customer = {
        firstName: null,
        lastName: null,
        address: null,
        phoneNumber: null,
        email: null
    };

    self.home = {
        totalSize: null,
        numStories: null,
        numBedrooms: null,
        numBathrooms: null,
        acType: null,
        heatingType: null,
        installationDate: null
    };

    self.room = {
        size: null,
        numWindows: null,
        numStory: null
    };

    self.rooms = [];
    self.options = [1, 2, 3, 4, 5, 6];
    self.acTypes = ['Central Air', 'Window Unit', 'Mini Split', 'Other'];
    self.heatTypes = ['Furnace', 'Boiler', 'Heat Pump', 'Gas', 'Other'];

    self.clearCustomerInfoForm = function () {
        self.customer.firstName = null;
        self.customer.lastName = null;
        self.customer.address = null;
        self.customer.phoneNumber = null;
        self.customer.email = null;
    };

    self.clearHomeForm = function () {
        self.home.totalSize = null;
        self.home.numStories = null;
        self.home.numBedrooms = null;
        self.home.numBathrooms = null;
        self.home.acType = null;
        self.home.heatingType = null;
        self.home.installationDate = null;
    };

    self.clearRoomForm = function () {
        self.room.size = null;
        self.room.numWindows = null;
        self.room.numStory = null;
    };

    self.addRoom = function (room) {

        self.rooms.push({
            size: room.size,
            numWindows: room.numWindows,
            numStory: room.numStory
        });

        self.clearRoomForm();
    };

    self.removeRoom = function (index) {
        self.rooms.splice(index, 1);
    };

    self.setSessionForSummary = function () {
        if (('localStorage' in window) && window.localStorage !== null) {
            localStorage.clear();
            localStorage.customerInfo = JSON.stringify(self.customer);
            localStorage.homeInfo = JSON.stringify(self.home);
            localStorage.roomsInfo = JSON.stringify(self.rooms);
        }

        $location.path('/customer/new/summary');
    };
}