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
    console.log(arguments);
    console.log(this.props);
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
    console.log(12312);
    console.log(this.props);
    return this.props.filterChange && this.props.filterChange(item)
  }
});
