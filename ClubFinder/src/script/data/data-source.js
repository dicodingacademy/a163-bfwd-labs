import clubs from './clubs.js';

class DataSource {
  static searchClub(keyword) {
    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
