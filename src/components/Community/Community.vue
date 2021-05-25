<template>
  <div>
    <h4>Leave a comment in our anonymous community</h4>
    <v-container class="d-lg-flex justify-space-between">
      <v-container
        ><v-row>
          <v-container>
            <v-textarea
              v-model="text"
              outlined
              name="input-7-1"
              value="Leave a comment"
            ></v-textarea
            ><button @click="postData" class="sub">Submit</button>
            <h5 v-if="toggle">{{ message }}</h5></v-container
          ></v-row
        ></v-container
      >
      <v-container class="ml-5">
        <v-card
          :key="item.index"
          v-for="item of comment"
          height="120"
          width="300"
          color="#FFFF00"
        >
          <h5 class="an">
            <u>
              <i>anonymous_{{ item.index }}</i>
            </u>
          </h5>
          <h5 class="an">{{ item.comment }}</h5>
        </v-card></v-container
      >
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase.js";
export default {
  name: "Community",
  data() {
    return {
      text: "",
      toggle: false,
      comment: [],
      message: "Thank you for your participation!!!",
    };
  },
  computed: {},
  methods: {
    async postData() {
      await db
        .ref("comments")
        .push()
        .set({ comment: this.text })
        .then((this.text = ""))
        .then((this.toggle = !this.toggle));
    },
    async getData() {
      await db
        .ref("comments")
        .get()
        .then((snapshot) => {
          const data = snapshot.val();
          const values = Object.values(data);

          const text = [];
          values.forEach((val, index) => {
            text.unshift({
              index: index,
              comment: val.comment,
            });
          });
          this.comment = text;
        });
    },
  },
  created() {
    this.getData();
  },
  updated() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.sub {
  background-color: purple;
  color: white;
  border-radius: 4px 2px;
  padding: 5px;
  margin-left: 30px;
}
.an {
  color: purple;
}
</style>
