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
@media only screen and (max-width: 500px) {
  .mobile-banner {
    height: 185px;
  }
}
</style>
