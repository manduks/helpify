/**
 * The help component
 */
HelpMe = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    var userName = Meteor.user() && Meteor.user().profile && Meteor.user().profile.name;
    return {
      userName  : userName || Session.get('userName'),
      learnSkill: Session.get('learnSkill'),
      teachSkill: Session.get('teachSkill')
    };
  },
  getMeteorData(props, state) {
    var subscription = Meteor.subscribe("skills");
    return {
      skills: Skills.find().fetch()
    }
  },
  componentDidMount() {},
  render() {
    var me = this;
    return (
      <Container className="helpComponent">
        <div className="margin"></div>
        <div className="helpText">
          <div>
            <span>I AM &nbsp;</span>
              <b>
                {Meteor.userId() ? this.state.userName : <TextField ref="userName" className="userName" onChange={this.handleUserNameChange} defaultValue={this.state.userName}/>}
              </b>
          </div>
          <div>
            <span>AND I NEED HELP WITH &nbsp;</span>
              <b>
                <Dropdown className="skill" data={me.data.skills} onChange={this.handleLearnSkillChange} defaultValue={this.state.learnSkill}/>
              </b>
          </div>
          <div>
            <span>I CAN HELP YOU WITH &nbsp;&nbsp;&nbsp;</span>
              <b>
                <Dropdown className="skill" data={me.data.skills} onChange={this.handleTeachSkillChange} defaultValue={this.state.teachSkill}/>
              </b>
          </div>
        </div>
        <div className="margin"></div>
      </Container>
    )
  },
  handleUserNameChange() {
      Session.set('userName', this.refs.userName.getValue());
  },
  handleLearnSkillChange(skill) {
      Session.set('learnSkill', skill.text);
  },
  handleTeachSkillChange(skill) {
      Session.set('teachSkill', skill.text);
  }
});
