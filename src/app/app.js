angular.module('main', ['ngMaterial', 'ngMessages', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', { template: '<login></login>' })
            .when('/customers', { template: '<customer-list></customer-list>' })
        });