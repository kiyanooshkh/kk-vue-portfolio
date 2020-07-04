<template>
  <div id="app">
    <Spinner v-if="!show" />
    <v-app id="inspire">
      <v-app id="inspire">
        <Navbar />
        <v-main class="primary white--text">
          <v-container class="fill-height">
            <v-row align="center" justify="center">
              <v-col>
                <router-view></router-view>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

export default {
  components: { Navbar, Spinner },
  name: "App",
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
          show: false,
  }),
  created() {
    setInterval(() => {
      this.show = true;
    }, 2000);
  }
};
</script>
<style>
  .container {
    max-width: 100%;
  }

@media (max-width: 1264px) {
  .container {
    max-width: 100%;
  }
}
</style>