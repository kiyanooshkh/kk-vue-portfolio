<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>
        Awesome! You added a new project
        <v-btn depressed color="success" class="white--text" @click="snackbar = false">Close</v-btn>
      </span>
    </v-snackbar>
    
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="mr-2" depressed v-on="on">
            <v-icon left>
              expand_more
            </v-icon>
            <span class="font-weight-light">Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn depressed>
        <span class="font-weight-light">Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="primary">
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center">
            <v-avatar size="80">
              <img src="https://i.pravatar.cc/300?img=5" alt="avatar" />
            </v-avatar>
            <div class="white--text">Developer</div>
          </div>
        </v-col>
        <v-col cols="12">
          <Popup @projectAdded="snackbar = true"/>
        </v-col>
      </v-row>
      <v-list dense>
        <v-list-item color="primary" v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
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