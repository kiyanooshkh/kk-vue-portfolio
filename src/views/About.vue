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
              <p class="display-1 font-weight-black white--text">ABOUT</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
          <v-row class="slide-right">
            <v-col no-gutters cols="12" md="4" class="text-center">
              
            </v-col>
            <v-col no-gutters cols="12" md="8" class="text-center">
              <Timeline />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";

export default {
  components: { Navbar, Timeline },
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
