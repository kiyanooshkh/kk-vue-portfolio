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
              <div class="loading" v-if="grams.length == 0">
                <div class="spinner-locator">
                <div class="spinner">
                  <div class="double-bounce1"></div>
                  <div class="double-bounce2"></div>
                </div>
                </div>
              </div>

              <template v-if="grams.length > 0">
                <v-row>
                  <v-col
                    no-gutters
                    class="pa-0"
                    cols="12"
                    sm="6"
                    md="3"
                    v-for="gram in grams"
                    :key="gram.title"
                  >
                    <v-img
                      :src="gram.images.standard_resolution.url"
                      :lazy-src="gram.images.low_resolution.url"
                      aspect-ratio="1"
                      class="center grey lighten-2"
                    />
                  </v-col>
                </v-row>
              </template>
              <div v-else class="loading"></div>
              <div v-if="error" class="error">Sorry, the Instagrams couldn't be fetched.</div>
              <div v-if="grams.length != 0" class="text-center mt-5 mb-5">
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
      alignment: "center",
      justify: "center",
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
.loading {
  position: fixed;
  z-index: 999;
  overflow: hidden;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #086788;
}
.slide-left {
  margin-top: 5%;
}

.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  margin: 0 auto;
}

.spinner-locator {
  margin-top: 20%;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

@media only screen and (max-width: 1024px) {
  .slide-left {
    margin-top: 1%;
  }
  .full-height {
    height: 200px;
  }
}
</style>
