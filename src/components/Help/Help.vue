<template>
  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
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

              <h4 class="text">
                Contact:
                <h5>+{{ shrink.contact }}</h5>
              </h4>
              <a class="text" target="_blank" :href="shrink.profile"
                >view Profile</a
              >
            </v-container>
          </v-card>
          <h4 class="help">
            Find more counsellors
            <a
              target="_blank"
              href="https://www.therapyroute.com/therapists/kenya/1"
              >here</a
            >
          </h4>
        </v-row>
      </div>
    </v-container>
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
          contact: 254746735543,
          profile:
            "https://www.therapyroute.com/therapist/fartun-abdi-abdille-mombasa-ke",
          description:
            "An experienced, competent and compassionate child psychotherapist working predo…",
          location: "Mombasa",
          pic: "@/assets/lambert.png",
        },
        {
          key: 2,
          name: "Jullie Otieno",
          title: "Psychologist",
          contact: 254775895096,
          profile:
            "https://www.therapyroute.com/therapist/jullie-otieno-kisumu-ke",
          location: "Kisumu",
          description:
            "An experienced psychotherapist,focused on building a therapeutic relations.....",
          pic: "@/assets/lambert.png",
        },
        {
          key: 3,
          name: "Joyce Kariuki",
          title: "counsellor",
          contact: 254790537020,
          profile:
            "https://www.therapyroute.com/therapist/joyce-kariuki-nairobi-ke",
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
          contact: 254722416885,
          profile:
            "https://www.therapyroute.com/therapist/pauline-wanje-ruiru-ke",
          description:
            "An experienced Marriage & Family therapist with clinical psychology skills with over....",
          pic: "@/assets/lambert.png",
        },
        {
          key: 5,
          name: "Jane Wekesa",
          title: "counsellor",
          contact: 254724281144,
          profile:
            "https://www.therapyroute.com/therapist/jane-wekesa-webuye-ke",
          location: "Webuye, Western Province",
          description:
            "I am a licensed counselling psychologist with a practising experience of 7 year...",
          pic: "@/assets/lambert.png",
        },
        {
          key: 6,
          name: "Sophie Muriuki",
          title: "Psychologist (clinical)",
          contact: 254712445339,
          profile:
            "https://www.therapyroute.com/therapist/sophie-muriuki-nairobi-ke",
          location: "Lavington, Nairobi",
          description:
            "A competent Clinical Psychologist working with both children and adults across a range of psyc",
          pic: "@/assets/lambert.png",
        },
      ],
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
  margin-left: 10px;
}
.help {
  margin-top: 30px;
  margin-bottom: 80px;
  margin-left: 100px;
}
</style>
