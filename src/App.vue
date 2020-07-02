<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <Navbar />
        <v-main class="primary white--text">
          <v-container class="fill-height">
            <v-row align="center" justify="center">
              <v-col>
                <Profile />
                <Portfolio />
                <About />
                <Contact />
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Profile from "./views/Profile";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";

export default {
  components: { Profile, Portfolio, About, Contact, Navbar },
  name: "App",
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  })
};
</script>
<style>
@media only screen and (max-width: 500px) {
  .mobile-banner {
    height: 185px;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 100%;
  }
}
</style>