<template>
  <div id="contact" class="section">
    <v-row>
      <v-col cols="12" class="text-center text-lg-left">
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
