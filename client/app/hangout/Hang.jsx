/**
 * The hang component
 */
Hang = React.createClass({
  componentDidMounttt() {
    gapi.hangout.onApiReady.add(function(eventObj) {
      gapi.hangout.render('hangout-div', {
        //'topic'       : 'Helpify',
        'render'      : 'createhangout',
        'hangout_type':'onair',
        'broadcast'   : true,
        'initial_apps': [
          { app_id : 'AIzaSyBDz6G_bh5wi5OVqDaLsf9cssihHq', start_data : 'dQw4w9WgXcQ', 'app_type' : 'ROOM_APP' }
        ]
      });
    });
  },
  render() {
    return (
      <div className="hangout">
        <div className="video" id="hangout-div">
        </div>
        <Chat userId={this.props.userId}/>
      </div>
    )
  }
});
