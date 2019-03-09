import React from 'react';
import { render } from 'react-dom';

import LanguagePicker from './components/LanguagePicker';
import './styles.scss';

class App extends React.Component {
  state = {
    language: 'All',
  }

  languages = ['All', 'C', 'JavaScript', 'Python', 'Swift'];

  setLanguage = language => this.setState({ language });

  render() {
    const { language } = this.state;
    return (
      <LanguagePicker
        currentLanguage={language}
        languages={this.languages}
        setLanguage={this.setLanguage}
      />
    );
  }
}

render(<App />, document.querySelector('#root'));
