import React from 'react';

class CreatedTimeStamp extends React.Component {
  constructor() {
    super();
    this.state = {
      minutesAgoCreated: 0
    };
  }


  render() {

    let currentTime = Date.now();
    setInterval(function () {
      currentTime = Date.now();
        let minutesElapsed = ((currentTime - this.props.timeCreated)/(1000*60)).toFixed(0);
        this.setState({
          minutesAgoCreated: minutesElapsed
        });
    }.bind(this), 1000);

    return (
      <div className="timeCreated">
        <span> Created <span>{this.state.minutesAgoCreated}</span> minutes ago </span>
      </div>
    )
  }
};

export default CreatedTimeStamp;
