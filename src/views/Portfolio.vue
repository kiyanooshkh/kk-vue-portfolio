<template>
  <div id="portfolio" class="section">
    <v-row>
      <v-col cols="12" class="text-center text-lg-left">
        <p class="display-1 pt-5">Portfolio</p>
      </v-col>
      <v-col cols="12" class="pt-0 pb-0">
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.img"
            no-gutters
            class="pa-0"
            cols="12"
            sm="6"
            md="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-img
                aspect-ratio="2"
                :src="item.img"
                :lazy-src="item.img"
                class="center grey lighten-2"
              >
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
                        <v-btn
                          :href="item.url"
                          target="_blank"
                          class="mx-2"
                          fab
                          dark
                          large
                          color="secondary"
                        >
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
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false,
      noRadius: true,
      items: [
        {
          img: require("@/assets/portfolio/bahaimedia.jpg"),
          url: "https://bahaimedia.net/",
          name: "Baha'i Media"
        },
        {
          img: require("@/assets/portfolio/escrooms.jpg"),
          url: "https://www.escrooms.com.au/",
          name: "Escape Rooms"
        },
        {
          img: require("@/assets/portfolio/pinkdiamondphotography.jpg"),
          url: "http://www.pinkdiamondphotography.com.au",
          name: "Pink Diamond Photography"
        },
                {
          img: require("@/assets/portfolio/budgetliving.jpg"),
          url: "https://budgetliving.net.au/",
          name: "Budget Living"
        },
        {
          img: require("@/assets/portfolio/diamondeventshire.jpg"),
          url: "https://www.diamondeventshire.com.au",
          name: "Diamond Events Hire"
        },
        {
          img: require("@/assets/portfolio/iisinsulation.jpg"),
          url: "http://www.iisinsulation.com.au/",
          name: "Iprimus Insulation Solution"
        },
        {
          img: require("@/assets/portfolio/tamarahuntington.jpg"),
          url: "https://tamarahuntington.com.au/",
          name: "Tamara Huntington"
        },
        {
          img: require("@/assets/portfolio/abcaccounting.jpg"),
          url: "https://abcaccounting.com.au/",
          name: "ABC Accounting"
        },
        {
          img: require("@/assets/portfolio/epshirecars.jpg"),
          url: "http://www.epshirecars.com/",
          name: "EPS Hire Cars"
        }
      ]
    };
  },
  created() {
    setInterval(() => {
      this.show = true;
    }, 3000);
  }
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
