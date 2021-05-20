<template>
  <div>
    <v-container class="d-md-flex justify-space-around">
      <img height="400" width="400" src="@/assets/hand.jpg" alt="" />
      <v-container class="d-flex align-center mt-md-5">
        <h5 class="text-center mt-md-5 ">
          This is an app dedicated to helping victims of Gender-Based Violence.
          It provides a safe space for reporting incidences, seeking
          professional help and overall information on gender-based violence All
          data is protected with the highest anonymity.
        </h5></v-container
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      pics: [{ first: "@/assets/hand.jpg" }],
    };
  },
};
</script>

<style lang="scss" scoped></style>
