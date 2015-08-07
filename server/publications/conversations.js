Meteor.publish('conversations', function () {
    return Conversations.find({});
});

Conversations.allow({
    'insert': function (userId, doc) {
      return userId;
    }
  });
