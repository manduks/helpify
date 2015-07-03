FlowRouter.route('/', {
    subscriptions: function() {
       //Meteor.subscribe("users");
    },
    action: function(params) {
      React.render(<App />, document.body);
    }
});
