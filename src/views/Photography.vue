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
              <p class="display-3 font-weight-black white--text">PHOTOGRAPHY</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
          <v-row>
            <v-col class="pt-0 pb-0">
              <v-row>
                <vue-instagram
                  :token="accessToken"
                  :count="9"
                  :tags="['kiyanoosh']"
                  mediaType="image">
                  <template slot="feeds" slot-scope="props">
                    <v-img
                      :src="props.feed.images.standard_resolution.url"
                      aspect-ratio="1"
                      class="grey lighten-2 float-left"
                      min-width="240"
                      max-width="240"
                    />
                  </template>
                </vue-instagram>
              </v-row>
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
.slide-left {
  margin-top: 5%;
}
.float-left {
  float: left;
}
</style>
