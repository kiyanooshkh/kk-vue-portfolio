<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <v-col cols="12" md="12" lg="3" class="primary textwhite">
          <v-row>
            <v-col class="pt-0" cols="12">
              <Navbar />
            </v-col>
          </v-row>
          <v-row class="slide-left">
            <v-col class="text-center">
              <p class="display-1 font-weight-black white--text">PORTFOLIO</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
          <v-row>
            <v-col no-gutters class="pa-0" cols="12" sm="6" md="6">
              <v-img
                src="../assets/diamondeventshire.jpg"
                lazy-src="../assets/diamondeventshire.jpg"
                class="center grey lighten-2"
              />
            </v-col>
            <v-col no-gutters class="pa-0" cols="12" sm="6" md="6"></v-col>
            <v-col no-gutters class="pa-0" cols="12" sm="6" md="6"></v-col>
            <v-col no-gutters class="pa-0" cols="12" sm="6" md="6">
              <v-img
                src="../assets/monaviphotography.jpg"
                lazy-src="../assets/monaviphotography.jpg"
                class="center grey lighten-2"
              />
            </v-col>
            <v-col no-gutters class="pa-0" cols="12" sm="6" md="6"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: { Navbar },
  data() {
    return {
      noRadius: true
    };
  }
};
</script>
<style scoped>
.slide-left {
  margin-top: 5%;
}
</style>
