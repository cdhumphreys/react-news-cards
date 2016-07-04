import React from 'react';

import Thumbnail from './Thumbnail';
import DateStamp from './DateStamp';
import Category from './Category';
import TextBlock from './TextBlock';
import CreatedTimeStamp from './CreatedTimeStamp';
import Comments from './Comments';

class Card extends React.Component {
  render() {

    let time = new Date();
  return (
    <div className="cardContainer">
      <Thumbnail src={this.props.thumbnailSrc} />
      <DateStamp timeCreated={time} colorTheme={this.props.colorTheme} />
      <Category category={this.props.category} colorTheme={this.props.colorTheme}/>
      <TextBlock content={this.props.textContent} colorTheme={this.props.colorTheme}/>
      <CreatedTimeStamp timeCreated={time} />
      <Comments numComments={this.props.numComments} />
    </div>
  )
  }
};

export default Card;
