"use strict"

angular
    .module('main')
    .component('topNav', {
        templateUrl: 'src/app/components/common/header.template.html'
    });

NavigationController.$inject = [];

function NavigationController() {
    var self = this;

}