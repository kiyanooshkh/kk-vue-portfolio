<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
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
            <v-col cols="6" class="text-center">
              <v-form v-model="valid" ref="form">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        :counter="20"
                        label="Name"
                        prepend-icon="mdi-account"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        :counter="20"
                        label="Emails"
                        prepend-icon="email"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        :counter="10"
                        label="phone"
                        prepend-icon="mdi-cellphone"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        v-model="content"
                        :rules="contentRules"
                        :counter="200"
                        label="Message"
                        prepend-icon="edit"
                        required
                      ></v-textarea>
                    </v-col>

                    <v-col cols="12">
                      <v-btn class="mr-2" large color="primary" @click="submit" :loading="loading">
                        <v-icon left>mdi-mail</v-icon>
                        <span class="font-weight-light">Send</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-col>
            <v-col cols="6">
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

export default {
  components: { Navbar },
  data() {
    return {
      noRadius: true,
      valid: false,
      title: "",
      content: "",
      loading: false,
      titleRules: [
        v => !!v || "Title is required",
        v => v.length <= 20 || "Title must be less than 20 characters"
      ],
      contentRules: [
        v => !!v || "Information is required",
        v => v.length <= 200 || "Information must be less than 200 characters"
      ],
      dueRules: [v => !!v || "Due Date is required"],
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
      }
    }
  }
};
</script>
<style scoped>
.slide-left {
  margin-top: 5%;
}
</style>
