import React from 'react';

class DateStamp extends React.Component {
  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = this.props.timeCreated.getDate();
    const monthNum = this.props.timeCreated.getMonth();
    const month = months[monthNum];

    return (
      <div style={{backgroundColor: this.props.colorTheme}} className="dateStamp">
        <div className="day"> {date} </div>
        <div className="month"> {month} </div>
      </div>
    )
  }

};

export default DateStamp;
