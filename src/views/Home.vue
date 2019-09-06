<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="secondary full-height textwhite">
          <v-row>
            <v-col class="pt-0" cols="12">
              <v-btn color="secondary" depressed large @click.stop="drawer = !drawer">
                <v-icon left color="white">mdi-menu</v-icon>
                <span>MENU</span>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="slide-left">
            <v-col class="text-center">
              <v-row align="center" justify="center">
                <v-img src="../assets/profile.svg" max-width="250" max-height="300"></v-img>
              </v-row>
              <br />
              <br />
              <p class="display-1 font-weight-black white--text">KIYANOOSH KHOSRAVI</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-row class="slide-right">
            <v-col class="text-center">
              <p class="display-3 font-weight-black grey--text">WEB DEVELOPER</p>
              <p class="display-3 font-weight-black grey--text">AND</p>
              <p class="display-3 font-weight-black grey--text">UX DESIGNER</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <v-navigation-drawer v-model="drawer" color="secondary" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-row align="center" justify="center">
              <v-img src="../assets/kiyanoosh-logo.svg" max-width="250" max-height="50"></v-img>
            </v-row>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="white--text">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      noRadius: true,
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  }
};
</script>
<style scoped>
.slide-left {
  margin-top: 5%;
}
.slide-right {
  margin-top: 25%;
}
</style>
