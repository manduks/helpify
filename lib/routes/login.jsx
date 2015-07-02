FlowRouter.route('/login', {
    subscriptions: function(params) {
    },
    action: function(params) {
      React.render(<Login />, document.body);
    }
});
