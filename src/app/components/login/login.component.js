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
    self.errorMessage = '';

    this.$onInit = function() {
    };

    self.login = function() {
        loginService.login(self.email, self.password).then(function(data) {
            console.log(data);
            self.errorMessage = '';
            // if 200 reroute to cms main page
        }, function(err) {
            self.errorMessage = err.data;
        });
    }

    self.clear = function() {
        self.email = '';
        self.password = '';
        self.errorMessage = '';
    }
}