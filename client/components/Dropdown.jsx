/**
 * Dropdown component
 */
Dropdown = React.createClass({
  getInitialState() {
    return {
      showText     : '',
      selectedItem : {}
    };
  },
  componentWillReceiveProps() {
    $('.dropdown-button').dropdown();
  },
  componentDidMount() {
    $('.dropdown-button').dropdown();
    this.setState({
      showText    : this.props.defaultValue
    });
  },
  render() {
    var me = this,
        className = 'reacterializeDropdown ' + (me.props.className || ''),
        data = me.props.data || [],
        dropDownId = null,
        firstItem = data[0] && data[0].text;

    me._id = Utils.guid();
    dropDownId = me._id + 'dropDown';
    showTextRef = me._id + 'showText';

    return (
      <Container className = {className} id= {me._id}>
        <a className="dropdown-button" data-activates={dropDownId}>
          <span>{me.state.showText || firstItem}</span><i className="mdi-hardware-keyboard-arrow-down"></i>
        </a>
        <ul id={dropDownId} className="dropdown-content">
          {data.map(function (item) {
            return <li ref={item._id} key={item._id} onClick={me.handleClick.bind(me, item)}><span>{item.text}</span></li>;
          }, me)}
        </ul>
      </Container>
    )
  },
  handleClick(item) {
    this.setState({
      showText    : item.text,
      selectedItem: item
    });
    this.props.onChange && this.props.onChange(item);
  }
});
