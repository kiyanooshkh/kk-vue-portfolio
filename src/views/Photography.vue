<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <v-col cols="12" md="12" lg="3" class="primary full-height textwhite">
          <v-row>
            <v-col class="pt-0" cols="12">
              <Navbar />
            </v-col>
          </v-row>
          <v-row class="slide-left">
            <v-col class="text-center">
              <p class="display-1 font-weight-black white--text">PHOTOGRAPHY</p>
              <v-btn
                color="primary"
                depressed
                large
                href="https://www.instagram.com/kiyanoosh.photography/"
                target="_blank"
              >
                <v-icon left color="white">mdi-instagram</v-icon>
                <span>See more</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
          <v-row>
            <v-col class="pt-0 pb-0">
              <div class="row">
                <vue-instagram
                  :token="accessToken"
                  :count="13"
                  :tags="['kiyanoosh']"
                  mediaType="image"
                >
                  <template slot="feeds" slot-scope="props">
                    <div class="column">
                      <v-img
                        :src="props.feed.images.standard_resolution.url"
                        :lazy-src="props.feed.images.low_resolution.url"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        min-width="240"
                        max-width="280"
                      />
                    </div>
                  </template>
                </vue-instagram>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Navbar from "../components/Navbar";
import VueInstagram from "vue-instagram";

export default {
  components: { Navbar, VueInstagram },
  data() {
    return {
      noRadius: true,
      accessToken: "6172552658.1677ed0.28dcd06ca01844f1b7b485c6176e8280"
    };
  }
};
</script>
<style scoped>
.full-height {
  height: 122vh;
}

.slide-left {
  margin-top: 5%;
}
.column {
  float: left;
  width: 20%;
  margin: 25px;
  height: 240px; /* Should be removed. Only for demonstration */
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media only screen and (max-width: 1024px) {
  .slide-left {
    margin-top: 1%;
  }
  .column {
    width: 20%;
    margin: 20px;
  }
  .full-height {
    height: 200px;
  }
}

@media only screen and (max-width: 768px) {
  .column {
    width: 25%;
    margin: 25px;
  }
}

@media only screen and (max-width: 500px) {
  .column {
    width: 100%;
    margin: 50px;
  }
}
</style>
