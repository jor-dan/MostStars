import axios from 'axios';

const getRepos = (language) => {
  const lang = !language || language === 'All' ? '' : `+language:${language !== 'C++' ? language : 'Cpp'}`;
  const url = `https://api.github.com/search/repositories?q=stars:>=99${lang}&sort=stars&order=desc&type=Repositories&per_page=50`;
  return axios.get(url)
    .then(res => res.data.items)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    });
};

export default getRepos;
