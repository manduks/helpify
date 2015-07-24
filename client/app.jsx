/**
 * The index component
 */
App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var sub = Meteor.subscribe("users");
    return {
      usersLoading: !sub.ready()
    }
  },
  componentDidMount() { },
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.usersLoading) {
      return <LoadingSpinner />;
    }
    if (Meteor.userId()) {
      return (
        <div className="content">
          <Toolbar/>
          <HelpMe/>
          <div className="emptyRow"></div>
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
        <CandidatesList  ref="candidatesList"/>
      </div>
    )
  }
});
