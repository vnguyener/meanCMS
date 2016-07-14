"use strict"

angular
    .module('main')
    .component('login', {
        templateUrl: 'views/login/login.template.html',
        controller: LoginController
});

LoginController.$inject = ['login.service'];

function LoginController(loginService) {
    var self = this;

    self.email = '';
    self.password = '';

    this.$onInit = function() {
        loginService.all().then(function(data) {
            console.log(data);
        });
    };
}