angular
    .module('main')
    .component('customerAdd', {
        templateUrl: 'views/customer/customer-add/customer-add.template.html',
        controller: CustomerAddController
    });

CustomerAddController.$inject = ['customer-add.service'];

function CustomerAddController(customerAddService) {
    var self = this;

    self.customer = {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: ''
    };

    self.home = {
        totalSize: 0,
        numStories: 0,
        numBedrooms: 0,
        numBathrooms: 0,
        acType: '',
        heatingType: '',
        installationDate: null
    };

    self.room = {
        size: null,
        numWindows: null,
        numStory: null
    };

    self.rooms = [];
    self.options = [1,2,3,4,5,6];
    self.acTypes = ['Central Air', 'Window Unit', 'Mini Split', 'Other'];
    self.heatTypes = ['Furnace', 'Boiler', 'Heat Pump', 'Gas', 'Other'];


    self.clearRoomForm = function() {
        self.room.size = null;
        self.room.numWindows = null;
        self.room.numStory = null;
    }

    self.addRoom = function(room) {
        self.rooms.push(room);
        self.clearRoomForm();
        console.log(self.rooms);
    }

    self.removeRoom = function(index) {
        self.rooms.splice(index, 1);
        console.log(self.rooms);
    }
}