<template>
  <div id="contact">
    <v-row>
      <v-col class="12">
        <p class="display-1 pt-5">Contact</p>
      </v-col>
      <v-col cols="12" class="pt-0 pb-0">
        <v-row>
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
</template>

<script>
import ContactForm from "../components/ContactForm";

export default {
  components: { ContactForm },
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
.full-height {
  height: 100vh;
}
@media only screen and (max-width: 1250px) {
  .full-height {
    height: 200px;
  }
}
</style>
