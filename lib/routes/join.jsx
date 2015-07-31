FlowRouter.route('/join/:userId', {
    action: function(params) {
        console.log("Yeah! We are on the post:", params.userId);
        React.render(<Hang userId={params.userId} />, document.body);
    }
});
