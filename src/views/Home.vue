<template>
  <div>
    <Profile />
    <Portfolio />
    <About />
    <Contact />
  </div>
</template>

<script>
import Profile from "../views/Profile";
import Portfolio from "../views/Portfolio";
import About from "../views/About";
import Contact from "../views/Contact";

export default {
  components: { Profile, Portfolio, About, Contact },
};
</script>
<style scoped>
.uppercase {
  text-transform: uppercase;
}
.top {
  margin-top: 5%;
}
</style>
