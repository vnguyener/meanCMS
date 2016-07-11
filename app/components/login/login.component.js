"use strict"

angular
    .module('main.cms')
    .component('login', {
        templateUrl: './login.template.html',
        controller: LoginController
});

LoginController.$inject = [];

function LoginController() {
    let self = this;

}