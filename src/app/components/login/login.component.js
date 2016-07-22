angular
    .module('main')
    .component('login', {
        templateUrl: 'views/login/login.template.html',
        controller: LoginController
    });

LoginController.$inject = ['login.service', '$location'];

function LoginController(loginService, $location) {
    var self = this;

    self.email = '';
    self.password = '';
    self.errorMessage = '';

    self.$onInit = function () {
    };

    self.login = function () {
        loginService.login(self.email, self.password)
            .then(function (data) {
                self.errorMessage = '';
                $location.path('/customers');
            }, function (err) {
                self.email = '';
                self.password = '';
                self.errorMessage = err.data;
            });
    };
}