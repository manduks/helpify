Meteor.publish('messages', function () {
    return Messages.find({});
});

Messages.allow({
    'insert': function (userId, doc) {
      return userId;
    }
  });
