Messages = new Mongo.Collection("messages");

Meteor.methods({
  newMessage: function (message) {
    Messages.insert(message);
  }
})
