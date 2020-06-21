<template>
  <div class="pickMovie" @click="closeFilmList()">
    <!-- <SignIn/> -->
    <div class="container">
      <h2 v-if="$auth.isAuthenticated">{{ $auth.user.name }}</h2>
      <p v-if="$auth.isAuthenticated">{{ $auth.user.email }}</p>
      <h2>What Shall We Watch</h2>
      <div class="blah">
        <b-form-input
          list="film-list"
          v-model="newFilm"
          @update="searchFilm"
          placeholder="Search For A Film..."
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
      </div>
      <div>
        <b-collapse ref="filmList" id="collapse-1" class="movieList">
          <FilmListItem
            v-for="(film, n) in films"
            v-bind:key="film + n"
            v-bind:filmId="film.imdbID"
          />
        </b-collapse>
      </div>
      <div
        id="toggleListIcon"
        v-on:click="toggleStyleClick()"
        v-b-toggle.collapse-1
        v-bind:class="{ openedListIcon: toggleClicked }"
      >
        <b-icon-list-task
          v-if="!toggleClicked"
          variant="info"
        ></b-icon-list-task>
        <b-icon-x v-if="toggleClicked"></b-icon-x>
      </div>
      <div id="moviePick">
        <MoviePicker />
      </div>
    </div>
  </div>
</template>
<style scoped>
.blah {
  padding-top: 10em;
}
.movieList {
  z-index: 2;
}
.collapse {
  position: fixed;
  top: 10%;
  overflow: scroll;
  height: 90%;
}
.openedListIcon {
  background-color: #dc3545 !important ;
  color: white !important;
}

#moviePick {
  position: fixed;
  bottom: 1em;
  right: 1em;
  display: inline-block;
}
#toggleListIcon {
  z-index: 4;
  position: fixed;
  bottom: 1em;
  left: 1em;
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.3em 0.6em;
  background-color: white;
}
#myList {
  overflow: scroll;
  height: 20em;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
</style>

<script>
// @ is an alias to /src
import { getFilms, searchTitle} from "@/service/filmService";
import FilmListItem from "@/components/FilmListItem";
import MoviePicker from "@/components/MoviePicker";
// import SignIn from "@/components/SignIn"

export default {
  name: "Home",
  components: {
    FilmListItem,
    MoviePicker,
    // SignIn
  },
  data() {
    return {
      films: [],
      newFilm: "",
      searchResults: "",
      toggleClicked: false,
    };
  },
  mounted() {
    var films = getFilms();
    if (films) {
      try {
        this.films = JSON.parse(films);
      } catch (e) {
        localStorage.removeItem("films");
      }
    }
  },
  methods: {
    addfilm(film) {
      this.films.push(film);
      this.newFilm = "";
      this.searchResults = "";
      this.savefilms();
      this.$toasted.show("Added " + film.Title, {
        theme: "bubble",
        position: "bottom-center",
        duration: 2000,
      });
    },
    savefilms() {
      const parsed = JSON.stringify(this.films);
      localStorage.setItem("films", parsed);
    },
    searchFilm() {
      if (this.newFilm.length <= 3) {
        this.searchResults = "";
        return;
      } else {
        searchTitle(this.newFilm).then(
          (response) => (this.searchResults = response.data)
        );
      }
    },
    toggleStyleClick() {
      this.toggleClicked = !this.toggleClicked;
    },
    closeFilmList() {
      console.log(this.$refs);
      console.log(this.$root);
    },
  },
};
</script>
