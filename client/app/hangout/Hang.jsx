/**
 * The hang component
 */
Hang = React.createClass({
  componentDidMount() {},
  render() {
    return (
      <div className="hangout">
        <div className="video">
        </div>
        <Chat userId={this.props.userId}/>
      </div>
    )
  }
});
