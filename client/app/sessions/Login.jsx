/**
 * The login component
 */
Login = React.createClass({
  getInitialState() {
    return null;
  },
  componentDidMount() {},
  render() {
    return (
      <div className="loginContainer">
        <div className="loginCmp">
          <div className="logo" onClick={this.goHome}></div>
          <span>Helpify</span>
          <div className="loginButton" onClick={this.loginWithFacebook}>Login with Faceebook</div>
          <div className="loginButton" onClick={this.loginWithTwitter}>Login with Twitter</div>
        </div>
      </div>
    )
  },
  goHome() {
    FlowRouter.go('/')
  },
  loginWithFacebook() {
      Meteor.loginWithFacebook({}, function(err){
            if (err) {
              throw new Meteor.Error("Facebook login failed");
            } else {
                FlowRouter.go('/');
            };
        });
  },
  loginWithTwitter() {
      Meteor.loginWithTwitter({}, function(err){
            if (err) {
              throw new Meteor.Error("Twitter login failed");
            } else {
                FlowRouter.go('/');
            }
        });
  }
});
