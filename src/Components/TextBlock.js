import React from 'react';

class TextBlock extends React.Component {
  render() {
    return (
      <div className="textBlock">
        <h1>{this.props.content.heading}</h1>
        <h2 style={{color: this.props.colorTheme}}>{this.props.content.subheading}</h2>
        <div className="paragraphContainer">
          <p>{this.props.content.content}</p>
        </div>

      </div>
    )
  }
};

export default TextBlock;
