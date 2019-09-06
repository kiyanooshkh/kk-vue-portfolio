<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="secondary full-height textwhite">
          <v-row>
            <v-col cols="12">
              <v-btn color="secondary" depressed large @click.stop="drawer = !drawer">
                <v-icon left color="white">mdi-menu</v-icon>
                <span>MENU</span>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center" cols="6" offset="3">
              <Profile/>
              <br><br>
              <p class="display-1 font-weight-black white--text">KIYANOOSH KHOSRAVI</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-row>
            <v-col class="text-center" cols="6" offset="3">
              <br><br>
              <p class="display-1 font-weight-black grey--text">WEB DEVELOPER</p>
              <p class="display-1 font-weight-black grey--text">AND</p>
              <p class="display-1 font-weight-black grey--text">UX DESIGNER</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Kiyanoosh</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import Profile from "@/components/Profile";

export default {
  components: { Profile },
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
</style>
