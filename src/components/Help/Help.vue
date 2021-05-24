<template>
  <div>
    <v-container
      ><div class="group">
        <v-row>
          <v-card
            rounded=""
            v-for="shrink in shrinks"
            :key="shrink.key"
            height="400"
            width="300"
            color="#800080"
            outlined
            id="card"
          >
            <v-container class="d-flex justify-space-evenly"
              ><h2 class="text">{{ shrink.name }}</h2>
              <img
                height="80"
                width="80"
                class="pic"
                src="@/assets/icon.jpg"
                alt=""
              />
            </v-container>
            <v-container>
              <h4 class="text">{{ shrink.title }}</h4>
              <h6 class="text">{{ shrink.description }}</h6>
              <i
                ><h6 class="loc">
                  <u>{{ shrink.location }}</u>
                </h6></i
              >
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Open Dialog
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="Legal first name*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="Legal middle name"
                              hint="example of helper text only on focus"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="Legal last name*"
                              hint="example of persistent helper text"
                              persistent-hint
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Email*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Password*"
                              type="password"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select
                              :items="['0-17', '18-29', '30-54', '54+']"
                              label="Age*"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-autocomplete
                              :items="[
                                'Skiing',
                                'Ice hockey',
                                'Soccer',
                                'Basketball',
                                'Hockey',
                                'Reading',
                                'Writing',
                                'Coding',
                                'Basejump',
                              ]"
                              label="Interests"
                              multiple
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-container>
          </v-card>
        </v-row>
      </div>
    </v-container>
    <!-- <h4>Access more help <a href="">here</a></h4> -->
  </div>
</template>

<script>
export default {
  name: "Help",
  data: () => {
    return {
      dialog: false,
      shrinks: [
        {
          key: 1,
          name: "Fartun Abdi ",
          title: "Psychologist",
          description:
            "An experienced, competent and compassionate child psychotherapist working predo…",
          location: "Mombasa",
          pic: "@/assets/lambert.png",
        },
        {
          key: 2,
          name: "Jullie Otieno",
          title: "Psychologist",
          location: "Kisumu",
          description:
            "An experienced psychotherapist,focused on building a therapeutic relations.....",
          pic: "@/assets/lambert.png",
        },
        {
          key: 3,
          name: "Joyce Kariuki",
          title: "counsellor",
          location: "Thika, Nairobi",
          description:
            "An experienced, competent and compassionate counselor, dealing with anxiety, depression, addiction.....",
          pic: "@/assets/lambert.png",
        },
        {
          key: 4,
          name: "Pauline Wanje",
          title: "Family Therapist",
          location: "Kiambu, Ruiru",
          description:
            "An experienced Marriage & Family therapist with clinical psychology skills with over....",
          pic: "@/assets/lambert.png",
        },
        {
          key: 5,
          name: "Jane Wekesa",
          title: "counsellor",
          location: "Webuye, Western Province",
          description:
            "I am a licensed counselling psychologist with a practising experience of 7 year...",
          pic: "@/assets/lambert.png",
        },
        {
          key: 6,
          name: "Sophie Muriuki",
          title: "Psychologist (clinical)",
          location: "Lavington, Nairobi",
          description:
            "A competent Clinical Psychologist working with both children and adults across a range of psyc",
          pic: "@/assets/lambert.png",
        },
      ],
      images: [{ pic: "@/assets/lambert.png" }],
    };
  },
};
</script>

<style lang="scss" scoped>
#inner {
  border: 1px solid black;
}

#outer {
  border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
}
.text {
  color: rgb(255, 255, 255);
}
.pic {
  border: 2px solid rgb(238, 237, 237);
  border-radius: 100%;
  padding: 10px;
  margin-left: 40px;
}
#card {
  margin-right: 10px;
  margin-top: 10px;
}
.loc {
  color: rgb(165, 236, 165);
}
.group {
  margin-left: 80px;
}
</style>
