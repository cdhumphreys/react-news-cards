import React from 'react';

class Thumbnail extends React.Component {
  render() {


    return (
      <div className="thumbnail" style={{backgroundImage: 'url('+ this.props.src+')'}}>
      </div>
    )
  }
};

export default Thumbnail;
