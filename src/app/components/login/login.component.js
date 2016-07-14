"use strict"

angular
    .module('main')
    .component('login', {
        templateUrl: 'src/app/components/login/login.template.html',
        controller: LoginController
});

LoginController.$inject = ['login.service'];

function LoginController(loginService) {
    var self = this;

    self.email = '';
    self.password = '';
}