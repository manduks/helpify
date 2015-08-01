/**
 * The message component
 */
Message = React.createClass({
  render() {
    return (
      <li className="message">
        <img src={this.props.user.profile.avatar}/>
        <div className="info">
          <div className="header">
            <div className="name">{this.props.user.profile.name}</div>
            <div className="log">{moment(this.props.message.createdAt).fromNow()}</div>
          </div>
          <div className="text">{this.props.message.text}</div>
        </div>
      </li>
    )
  }
});
