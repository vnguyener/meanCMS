'use strict'

angular
    .module('main.cms')
    .factory('login.service', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {
    return {
        getUser: getUser
    }

    function getUser() {
        
    }
}