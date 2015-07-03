/**
 * A basic toolbar component
 */
Container = React.createClass({
  render() {
    return (
      <div {...this.props}>{this.props.children}</div>
    )
  }
});
