const input = document.querySelector('.input');
const countrySelect = document.querySelector('.js-form-country');
const formEl = document.querySelector('.js-form-keyword');
const contentWrap = document.querySelector('.main_content');

const btnSection = document.querySelector('.main_btns');
const previousPage = document.querySelector('.main_btn--previous');
const nextPage = document.querySelector('.main_btn--next');
const pageCounter = document.querySelector('.current_page');

let currentPage = 0;
let currentQuery = '';
let currentCountry = '';

btnSection.style.display = 'none';

function fetchEvents(q, country, page = 0) {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${q}&countryCode=${country}&page=${page}&apikey=ok9T7kgYWiJoQ06dA3CieNaC5Y1JlMKk`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Not OK!');
      return res.json();
    })
    .then(data => {
      console.log(data);
      const events = data._embedded?.events || [];
      const totalPages = data.page?.totalPages || 1;

      contentWrap.innerHTML = '';
      btnSection.style.display = 'flex';

      pageCounter.textContent = `Current page: ${page + 1}`;

      previousPage.style.display = page > 0 ? 'flex' : 'none';
      nextPage.style.display = page < totalPages - 1 ? 'flex' : 'none';

      for (let i = 0; i < events.length; i++) {
        const name = events[i].name;
        const date = events[i].dates.start.localDate;
        const location = events[i].dates.timezone;

        const img =
          events[i].images.find(img => img.ratio === '3_2')?.url ||
          events[i].images[0].url;

        contentWrap.insertAdjacentHTML(
          'beforeend',
          `<div class="main_card">
            <div class="main_card--image--wrapper">
              <img src="${img}" class="main_card--image">
            </div>
            <div class="main_card--bottom">
              <h3 class="main_card--bottom--title">${name}</h3>
              <h3 class="main_card--bottom--date">${date}</h3>
              <h3 class="main_card--bottom--location">
                <svg width="7" height="10" viewBox="0 0 7 10">
                  <path d="M3.5 0C1.57 0 0 1.56 0 3.47C0 5.88 3.5 10 3.5 10C3.5 10 7 5.77 7 3.47C7 1.56 5.43 0 3.5 0Z" fill="white"/>
                </svg>
                ${location}
              </h3>
            </div>
          </div>`
        );
      }
    });
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  currentPage = 0;
  currentQuery = input.value;
  currentCountry = countrySelect.value;
  fetchEvents(currentQuery, currentCountry, currentPage);
});

nextPage.addEventListener('click', () => {
  currentPage++;
  fetchEvents(currentQuery, currentCountry, currentPage);
});

previousPage.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    fetchEvents(currentQuery, currentCountry, currentPage);
  }
});
