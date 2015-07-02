FlowRouter.route('/', {
    subscriptions: function() {
       //Meteor.subscribe("skills");
    },
    action: function(params) {
      React.render(<App />, document.body);
    }
});
