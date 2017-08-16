const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));


const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    const reg = new RegExp(wordToMatch, 'gi');
    return place.city.match(reg) || place.state.match(reg);
  })
}

const numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayMatches = function() {
  const matches = findMatches(this.value, cities);
  const matchedPlaces = matches.map(place => {
    const regex = new RegExp(this.value, 'gi');

    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `
  }).join('');
  suggestion.innerHTML = matchedPlaces;
}

const search = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);