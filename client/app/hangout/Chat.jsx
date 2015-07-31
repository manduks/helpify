/**
 * The chat component
 */
Chat = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var subscription = Meteor.subscribe("messages");
    return {
      loading: !subscription.ready(),
      messages: Messages.find({usersHash: this.state.usersHash}).fetch()
    }
  },
  getInitialState() {
    return {
      userHash : null
    };
  },
  componentDidMount(){
      this.setState({
        usersHash: Utils.generateUsersHash(Meteor.userId(), this.props.userId)
      });
  },
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.loading) {
      return <LoadingSpinner />;
    }
    return (
      <div className="chat">
        <div className="messages">
          <ul>
            {this.data.messages.map(function (m) {
              return <li key={m._id}>{m.text}--- {m.owner}</li>
            }, this)}
          </ul>
        </div>
        <div className="messageBox">
          <TextField ref="message" className="message"/>
          <a className="waves-effect waves-light btn" onClick={this.sendMessage}>Send</a>
        </div>
      </div>
    )
  },
  sendMessage(){
    let value = this.refs.message.getValue();
    if (value) {
      Meteor.call('newMessage', {
          usersHash : this.state.usersHash,
          text      : value,
          owner     : Meteor.userId()
      });
    }
  }
});
