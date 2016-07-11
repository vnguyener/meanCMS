"use strict"

angular
    .module('Module')
    .component('footer', {
        templateUrl: './footer.template.html',
        controller: FooterController
    });

FooterController.$inject = [];

function FooterController() {
    let self = this;

}