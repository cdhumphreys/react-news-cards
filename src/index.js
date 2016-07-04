import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/Card';

require('./styles/stylesheet.css');

const textData = {
  heading: 'Pretty Pictures',
  subheading: 'What do you think?',
  content: 'Blah blah blah, blah blah blah, some more blah blah blah'
};

const thumbnailSrc = 'https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5';

class App extends React.Component {
  render() {
    return (
      <div>
        <Card thumbnailSrc={thumbnailSrc} colorTheme={'orange'} category={'photos'} textContent={textData} numComments={5}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
