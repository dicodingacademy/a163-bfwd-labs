import Utils from '../utils.js';
import SportsApi from '../data/remote/sports-api.js';

const home = () => {
  const searchFormElement = document.querySelector('search-bar');

  const clubListContainerElement = document.querySelector('#clubListContainer');
  const clubQueryWaitingElement = clubListContainerElement.querySelector('.query-waiting');
  const clubLoadingElement = clubListContainerElement.querySelector('.search-loading');
  const clubSearchErrorElement = clubListContainerElement.querySelector('club-search-error');
  const clubListElement = clubListContainerElement.querySelector('club-list');

  const showSportClub = (query) => {
    showLoading();

    SportsApi.searchClub(query)
      .then((result) => {
        displayResult(result);

        showClubList();
      })
      .catch((error) => {
        clubSearchErrorElement.textContent = error.message;
        showSearchError();
      });
  };

  const onSearchHandler = (event) => {
    event.preventDefault();

    const { query } = event.detail;
    showSportClub(query);
  };

  const displayResult = (clubs) => {
    const clubItemElements = clubs.map((club) => {
      const clubItemElement = document.createElement('club-item');
      clubItemElement.club = club;

      return clubItemElement;
    });

    Utils.emptyElement(clubListElement);
    clubListElement.append(...clubItemElements);
  };

  const showClubList = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubListElement);
  };

  const showLoading = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubLoadingElement);
  };

  const showQueryWaiting = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubQueryWaitingElement);
  };

  const showSearchError = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubSearchErrorElement);
  };

  searchFormElement.addEventListener('search', onSearchHandler);
  showQueryWaiting();
};

export default home;
