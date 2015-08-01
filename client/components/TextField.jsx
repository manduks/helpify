/**
 * Auto complete component
 */
TextField = React.createClass({
  render() {
    var className = this.props.className || '',
        {...other } = this.props;
    className += " reacterializeTextfield";
    this._id = Utils.guid();
    return (
        <Container className={className} id={this._id}>
          <input {...other} type="text"> </input>
        </Container>
    )
  },
  getValue() {
    return this.getDOMNode().getElementsByTagName('input')[0].value;
  },
  setValue(value) {
    this.getDOMNode().getElementsByTagName('input')[0].value = value;
  }
});
