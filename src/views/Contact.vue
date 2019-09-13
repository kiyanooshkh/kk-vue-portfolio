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
            <v-col cols="12" md="6" class="text-center">
              <v-form v-model="valid" ref="form">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        :counter="50"
                        label="Name"
                        prepend-icon="mdi-account"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        :counter="100"
                        label="Emails"
                        prepend-icon="email"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="mobile"
                        :rules="mobileRules"
                        :counter="10"
                        label="Mobile"
                        prepend-icon="mdi-cellphone"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        v-model="message"
                        :rules="messageRules"
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
import axios from "axios";

export default {
  components: { Navbar },
  data() {
    return {
      noRadius: true,
      valid: false,
      name: "",
      email: "",
      message: "",
      mobile: "",
      dest: "contact@kiyanoosh.com",
      loading: false,
      error: false,
      url: "https://us-central1-kk-portfolio.cloudfunctions.net/sendMail",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 50 || "Name must be less than 50 characters"
      ],
      emailRules: [
        v => !!v || "Email is required",
        v => v.length <= 100 || "Email must be less than 100 characters",
        v => this.validEmail(v) || "Please enter a valid email address"
      ],
      mobileRules: [
        v => !!v || "Mobile is required",
        v => v.length <= 10 || "Mobile must be less than 10 characters",
        v => this.validMobile(v) || "Please enter a valid mobile number"
      ],
      messageRules: [
        v => !!v || "Message is required",
        v => v.length <= 250 || "Message must be less than 200 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        axios
          .post(
            `${this.url}?email="${this.email}"&dest="${this.dest}"&name="${this.name}"&message="${this.message}"&mobile="${this.mobile}"`
          )
          .then(({ data }) => {
            this.loading = false;
            console.log(data);
          })
          .catch(function(error) {
            console.log(error);
            this.error = true;
          });
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validMobile: function(mobile) {
      var re = /^(?:\+?61|0)4 ?(?:(?:[01] ?[0-9]|2 ?[0-57-9]|3 ?[1-9]|4 ?[7-9]|5 ?[018]) ?[0-9]|3 ?0 ?[0-5])(?: ?[0-9]){5}$/;
      return re.test(mobile);
    }
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
