<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Films</h2>
    <b-form-input
      list="film-list"
      v-model="newFilm"
      @update="searchFilm"
      debounce="300"
    ></b-form-input>
    <div class="list-group" id="myList">
      <button
        type="button"
        v-for="result in searchResults"
        v-bind:key="result.imdbID"
        @click="addfilm(result)"
        class="list-group-item list-group-item-action"
      >
        {{ result.Title }}
      </button>
    </div>
    <div>
      <h2>Film List</h2>
      <FilmListItem v-for="(film, n) in films" v-bind:key="film+n" v-bind:filmId="film.imdbID"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { searchTitle } from "@/service/imdbService";
import FilmListItem from '@/components/FilmListItem'
export default {
  name: 'Home',
  components: {
    FilmListItem
  },
  data() {
    return {
      films: [],
      newFilm: "",
      searchResults: ""
    };
  },
  mounted() {
    if (localStorage.getItem("films")) {
      try {
        this.films = JSON.parse(localStorage.getItem("films"));
      } catch (e) {
        localStorage.removeItem("films");
      }
    }
  },
  methods: {
    addfilm(title) {
      this.films.push(title);
      this.newFilm = "";
      this.searchResults = "";
      this.savefilms();
    },
    savefilms() {
      const parsed = JSON.stringify(this.films);
      localStorage.setItem("films", parsed);
    },
    searchFilm() {
      if (this.newFilm.length <= 3) {
        return;
      } else {
        searchTitle(this.newFilm).then(
          response => (this.searchResults = response.data.Search)
        );
      }
    }
  }
};
</script>
