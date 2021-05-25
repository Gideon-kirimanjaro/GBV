<template>
  <div>
    <v-card>
      <h2 id="title" class="text-sm-center mt-3 ">GBV REACH</h2>
      <h2 id="icon" class="text-sm-center ">
        <v-icon>mdi-mother-heart</v-icon>
      </h2>

      <v-toolbar flat>
        <template v-slot:extension>
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tabs-slider></v-tabs-slider>
            <v-tab :key="head" v-for="head in headers"
              ><h5 class="headings">{{ head }}</h5></v-tab
            >
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-card-text> <About /></v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text> <Report /> </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <Help />
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Community />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <div class="footer">
        all rights reserved &copy; Gideon Kirimanjaro 2021
      </div>
    </v-card>
  </div>
</template>

<script>
import About from "../About/About";
import Report from "../Report/Report";
import Help from "../Help/Help";
import Community from "../Community/Community";
export default {
  name: "Nav",
  components: { About, Report, Help, Community },

  data() {
    return {
      tabs: null,
      headers: ["About", "Report", "Help", "Community"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
.head {
  color: chocolate;
}
#icon {
  font-size: 20px;
}
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;

  color: rgb(63, 19, 19);
  text-align: center;
}
#title {
  color: rgb(3, 3, 3);
}
.headings {
  color: green;
}
</style>
