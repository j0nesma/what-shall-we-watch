// TODO unit tests
const axios = require("axios");

function searchTitle(title) {
    return axios.get("http://www.omdbapi.com/?page=1&apikey=88ec6c42&s=" + title);
}

function getTitle(imdbId){
  return axios.get("http://www.omdbapi.com/?page=1&apikey=88ec6c42&i=" + imdbId);
}


export{searchTitle, getTitle};