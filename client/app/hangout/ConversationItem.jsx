/**
 * The Conversation item component
 */
ConversationItem = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var users = Meteor.subscribe("users"),
        user = this.props.conversation.users.join(''),
        status;
    user = user.replace(Meteor.userId(),'');
    return {
      loading: !users.ready(),
      user   : Meteor.users.findOne({_id: user})
    }
  },
  render() {
    return (
      <li onClick={this.handleClick}>
        <img src={this.data.user.profile.avatar}/>
        <div className="converstionInfo">
          <div>{this.data.user.profile.name}</div>
          <span className={this.data.user.status.online  ? 'online' : 'offline'}></span>
        </div>
      </li>
    )
  },
  handleClick(){
    return FlowRouter.go('/join/' + this.user);
  }
});
