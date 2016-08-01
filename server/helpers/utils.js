"use strict"

function Utils() {
    function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) return a[i];
      }
      return null;
    }

    return {
        findById: findById
    }
}


module.exports = Utils;