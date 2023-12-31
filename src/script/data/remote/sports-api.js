const BASE_URL = 'https://sports-api.dicoding.dev';

class SportsApi {
  static async searchClub(query) {
    const response = await fetch(`${BASE_URL}/teams/search?t=${query}`);

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(`Something went wrong`);
    }

    const responseJson = await response.json();
    const { teams: clubs } = responseJson;

    if (clubs.length <= 0) {
      throw new Error(`\`${query}\` is not found`);
    }

    return clubs;
  }
}

export default SportsApi;
