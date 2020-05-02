<template>
  <div class="hello">
      <b-card  v-bind:img-src="filmInfo.Poster" img-alt="Card image" img-left class="mb-2">
      <b-card-text>
        {{ filmInfo.Title }}
        {{ filmInfo }}
      </b-card-text>
      </b-card>
  </div>
</template>

<script>
import {getTitle} from '@/service/imdbService.js'
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
  width: 5em;
}
</style>
