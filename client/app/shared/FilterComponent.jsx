/**
 * The filter component
 */
FilterComponent = React.createClass({
  getInitialState() {
    return {
      filters : [{text:'Name', _id:1 },{text:'Status', _id: 2}]
    };
  },
  render() {
    return (
      <Container className="filterComponent">
        <div className="fieldset">
          <div className="filterText">We found &nbsp;<b>23</b>&nbsp; matches!</div>
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
