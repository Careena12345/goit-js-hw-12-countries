const URL = 'https://restcountries.eu/rest/v2/';

const getCountries = () => fetch(URL).then(response => response.json());

export { getCountries };
