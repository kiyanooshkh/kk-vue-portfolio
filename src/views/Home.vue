<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <Spinner v-if="!show" />
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <v-col cols="12" class="primary full-height white--text">
          <v-row>
            <v-col class="pt-0" cols="12">
              <Navbar :desktopMenu="true" />
            </v-col>
          </v-row>
          <v-row class="top text-center">
            <v-col cols="12">
              <Profile/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import Profile from "../components/Profile";

export default {
  components: { Navbar, Spinner, Profile },
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
  margin-top: 8%;
}
</style>
