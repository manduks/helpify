Utils = function () {
  var idSeparator = '-';

  return {
    guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + idSeparator + s4() + idSeparator + s4() + idSeparator +
        s4() + idSeparator + s4() + s4() + s4();
    },
    requiredLogin(path, next) {
      var redirectPath = (!Meteor.userId())? "/login" : null;
      //this.setOnline();
      next(redirectPath);
    },
    generateUsersHash(id1, id2){
        return id1 > id2 ? id2 + id1 : id1 + id2; 
    }
  }
}();
