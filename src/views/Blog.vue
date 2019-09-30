<template>
  <v-sheet :tile="noRadius" class="overflow-hidden">
    <Spinner v-if="!show" />
    <div class="pt-0 pb-0 pl-2">
      <v-row>
        <Sidebar pageTitle="Blog" />
        <v-col cols="12" md="12" lg="9" class="pt-0 pb-0">

        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";

export default {
  components: { Sidebar, Spinner },
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

</style>