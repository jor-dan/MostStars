import React from 'react';
import PropTypes from 'prop-types';

const LanguagePicker = (props) => {
  const { currentLanguage, languages, setLanguage } = props;
  return (
    <ul className="languages">
      {languages.map(language => (
        <li
          key={language}
          style={language === currentLanguage ? { color: 'gray' } : {}}
          onClick={() => setLanguage(language)}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};

LanguagePicker.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LanguagePicker;
