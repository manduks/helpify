FlowRouter.route('/join/:userId', {
    action: function(params) {
        React.render(<Hang userId={params.userId} />, document.body);
    }
});
