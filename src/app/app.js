angular.module('main', ['ngMaterial', 'ngMessages', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', { template: '<login></login>' })
            .when('/customers', { template: '<customer-list></customer-list>' })
            .when('/customer/new', { template: '<customer-add></customer-add>'})
            .when('/customer/:id', { template: '<customer-details></customer-details>'})
        });