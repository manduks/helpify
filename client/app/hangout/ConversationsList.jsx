/**
 * The chat component
 */
ConversationsList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var conversations = Meteor.subscribe("conversations"),
        users = Meteor.subscribe("users");
    return {
      loading      : !conversations.ready(),
      conversations: Conversations.find({users: {$in:[Meteor.userId()]}}, {sort: {createdAt: -1}})
    }
  },
  componentDidMount(){
  },
  componentDidUpdate(){
  },
  render() {
    var user = {};
    if (this.data.loading) {
      return <LoadingSpinner />;
    }

    return (
      <div className="conversations">
        <div className="title">
          <span>Conversations</span>
          <span className="close" onClick={this.onClose}>X</span>
        </div>
        <ul>
          {this.data.conversations.map(function (c) {
            return <ConversationItem key={c._id} conversation={c}/>
          }, this)}
        </ul>
      </div>
    )
  },
  onClose(){
    return FlowRouter.go('/');
  }
});
