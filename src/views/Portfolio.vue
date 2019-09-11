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
            <v-col v-for="item in items" :key="item.img" no-gutters class="pa-0" cols="12" sm="6" md="6">
              <v-img
                :src="item.img"
                :lazy-src="item.img"
                class="center grey lighten-2"
              />
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
      noRadius: true,
      items: [
        { img: require('@/assets/portfolio/monaviphotography.jpg')},
        { img: require('@/assets/portfolio/diamondeventshire.jpg')},
        { img: require('@/assets/portfolio/phukettraining.jpg')},
        { img: require('@/assets/portfolio/iisinsulation.jpg')},
        { img: require('@/assets/portfolio/tamarahuntington.jpg')},
        { img: require('@/assets/portfolio/escrooms.jpg')}
      ]
    };
  }
};
</script>
<style scoped>
.slide-left {
  margin-top: 5%;
}
</style>
