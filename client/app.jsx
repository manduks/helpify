/**
 * The index component
 */
App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var sub = Meteor.subscribe("users");
    return {
      usersLoading: !sub.ready(),
      currentUser : Meteor.user(),
      users       : Meteor.users.find().fetch()
    }
  },
  componentDidMount() {},
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.usersLoading) {
      return <LoadingSpinner />;
    }
    if (this.data.currentUser) {
      return (
        <div className="content">
          <Toolbar/>
          <HelpMe/>
          <div className="emptyRow"></div>
          <FilterComponent filterChange={this.handleFilterChange}/>
          <CandidatesList users={this.data.users} ref="candidatesList"/>
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
        <CandidatesList users={this.data.users} ref="candidatesList"/>
      </div>
    )
  },
  handleFilterChange(item) {
      var sort = item._id === 1 ? {'profile.name' : 1} : {'profile.name' : -1},
          users = Meteor.users.find({},{
            sort: sort
          }).fetch();
      this.refs['candidatesList'].setState({
          users : users
      });
  }
});
