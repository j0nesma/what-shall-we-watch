<template>
  <!-- Check that the SDK client is not currently loading before accessing is methods -->
  <div class="signIn" v-if="!$auth.loading">
    <!-- show login when not authenticated -->
    <a v-if="!$auth.isAuthenticated" @click="login"><strong>Sign in</strong></a >
    <!-- show logout when authenticated -->
    <a v-if="$auth.isAuthenticated" @click="logout"><strong>Log out</strong></a>
  </div>
</template>
<style scoped>
.signIn {
  display: flex;
  flex-flow: row-reverse;
  padding-right: 2em;
  padding-top: 1em;
}
</style>
<script>
export default {
  name: "SignIn",
   methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
   }
};
</script>
