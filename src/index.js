import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    language: 'All',
  }

  render() {
    const { language } = this.state;
    return (
      <div>
        {language}
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
