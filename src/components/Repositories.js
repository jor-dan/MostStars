import React from 'react';
import PropTypes from 'prop-types';

const Repositories = (props) => {
  const { repositories } = props;
  return (
    <ul className="repositories">
      {repositories.map((repo, index) => (
        <li className="repository" key={repo.full_name}>
          <div className="rank">
            #
            {1 + index}
          </div>
          <a href={repo.html_url}>
            <img
              className="avatar"
              src={repo.owner.avatar_url}
              alt={`${repo.owner.login}'s avatar`}
            />
          </a>
          <ul className="info">
            <li className="name">
              <a href={repo.html_url}>{repo.name}</a>
            </li>
            <li>
              @
              {repo.owner.login}
            </li>
            <li>
              {repo.language}
            </li>
            <li className="star">
              ★
              {repo.stargazers_count}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Repositories;
