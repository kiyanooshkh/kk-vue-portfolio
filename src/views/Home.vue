<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="secondary full-height textwhite">
          <v-row>
            <v-col class="pt-0" cols="12">
              <Navbar />
            </v-col>
          </v-row>
          <v-row class="slide-left">
            <v-col class="text-center">
              <v-row align="center" justify="center">
                <v-img src="../assets/profile.svg" max-width="250" max-height="300"></v-img>
              </v-row>
              <br />
              <br />
              <p class="display-1 font-weight-black white--text">KIYANOOSH KHOSRAVI</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-row class="slide-right">
            <v-col class="text-center">
              <p class="display-3 font-weight-black grey--text">WEB DEVELOPER</p>
              <p class="display-3 font-weight-black grey--text">AND</p>
              <p class="display-3 font-weight-black grey--text">UX DESIGNER</p>
            </v-col>
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
.slide-right {
  margin-top: 25%;
}
</style>
