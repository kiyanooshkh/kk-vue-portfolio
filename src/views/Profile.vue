<template>
  <div class="profile">
    <v-row class="top text-center" >
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-img src="../assets/profile.png" max-width="280" max-height="280"></v-img>
        </v-row>
        <br />
        <div class="display-1 font-weight-bold white--text mb-5">I am Kiyanoosh Khosravi</div>
        <div class="display-1 font-weight-light white--text mb-2">
          WEB DEVELOPER,
          <br />UI AND UX DESIGNER
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.top{
  padding-top: 10%;
}
.profile{
  height: 100vh;
}
</style>