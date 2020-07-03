<template>
  <div class="white--text">
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="50"
              label="Name"
              color="info"
              prepend-icon="mdi-account"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              :counter="100"
              label="Email"
              prepend-icon="email"
                            color="info"
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
    <v-snackbar v-model="snackbar">
      Email has been sent successfully
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      message: "",
      mobile: "",
      dest: "contact@kiyanoosh.com",
      loading: false,
      error: false,
      snackbar: false,
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
          .then(() => {
            this.loading = false;
            this.snackbar = true;
            this.cleanup();
          });
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validMobile: function(mobile) {
      var re = /^04(\s?[0-9]{2}\s?)([0-9]{3}\s?[0-9]{3}|[0-9]{2}\s?[0-9]{2}\s?[0-9]{2})$/;
      return re.test(mobile);
    },
    cleanup: function(){
        this.name = "";
       this.email= "";
       this.message= "";
       this.mobile= "";
       this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
</style>