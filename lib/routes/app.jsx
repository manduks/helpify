FlowRouter.route('/', {
    action: function(params) {
      Utils.setOnline();
      React.render(<App />, document.body);
    }
});
