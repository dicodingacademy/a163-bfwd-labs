function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchClub = function (keyword) {
    const filteredClubs = clubs.filter(function (club) {
        return club.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredClubs.length) {
        this.onSuccess(filteredClubs);
    } else {
        this.onFailed(`${keyword} is not found`);
    }
};