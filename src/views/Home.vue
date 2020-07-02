<template>
  <v-sheet :tile="noRadius">
    <Spinner v-if="!show" />
    <v-row>
      <v-col cols="12" class="primary white--text">
        <v-row>
          <v-col class="pt-0" cols="12" md="2">
            <Navbar />
          </v-col>
          <v-col class="pt-0" cols="12" md="10">
            <Profile />
            <Portfolio />
            <About />
            <Contact />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import Profile from "../views/Profile";
import Portfolio from "../views/Portfolio";
import About from "../views/About";
import Contact from "../views/Contact";

export default {
  components: { Navbar, Spinner, Profile, Portfolio, About, Contact },
  data() {
    return {
      show: false,
      noRadius: true
    };
  },
  created() {
    setInterval(() => {
      this.show = true;
    }, 2000);
  }
};
</script>
<style scoped>
.uppercase {
  text-transform: uppercase;
}
.top {
  margin-top: 5%;
}
</style>
