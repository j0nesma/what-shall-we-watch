<template>
  <div class="hello">
      <b-card  v-bind:img-src="filmInfo.Poster" img-alt="Card image" img-left class="mb-2">
      <b-card-title>{{ filmInfo.Title }}</b-card-title>
      <b-card-text>
        Imdb - {{ filmInfo.imdbRating }}
        <input type="button" v-on:click="removeItem" value='x'>
      </b-card-text>
      </b-card>
  </div>
</template>

<script>
import {getTitle} from '@/service/imdbService.js'
import {removeFilm} from '@/service/filmService'
export default {
  name: "FilmListItem",
  props: ["filmId"],
  data(){
    return{
      filmInfo: {}
    }
  },
  mounted() {
    getTitle(this.$props.filmId).then(response => this.filmInfo = response.data);
  },
  methods:{
    removeItem(){
      removeFilm(this.filmInfo.imdbID);
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  height: 10em;
  width: auto
}
</style>
