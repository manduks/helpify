Utils = function () {
  var idSeparator = '-';

  return {
    guid : function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + idSeparator + s4() + idSeparator + s4() + idSeparator +
        s4() + idSeparator + s4() + s4() + s4();
    },
    setOnline (){
      if (Meteor.userId()) {
          Meteor.users.update({ _id: Meteor.userId() }, {$set: {"profile.online": true}});
      }
    },
    requiredLogin(path, next) {
      var redirectPath = (!Meteor.userId())? "/login" : null;
      //this.setOnline();
      next(redirectPath);
    }
  }
}();
