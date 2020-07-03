<template>
    <div id="about">
      <v-row>
        <v-col cols="12" class="text-center text-lg-left">
            <p class="display-1 pt-5 mt-xs-8">About</p>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-row>
            <v-col cols="12" md="5" class="text-center">
              <div class="mb-4 text-left">
                <p>My name is Kiyanoosh Khosravi and I live in Adelaide, Australia. I was always passionate about technology and computer science. I’m currently working as Full Stack Developer for FlexiGroup</p>
                <p class="title mb-1">Linkedin Profile</p>
                <p>You can view my LinkedIn profile</p>
                <v-btn
                  color="primary"
                  depressed
                  large
                  href="https://www.linkedin.com/in/kiyanoosh/"
                  target="_blank"
                >
                  <v-icon left color="white" small>mdi-linkedin</v-icon>
                  <span>Linkedin Profile</span>
                </v-btn>
              </div>
              <WorkSkills />
            </v-col>
            <v-col cols="12" md="7" class="text-center">
              <Timeline />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
</template>

<script>
import Timeline from "../components/Timeline";
import WorkSkills from "../components/WorkSkills";

export default {
  components: {Timeline, WorkSkills },
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