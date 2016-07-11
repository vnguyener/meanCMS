"use strict"

angular
    .module('Module')
    .component('nav', {
        templateUrl: './header.template.html'
    });

NavigationController.$inject = [];

function NavigationController() {
    let self = this;

}