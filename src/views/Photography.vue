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
              <p class="display-1 font-weight-black white--text">PHOTOGRAPHY</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
          <v-row>
            <v-col class="pt-0 pb-0">
              <template v-if="grams.length > 0">
                <v-row>
                  <v-col cols="12" md="3" v-for="gram in grams" :key="gram.title">
                    <v-img
                      :src="gram.images.standard_resolution.url"
                      :lazy-src="gram.images.low_resolution.url"
                      aspect-ratio="1"
                      class="grey lighten-2"
                      min-width="240"
                      max-width="280"
                    />
                  </v-col>
                </v-row>
              </template>
              <div v-else class="loading"></div>
              <div v-if="error" class="error">Sorry, the Instagrams couldn't be fetched.</div>
              <div class="text-center mt-5 mb-5">
                <v-btn color="primary" depressed large @click="getMoreGrams">
                  <v-icon left color="white">mdi-instagram</v-icon>
                  <span>See more</span>
                </v-btn>
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
import axios from "axios";

export default {
  components: { Navbar },
  data() {
    return {
      feeds: [],
      noRadius: true,
      accessToken: "6172552658.1677ed0.28dcd06ca01844f1b7b485c6176e8280",
      url: "https://api.instagram.com/v1/users/self/media/recent/",
      username: "kiyanoosh.photography",
      grams: [],
      next_url: "",
      error: false
    };
  },
  computed: {
    instapage() {
      return "https://www.instagram.com/" + this.username;
    }
  },
  methods: {
    getGrams() {
      axios
        .get(this.url + "?access_token=" + this.accessToken)
        .then(({ data }) => {
          this.grams = data.data;
          this.username = data.data[0].user.username;
          this.next_url = data.pagination.next_url;
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    },
    getMoreGrams() {
      axios
        .get(this.next_url)
        .then(({ data }) => {
          this.grams = this.grams.concat(data.data);
          this.next_url = data.pagination.next_url;
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    }
  },
  created() {
    this.getGrams();
  }
};
</script>
<style scoped>
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
