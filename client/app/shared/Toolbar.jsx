/**
 * A basic toolbar component
 */
Toolbar = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    return {
      currentUser: Meteor.user()
    }
  },
  componentDidMount() {
    $(".dropdown-button").dropdown();
  },
  render() {
    var me = this,
        userName = me.data.currentUser && me.data.currentUser.profile && me.data.currentUser.profile.name,
        className = userName ? 'toolbar sessionActive' : 'toolbar';
    return (
      <Container className={className}>
        <div className="logo"></div>
        <div className="spacer"></div>
        <div className="navLink" onClick={this.goToDonate}>About</div>
        <div className="navLink" onClick={this.onLogin}>Login</div>
        <div className="signUpBtn" onClick={this.onLogin}><div>SIGN UP FREE</div></div>
        <div className="bubble"><i className="mdi-communication-messenger"></i><span>88</span></div>
        <div className="user">
          <div>{userName}</div>
            <a className="dropdown-button" data-activates="userDropDown">
              <i className="mdi-hardware-keyboard-arrow-down"></i>
            </a>

            <ul id="userDropDown" className="dropdown-content">
              <li onClick={this.goToDonate}><a>Donate</a></li>
              <li onClick={this.onLogout}><a>Logout</a></li>
            </ul>
        </div>
      </Container>
    )
  },
  onLogin() {
    FlowRouter.go("/login");
  },
  onLogout() {
    Meteor.logout(function(err){
      if (err) {
          throw new Meteor.Error("Logout failed");
      } else {
          FlowRouter.go('/');
      };
    });
  },
  goToDonate() {
    FlowRouter.go("/donate");
  },
  goToDonate() {
    FlowRouter.go("/about");
  }
});
