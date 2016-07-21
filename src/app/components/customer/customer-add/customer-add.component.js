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
        size: 0,
        numWindows: 0,
        numStory: 0
    };

    var rooms = [];
    self.options = [1,2,3,4,5,6];
    self.acTypes = ['Central Air', 'Window Unit', 'Mini Split', 'Other'];
    self.heatTypes = ['Furnace', 'Boiler', 'Heat Pump', 'Gas', 'Other'];

}