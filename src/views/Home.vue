<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <Spinner v-if="!show" />
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="primary full-height textwhite">
          <v-row>
            <v-col class="pt-0" cols="12">
              <Navbar />
            </v-col>
          </v-row>
          <v-row class="slide-left">
            <v-col class="text-center">
              <Profile />
              <div class="d-block d-sm-none">
                <p class="headline font-weight-black white--text">WEB DEVELOPER, UI AND UX DESIGNER</p>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="d-none d-sm-block">
          <v-row class="slide-right">
            <v-col class="text-center">
              <p class="display-3 font-weight-black grey--text">WEB DEVELOPER,</p>
              <p class="display-3 font-weight-black grey--text">UI AND UX DESIGNER</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Spinner from "../components/Spinner";

export default {
  components: { Navbar, Profile, Spinner },
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
.slide-left {
  margin-top: 10%;
}
.slide-right {
  margin-top: 25%;
}
</style>
