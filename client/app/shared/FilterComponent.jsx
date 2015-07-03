/**
 * The filter component
 */
FilterComponent = React.createClass({
  getInitialState() {
    return {
      filters: [{text:'Name', _id:1 },{text:'Status', _id: 2}],
      matches: 0
    };
  },
  componentDidMount() {
    this.setState({
        matches : this.props.matches || 0
    });
  },
  render() {
    return (
      <Container className="filterComponent">
        <div className="fieldset">
          <div className="filterText">We found &nbsp;<b>{this.state.matches}</b>&nbsp; matches!</div>
          <div className="spacer"></div>
          <Dropdown className="filterCombo" onChange={this.handleFilterChange}  data={this.state.filters}></Dropdown>
        </div>
      </Container>
    )
  },
  handleFilterChange(item) {
    return this.props.filterChange && this.props.filterChange(item)
  }
});
