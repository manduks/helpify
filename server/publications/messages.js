Meteor.publish('messages', function () {
    return Messages.find({});
});

Messages.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    }
  });
