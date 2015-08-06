/**
 * The chat component
 */
Chat = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var messages = Meteor.subscribe("messages"),
        users = Meteor.subscribe("users"),
        limit = this.state.page * this.state.pageSize;
    return {
      loadingUsers   : !users.ready(),
      loadingMessages: !messages.ready(),
      messages       : Messages.find({usersHash: this.state.usersHash}, {limit: limit , sort: {createdAt: -1}}).fetch().reverse(),
      userTo         : Meteor.users.find({_id: this.props.userId}).fetch()[0],
      total          : Messages.find({usersHash: this.state.usersHash}).fetch().length
    }
  },
  getInitialState() {
    return {
      userHash: null,
      page    : 1,
      pageSize: 5
    };
  },
  componentDidMount(){
      this.setState({
        usersHash: Utils.generateUsersHash(Meteor.userId(), this.props.userId)
      });
  },
  componentDidUpdate(){
    if (this.data.loadingMessages) {
      return;
    }
    this.initializeScroll();
  },
  render() {
    var user = {};
    if (this.data.loadingUsers) {
      return <LoadingSpinner />;
    }
    user[Meteor.userId()] = Meteor.user();
    user[this.data.userTo._id] = this.data.userTo;

    return (
      <div className="chat">
        <div className="messages" id="messagesContainer">
          <ul>
            {this.data.messages.map(function (m) {
              return <Message key={m._id} message={m} user={user[m.from]}/>
            }, this)}
          </ul>
        </div>
        <div className="messageBox">
          <TextField ref="messageInput" className="messageInput" onKeyDown={this.handleMessageKeyPress}/>
          <a className="waves-effect waves-light btn" onClick={this.sendMessage}>Send</a>
        </div>
      </div>
    )
  },
  sendMessage(){
    let value = this.refs.messageInput.getValue(),
        messagesDiv = document.getElementById('messagesContainer');
    if (value) {
      Meteor.call('newMessage', {
          usersHash: this.state.usersHash,
          text     : value,
          from     : Meteor.userId(),
          to       : this.props.userId,
          createdAt: new Date()
      });
      this.refs.messageInput.setValue('');
      $('#messagesContainer').animate({ scrollTop: $('#messagesContainer')[0].scrollHeight }, 1000);
    }
  },
  handleMessageKeyPress(e){
    if (e.keyCode == 13) {
      this.sendMessage();
    }
  },
  initializeScroll(){
    var me = this,
        total = (me.state.page + 1) * me.state.pageSize;
    if (me.initilized) {
      return;
    }
    me.initilized = true;
    //initialize scrolling
    $('#messagesContainer').animate({ scrollTop: $('#messagesContainer')[0].scrollHeight }, 1000);
    $("#messagesContainer").scroll(function() {
        var scrolledpx = parseInt($("#messagesContainer").scrollTop());
        if (scrolledpx === 0) {
          if (total < me.data.total) {
            me.setState({
              page: me.state.page + 1
            });
          }
        }
    });
  }
});
