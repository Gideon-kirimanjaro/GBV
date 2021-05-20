<template>
  <div>
    <Nav />
  </div>
</template>

<script>
import Nav from "../src/components/Navbar/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
* {
  font-family: "Montserrat";
  src: url("./assets/Font/Montserrat-Bold.ttf");
}
</style>
