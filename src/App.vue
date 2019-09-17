<template>
  <v-app>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
<style>
.full-height {
  height: 100vh;
}
@media only screen and (max-width: 500px) {
  .mobile-banner {
    height: 185px;
  }
}
</style>
