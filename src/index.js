import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <span> Its alive again!</span>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
