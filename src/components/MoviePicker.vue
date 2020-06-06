<template>
  <div>
    <b-button variant="danger" v-on:click="showOverlay = true">PICK ME A MOVIE</b-button>
    <div v-if="showOverlay" id="overlay" v-on:click="showOverlay = false">
      <p>The Film you will be watching is...</p>
      <div class="slide-up">
        <p>{{ pickMovie() }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Black background with opacity */
  color: white;
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
div.slide-up {
  height: 100%;
  overflow: hidden;
}
div.slide-up p {
  font-size: 6rem;
  animation: 1s slide-up;
  margin-top: 2em;
}

@keyframes slide-up {
  from {
    margin-top: 4em;
    height: 300%;
  }

  to {
    margin-top: 2em;
    height: 100%;
  }
}
</style>
<script>
export default {
  name: "MoviePicker",
  data() {
    return {
      films: [],
      index: 0,
      runTextChange: true,
      showOverlay: false,
    };
  },
  mounted() {
    try {
      this.films = JSON.parse(localStorage.getItem("films"));
      console.log(this.runTextChange);
      this.index = Math.floor(Math.random() * this.films.length);
    } catch (e) {
      localStorage.removeItem("films");
    }
  },
  methods: {
    pickMovie() {
      let index = Math.floor(Math.random() * this.films.length);
      return this.films[index].Title;
    },
  },
};
</script>