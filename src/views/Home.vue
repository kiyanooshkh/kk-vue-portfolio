<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="secondary full-height textwhite">
          
          <v-btn color="secondary" depressed large @click.stop="drawer = !drawer">
            <v-icon left color="white">mdi-menu</v-icon>
            <span>
            MENU
            </span>
            </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="6"></v-col>
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
export default {
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
