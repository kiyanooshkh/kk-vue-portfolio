<template>
  <v-col cols="12" md="12" lg="3" class="primary full-height mobile-banner white--text">
    <v-row>
      <v-col class="pt-0" cols="12">
        <Navbar />
      </v-col>
    </v-row>
    <v-row class="left-side">
      <v-col class="text-center">
        <p class="display-1 font-weight-black white--text uppercase">{{pageTitle}}</p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Navbar from "./Navbar";
export default {
    components: { Navbar },
    props: ['pageTitle'],
};
</script>

<style scoped>
.uppercase {
  text-transform: uppercase;
}
.left-side {
  margin-top: 5%;
}
@media only screen and (max-width: 1024px) {
.full-height {
    height: 200px;
  }
  .left-side {
    margin-top: 1%;
  }
}
</style>