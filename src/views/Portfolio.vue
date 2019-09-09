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
              <p class="display-2 font-weight-black white--text">PORTFOLIO</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">
          <v-row>
            <v-col cols="12" sm="4">
              <v-card>
                <v-img height="300px" src="../assets/phukettraining.png"></v-img>

                <v-card-text>
                  <div>
                    <p class="headline mb-1">Phuket Training</p>
                    <v-chip class="ma-2" color="primary" text-color="white">
                      <v-avatar left>
                        <v-icon>mdi-wordpress</v-icon>
                      </v-avatar>WordPress
                    </v-chip>
                  </div>
                  <div class="text-right">
                    <v-btn text>Link</v-btn>
                  </div>
                </v-card-text>
              </v-card>
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
      noRadius: true
    };
  }
};
</script>
<style scoped>
.slide-left {
  margin-top: 5%;
}
</style>
