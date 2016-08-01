angular.module("main", ["ngMaterial", "ngMessages", "ngRoute", "ngCookies"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", { 
                template: "<login></login>" 
            })
            .when("/customers", {
                template: "<customer-list></customer-list>",
                resolve: {
                    user: function (authService) {
                        authService.getUser();
                    }
                }
            })
            .when("/customer/new", {
                template: "<customer-add></customer-add>",
                resolve: {
                    user: function (authService) {
                        authService.getUser();
                    }
                }
            })
            .when("/customer/new/summary", {
                template: "<customer-summary></customer-summary>",
                resolve: {
                    user: function (authService) {
                        authService.getUser();
                    }
                }
            })
            .when("/customer/:id", {
                template: "<customer-details></customer-details>",
                resolve: {
                    user: function (authService) {
                        authService.getUser();
                    }
                }
            })
    });