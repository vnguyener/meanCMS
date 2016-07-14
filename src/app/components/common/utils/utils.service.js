angular
    .module('main')
    .factory('utils.service', UtilsService)

UtilsService.$inject = [];

function UtilsService () {
  return {
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) return a[i];
      }
      return null;
    }
  };
};