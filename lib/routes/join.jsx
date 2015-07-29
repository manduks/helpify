FlowRouter.route('/join/:userId', {
    action: function(params) {
        console.log("Yeah! We are on the post:", params.userId);
    }
});
