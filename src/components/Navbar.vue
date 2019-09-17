<template>
  <v-row>
    <v-col no-gutters class="pt-0 pb-0" cols="12">
      <v-row v-if="desktopMenu && resizeWindowSize.x > 1024" class="text-right">
        <v-col cols="6">
          <v-img src="../assets/kiyanoosh-logo.svg" max-width="250" max-height="50"></v-img>
        </v-col>
        <v-col cols="6">
          <v-btn
            class="mr-3"
            color="primary"
            depressed
            large
            v-for="item in items"
            :key="item.title"
            link
            :to="item.route"
          >
            <span>{{ item.title }}</span>
          </v-btn>
        </v-col>
      </v-row>

      <v-btn
        v-if="!desktopMenu || resizeWindowSize.x <= 1024"
        color="primary"
        depressed
        large
        @click.stop="drawer = !drawer"
      >
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    desktopMenu: Boolean
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "home", route: "/" },
        { title: "Portfolio", icon: "mdi-chevron-right", route: "/portfolio" },
        { title: "About", icon: "mdi-chevron-right", route: "/about" },
        { title: "Photography", icon: "mdi-chevron-right", route: "/photography" },
        { title: "Contact", icon: "mdi-chevron-right", route: "/contact" }
      ]
    };
  },
  computed: {
    resizeWindowSize: function() {
      return { x: window.innerWidth, y: window.innerHeight };
    }
  }
};
</script>