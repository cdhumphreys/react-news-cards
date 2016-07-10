import React from 'react';

class Thumbnail extends React.Component {
  render() {


    return (
      <div className="thumbnailContainer">
        <div className="thumbnail" style={{backgroundImage: 'url('+ this.props.src+')'}}>
        </div>
      </div>
    )
  }
};

export default Thumbnail;
