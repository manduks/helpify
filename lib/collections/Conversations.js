Conversations = new Mongo.Collection("conversations");

Meteor.methods({
  newConversation: function (c) {
    if (!Conversations.findOne({usersHash: c.usersHash})) {
      Conversations.insert(c);
    }
  }
})
