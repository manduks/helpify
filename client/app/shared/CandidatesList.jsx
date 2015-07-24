/**
 * The filter component
 */
CandidatesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var subscription = Meteor.subscribe("users");
    return {
      users: Meteor.users.find({},{ sort: this.state.sorter }).fetch()
    }
  },
  getInitialState() {
    return {
      reachButton : 'disabled',
      selectedUser: null,
      sorter      : {'profile.name' : 1}
    };
  },
  render() {
    var me = this,
        btnCls = 'btn-floating btn-large '  + this.state.reachButton;
    return (
      <Container>
        <FilterComponent filterChange={this.handleFilterChange}/>
        <Container className="candidatesList" >
          {this.data.users.map(function (user) {
            var name = user.profile.name,
                status = user.profile && user.status.online  ? 'online' : 'offline';
            return <CandidateComponent  ref={user._id} key={user._id} userName={name} status={status} onClick={me.handleClick.bind(me, user)}/>;
          }, me)}
        </Container>
        <Container className="askButton">
          <a className={btnCls} onClick={this.handleReachButtonClick}>
              <i className="mdi-communication-chat"></i>
          </a>
        </Container>
      </Container>
    )
  },
  handleClick(user) {
      this.deselectAll();
      this.selectOne(user);
      this.setState({
          reachButton : 'enable'
      });
  },
  selectOne(user) {
    this.refs[user._id].setSelected(true);
    this.setState({
        selectedUser: user
    })
  },
  deselectAll() {
    for (var ref in this.refs) {
      if (this.refs.hasOwnProperty(ref)) {
          this.refs[ref].setSelected(false);
      }
    }
    this.setState({
        reachButton : 'disabled',
        selectedUser: null
    });
  },
  handleReachButtonClick () {
    if (this.state.reachButton !== 'disabled') {
      Session.set('user', this.state.selectedUser);
      if(! Meteor.userId()){
        return FlowRouter.go("/login");
      }
      alert('go to chat');
    }
  },
  handleFilterChange(item) {
    this.setState({
        sorter: item._id === 1 ? {'profile.name' : 1} : {'status.online' : -1}
    });
    this.deselectAll();
  }
});
