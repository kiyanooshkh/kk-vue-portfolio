<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <Spinner v-if="!show" />

    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <v-col cols="12" md="12" lg="3" class="primary full-height textwhite">
          <v-row>
            <v-col class="pt-0" cols="12">
              <Navbar />
            </v-col>
          </v-row>
          <v-row class="slide-left">
            <v-col class="text-center">
              <p class="display-1 font-weight-black white--text">CONTACT</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
          <v-row class="slide-right">
            <v-col cols="12" md="6" class="text-center">
              <ContactForm />
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                src="@/assets/contact-image.jpg"
                lazy-src="item.img"
                class="center grey lighten-2"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Spinner from "../components/Spinner";

export default {
  components: { Navbar, ContactForm, Spinner },
  data() {
    return {
      show: false,
      noRadius: true
    };
  },
  created() {
    setInterval(() => {
      this.show = true;
    }, 2000);
  }
};
</script>
<style scoped>
.slide-left {
  margin-top: 5%;
}
@media only screen and (max-width: 1024px) {
  .slide-left {
    margin-top: 1%;
  }
  .full-height {
    height: 200px;
  }
}
</style>
