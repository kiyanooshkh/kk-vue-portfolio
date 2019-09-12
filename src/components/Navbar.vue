<template>
  <div>
    <v-btn color="primary" depressed large @click.stop="drawer = !drawer">
      <v-icon left color="white">mdi-menu</v-icon>
      <span>MENU</span>
    </v-btn>
    <v-navigation-drawer v-model="drawer" color="primary" absolute temporary>
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
        <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="white--text">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "home", route: "/" },
        { title: "Portfolio", icon: "mdi-chevron-right", route: "/portfolio" },
        { title: "About", icon: "mdi-chevron-right", route: "/about" },
        { title: "Photography", icon: "mdi-chevron-right", route: "/photography" },
        //{ title: "Contact", icon: "mdi-chevron-right", route: "/contact" }
      ]
    };
  }
};
</script>