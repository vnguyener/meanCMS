"use strict"

angular
    .module('main')
    .component('bottomNav', {
        templateUrl: 'src/app/components/common/footer.template.html',
        controller: FooterController
    });

FooterController.$inject = [];

function FooterController() {
    var self = this;

}