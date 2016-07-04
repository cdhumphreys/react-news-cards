import React from 'react';

class Comments extends React.Component {
  render() {


    return (
      <div className="numComments">
        <span>{this.props.numComments} comments </span>
      </div>
    )
  }
};

export default Comments;
