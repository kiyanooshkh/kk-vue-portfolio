<template>
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
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      snackbar: false,
      items: [
        { title: "Home", icon: "home", route: "/" },
        { title: "Portfolio", icon: "", route: "/#portfolio" },
        { title: "About", icon: "", route: "/#about" },
        { title: "Contact", icon: "", route: "/#contact" }
      ],  
    };
  }
};
</script>