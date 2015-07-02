/**
 * A basic toolbar component
 */
Container = React.createClass({
  render() {
    var {...other } = this.props;
    return (
      <div {...other}>{this.props.children}</div>
    )
  }
});
