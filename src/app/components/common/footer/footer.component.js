"use strict"

angular
    .module('main')
    .component('bottomNav', {
        templateUrl: 'views/common/footer.template.html',
        controller: FooterController
    });

FooterController.$inject = [];

function FooterController() {
    var self = this;

}