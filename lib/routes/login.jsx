FlowRouter.route('/login', {
    action: function(params) {
      React.render(<Login />, document.body);
    }
});
