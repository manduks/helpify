FlowRouter.route('/', {
    action: function(params) {
      React.render(<App />, document.body);
    }
});
