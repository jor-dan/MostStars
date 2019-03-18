import React from 'react';
import { render } from 'react-dom';

import LanguagePicker from './components/LanguagePicker';
import Repositories from './components/Repositories';
import getRepos from './utils';
import './styles.scss';

class App extends React.Component {
  state = {
    language: 'All',
    repositories: [],
  }

  languages = ['All', 'C', 'Java', 'JavaScript', 'Python', 'Ruby', 'Swift', 'TypeScript'];

  componentWillMount() {
    const { language } = this.state;
    this.setLanguage(language);
  }

  setLanguage = language => getRepos(language)
    .then(repositories => this.setState({ language, repositories }));

  render() {
    const { language, repositories } = this.state;
    return (
      <React.Fragment>
        <LanguagePicker
          currentLanguage={language}
          languages={this.languages}
          setLanguage={this.setLanguage}
        />
        <Repositories repositories={repositories} />
      </React.Fragment>
    );
  }
}

render(<App />, document.querySelector('#root'));
