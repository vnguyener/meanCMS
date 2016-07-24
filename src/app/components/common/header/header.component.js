"use strict"

angular
    .module("main")
    .component("topNav", {
        templateUrl: "views/common/header.template.html"
    });

NavigationController.$inject = [];

function NavigationController() {
}