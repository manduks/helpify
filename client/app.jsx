/**
 * The index component
 */
App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    return {
      currentUser: Meteor.user()
    }
  },
  componentDidMount() {},
  render() {
    var me = this;
    if (me.data.currentUser) {
      return (
        <div className="content">
          <Toolbar/>
          <HelpMe/>
          <div className="emptyRow"></div>
          <FilterComponent filterChange={this.handleFilterChange}/>
          <CandidatesList ref="candidatesList"/>
        </div>
      )
    }
    return (
      <div className="content">
        <Toolbar/>
        <div className="emptyRow"></div>
        <div className="emptyRow"></div>
        <div className="emptyRow"></div>
        <div className="emptyRow"></div>
        <HelpMe/>
        <div className="emptyRow"></div>
        <FilterComponent filterChange={this.handleFilterChange}/>
        <CandidatesList ref="candidatesList"/>
      </div>
    )
  },
  handleFilterChange(item) {
    this.refs['candidatesList'].filterCandidates(item._id);
  }
});
