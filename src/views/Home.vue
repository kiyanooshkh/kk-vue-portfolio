<template>
  <div>
    <Profile />
    <Portfolio />
    <About />
    <Photography/>
    <Contact />
  </div>
</template>

<script>
import Profile from "../views/Profile";
import Portfolio from "../views/Portfolio";
import About from "../views/About";
import Contact from "../views/Contact";
import Photography from "../views/Photography";

export default {
  components: { Profile, Portfolio, About, Contact, Photography },
};
</script>
