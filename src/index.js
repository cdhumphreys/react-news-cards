import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/Card';

require('./styles/stylesheet.css');

const textData1 = {
  thumbnail: 'https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5',
  colorTheme: 'orange',
  category: 'Photos',
  comments: 9,
  text: {
    heading: 'Pretty Pictures',
    subheading: 'Magical photons taking photos',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
};
const textData2 = {
  thumbnail: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9bd244971b9cb52a8418cf2f66fce464',
  colorTheme: 'blue',
  category: 'Food',
  comments: 24,
  text: {
    heading: 'Kitchen Nightmares',
    subheading: 'There are rats everywhere',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
};

const cardData = [textData1, textData2];


class App extends React.Component {
  render() {
    const cardNodes = cardData.map((cardData, index) => {
     const {thumbnail, colorTheme, category, text, comments} = cardData;
       return (
         <Card thumbnailSrc={thumbnail} colorTheme={colorTheme} category={category} textContent={text} numComments={comments} key={index}/>
       );
     });
    return (
      <div>
        {cardNodes}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
