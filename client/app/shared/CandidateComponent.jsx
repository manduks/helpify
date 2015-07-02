/**
 * The filter component
 */
CandidateComponent = React.createClass({
  getInitialState() {
    return {
      selected  : false
    };
  },
  componentDidMount() {},
  render() {
    var userInfoCls = this.state.selected ? 'candidateInfo selected' : 'candidateInfo',
        {...other } = this.props;
    return (
      <Container {...other} className='candidateComponent'>
        <div className={userInfoCls}>
          <span>{this.props.userName}</span>
        </div>
        <div className="candidateActions">
          <div className="status">
            <div className={this.props.status.toLowerCase()}></div>
            <span>{this.props.status}</span>
          </div>
        </div>
      </Container>
    )
  },
  setSelected(select) {
      this.setState({selected: select});
  }
});
