import React from 'react';

class CreatedTimeStamp extends React.Component {
  render() {

    let currentTime = Date.now();
    setInterval(function () {
      currentTime = Date.now();
    }, 2000);
    let timeElapsed = (currentTime - this.props.timeCreated).toFixed(0);
    return (
      <div className="timeCreated">
        <span> Created <span>{timeElapsed}</span> minutes ago </span>
      </div>
    )
  }
};

export default CreatedTimeStamp;
