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

    <v-app-bar v-if="isMobile" app clipped-left collapse-on-scroll flat color="dark">
      <v-app-bar-nav-icon class="white--text d-lg-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      drawer: null,
      isMobile: false,
      item: 1,
      items: [
        { title: "Home", route: "/" },
        { title: "Portfolio", route: "#portfolio" },
        { title: "About", route: "#about" },
        { title: "Photography", route: "#photography" },
        { title: "Contact", route: "#contact" }
      ]
    };
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
      window.removeEventListener("scroll", this.handleScroll);
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1260;
    },

    handleScroll() {
      const section = document.querySelectorAll(".section");
      const sections = {};
      let i = 0;

      Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
      });

      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      for (i in sections) {
        if (scrollPosition == 0) {
          let activeElement = document.querySelector(".v-list-item--active");

          if (activeElement) {
            activeElement.setAttribute(
              "class",
              "v-list-item v-list-item--link theme--dark"
            );
            document
              .querySelector(
                "#inspire > div > div > nav > div.v-navigation-drawer__content > div > a:nth-child(2)"
              )
              .setAttribute(
                "class",
                "v-list-item--active v-list-item v-list-item--link theme--dark"
              );
          }

        } else if (sections[i] <= scrollPosition + 10) {
          let activeElement = document.querySelector(".v-list-item--active");

          if (activeElement) {
            activeElement.setAttribute(
              "class",
              "v-list-item v-list-item--link theme--dark"
            );
            document
            .querySelector("a[href*=" + i + "]")
            .setAttribute(
              "class",
              "v-list-item--active v-list-item v-list-item--link theme--dark"
            );
          }
        }
      }
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
.v-toolbar.v-toolbar--collapsed {
  max-width: 65px;
  overflow: hidden;
}
</style>