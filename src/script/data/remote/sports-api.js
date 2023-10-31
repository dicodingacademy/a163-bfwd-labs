const BASE_URL = 'https://sports-api.dicoding.dev';

class SportsApi {
  static searchClub(query) {
    return fetch(`${BASE_URL}/teams/search?t=${query}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          return Promise.reject(new Error(`Something went wrong`));
        }
      })
      .then((responseJson) => {
        const { teams: clubs } = responseJson;

        if (clubs.length > 0) {
          return Promise.resolve(clubs);
        } else {
          return Promise.reject(new Error(`\`${query}\` is not found`));
        }
      });
  }
}

export default SportsApi;
