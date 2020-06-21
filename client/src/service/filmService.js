// TODO unit tests
const filmKey = "films";
const axios = require("axios");

// function addFilm(film){

// }

// function removeFilm(imdbID){
//     let films = JSON.parse(getFilms());
//     console.log(films);
//     console.log(imdbID);
//     for(const [i,film] of films.entries()){
//         if(film.imdbID === imdbID){
//             films.splice(i, 1);
//             break;
//         }
//     }
//     addFilms(films);
// }

// function clearFilms(){
//     localStorage.removeItem(filmKey);
// }
function searchTitle(title) {
    return axios.get("/api/imdb/search/" + title);
}

// function addFilms(films){
//     localStorage.setItem(filmKey, films);
// }
function getFilms(){
    return localStorage.getItem(filmKey);
}

export{getFilms, searchTitle};