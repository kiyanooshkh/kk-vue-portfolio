<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <Spinner v-if="!show" />
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <Sidebar pageTitle="Contact"/>
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
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
  </v-sheet>
</template>

<script>
import ContactForm from "../components/ContactForm";
import Spinner from "../components/Spinner";
import Sidebar from "../components/Sidebar";

export default {
  components: { ContactForm, Spinner, Sidebar },
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
