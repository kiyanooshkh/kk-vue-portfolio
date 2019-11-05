<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <Spinner v-if="!show" />
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <Sidebar pageTitle="About" />
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0 px-5">
          <v-row class="slide-right">
            <v-col cols="12" md="5" class="text-center">
              <div class="mb-4 text-left">
                <p class="title mb-1">About</p>
                <p>My name is Kiyanoosh Khosravi and I live in Adelaide, Australia. I was always passionate about technology and computer science. I gained my dream by studying the computer science from private schools to university education. University helped me to develop my technical skills such as networking, programming and web development and improved my other skills such as communications, team management, support. I’m currently working as Full Stack Developer for FlexiGroup</p>
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
  </v-sheet>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Timeline from "../components/Timeline";
import WorkSkills from "../components/WorkSkills";
import Spinner from "../components/Spinner";

export default {
  components: { Sidebar, Timeline, WorkSkills, Spinner },
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
</style>
