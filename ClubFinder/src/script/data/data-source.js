import clubs from './clubs.js';

class DataSource {
    static searchClub(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.teams) {
                    return Promise.resolve(responseJson.teams);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;