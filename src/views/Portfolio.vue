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
            <v-col
              v-for="item in items"
              :key="item.img"
              no-gutters
              class="pa-0"
              cols="12"
              sm="6"
              md="6"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img aspect-ratio="2" :src="item.img" :lazy-src="item.img" class="center grey lighten-2">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <v-row class="text-center">
                        <v-col cols="12">
                          <span class="title">{{item.name}}</span>
                        </v-col>
                        <v-col cols="12">
                          <v-btn :href="item.url" target="_blank" class="mx-2" fab dark large color="secondary">
                            <v-icon dark>mdi-open-in-new</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
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
        { img: require("@/assets/portfolio/monaviphotography.jpg"), url:"http://monaviphotography.com/", name:"Monavi Photography" },
        { img: require("@/assets/portfolio/diamondeventshire.jpg"), url:"https://www.diamondeventshire.com.au", name:"Diamond Events Hire" },
        { img: require("@/assets/portfolio/phukettraining.jpg"), url:"http://www.phukettraining.com.au/", name:"Phuket Training" },
        { img: require("@/assets/portfolio/iisinsulation.jpg"), url:"http://www.iisinsulation.com.au/", name:"Iprimus Insulation Solution" },
        { img: require("@/assets/portfolio/tamarahuntington.jpg"), url:"https://tamarahuntington.com.au/", name:"Tamara Huntington" },
        { img: require("@/assets/portfolio/escrooms.jpg"), url:"http://escrooms.com.au", name:"ESC Rooms" },
      ]
    };
  }
};
</script>
<style scoped>

.slide-left {
  margin-top: 5%;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
