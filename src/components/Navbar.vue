<template>
  <div>
    <v-navigation-drawer v-model="drawer" color="dark" app clipped>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="pt-6 pb-6">
              <v-row align="center" justify="center">
                <v-img src="../assets/kiyanoosh-logo.svg" max-width="250" max-height="50"></v-img>
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-content class="white--text text-center">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar v-if="isMobile" app clipped-left flat color="dark">
      <v-app-bar-nav-icon class="white--text d-lg-none" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      isMobile: false,
      items: [
        { title: "Home", icon: "home", route: "/" },
        { title: "Portfolio", icon: "mdi-chevron-right", route: "#portfolio" },
        { title: "About", icon: "mdi-chevron-right", route: "#about" },
        { title: "Contact", icon: "mdi-chevron-right", route: "#contact" }
      ]
    };
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1260;
    }
  }
};
</script>
<style scoped>
.v-list-item__title {
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1rem !important;
}
</style>