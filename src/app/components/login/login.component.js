angular
    .module("main")
    .component("login", {
        templateUrl: "views/login/login.template.html",
        controller: LoginController
    });

LoginController.$inject = ["login.service", "$location"];

function LoginController(loginService, $location) {
    var self = this;

    self.email = "";
    self.password = "";
    self.errorMessage = "";

    self.$onInit = function () {
    };

    self.login = function (form) {
        if (form.$valid) {
            loginService.login(self.email, self.password)
                .then(function (response) {
                    self.errorMessage = "";
                    $location.path("/customers");
                })
                .catch(function (error) {
                    self.email = "";
                    self.password = "";
                    self.errorMessage = error.data.reason;
                });
        }
        else {
            self.errorMessage = "Please fill in the required inputs.";
        }
    }
}