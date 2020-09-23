<template>
  <div id="photography" class="section">
    <v-row>
      <v-col cols="12" class="text-center text-lg-left">
        <p class="display-1 pt-5">Photography</p>
      </v-col>
        <v-col cols="12" md="12" lg="12" class="pt-0 pb-0">
          <v-row>
            <v-col class="pt-0 pb-0">
              <template v-if="grams.length > 0">
                <v-row>
                  <v-col
                    no-gutters
                    class="pa-0"
                    cols="12"
                    sm="6"
                    md="3"
                    v-for="gram in grams"
                    :key="gram.id"
                  >
                    <v-img
                      :src="gram.media_url"
                      :lazy-src="gram.media_url"
                      aspect-ratio="1"
                      class="center grey lighten-2"
                    />
                  </v-col>
                </v-row>
              </template>
              <div v-else class="loading"></div>
              <div v-if="error" class="error">Sorry, the Instagram couldn't be fetched.</div>
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
</template>

<script>
import axios from "axios";

export default {
  components: { },
  data() {
    return {
      noRadius: true,
      accessToken: "IGQVJXckd5UTFVeVZAxZA0stSENjTWFpQkdYcnBYemUycWRSUUZAva0htdUJZAbTBYcWhsZA3ZAVLUxsOXVXV1Y4MjB2VFJXVXk0d19SOWtvTDQxb2JjN2VoVVVBeVVTWlFiZAHlHbjRnbHhuc1FfS0xMUGVJTAZDZD",
      url: "https://graph.instagram.com/me/media?fields=media_url&limit=8&access_token=",
      username: "kiyanoosh.photography",
      grams: [],
      next_url: "",
      error: false
    };
  },
  methods: {
    getGrams() {
      axios
        .get(this.url + this.accessToken)
        .then(({ data }) => {
          this.grams = data.data;
          this.next_url = data.paging.next;
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
          this.next_url = data.paging.next;
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
