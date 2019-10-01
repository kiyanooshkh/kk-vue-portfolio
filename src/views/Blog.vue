<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <Spinner v-if="!show" />
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <Sidebar pageTitle="Blog" />
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
          <template >
            <v-row>
              <v-col
                no-gutters
                class="pa-0"
                cols="12"
                v-for="content in contents"
                :key="content.id"
              >
                <span v-html="content.content.rendered"></span>
              </v-col>
            </v-row>
          </template>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import axios from "axios";

export default {
  components: { Sidebar, Spinner },
  data() {
    return {
      show: false,
      noRadius: true,
      url: "http://kk-blog.ptshosting.com/wp-json/wp/v2/posts/",
      contents: [],
      error: false
    };
  },
  methods: {
    getContents() {
      axios
        .get(this.url)
        .then(({ data }) => {
          this.contents = data;
        })
        .catch(function(errorMessage) {
          console.log(errorMessage);
          this.error = true;
        });
    }
  },
  created() {
    this.getContents();
    setInterval(() => {
      this.show = true;
    }, 2000);
  }
};
</script>
<style scoped>
</style>