/**
 * The filter component
 */
CandidatesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var subscription = Meteor.subscribe("users");
    return {
      users: Meteor.users.find().fetch()
    }
  },
  render() {
    var me = this;
    return (
      <Container>
        <Container className="candidatesList" >
          {this.data.users.map(function (user) {
            var name = user.profile.name,
                status = user.status || 'offline';
            return <CandidateComponent  ref={user._id} key={user._id} userName={name} status={status} onClick={me.handleClick.bind(me, user._id)}/>;
          }, me)}
        </Container>
        <Container className="askButton">
          <a className="btn-floating btn-large disabled">
              <i className="mdi-communication-chat"></i>
          </a>
        </Container>
      </Container>
    )
  },
  handleClick(_id) {
      for (var ref in this.refs) {
        if (this.refs.hasOwnProperty(ref)) {
            this.refs[ref].setSelected(false);
        }
      }
      this.refs[_id].setSelected(true);
  },
  filterCandidates(id) {
    console.log(id);;
    var sort = id === 1 ? {'profile.name' : 1} : { status: 1 };
    var users = Meteor.users.find({},{
      sort: sort
    }).fetch();
    this.data.users = users;
    this.setData({
      users : users
    });
    console.log(this);
  }
});
