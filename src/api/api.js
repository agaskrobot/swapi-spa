import axios from 'axios/index';

// Get all episodes
export const getEpisodesList = () => axios.get('https://swapi.dev/api/films/');

// Get episode by id
export const getEpisode = (id) => axios.get(`https://swapi.dev/api/films/${id}`);

// search by value
export const getSearchResults = (value) => axios.get(`https://swapi.dev/api/people/?search=${value}`);
