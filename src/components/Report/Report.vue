<template>
  <div>
    <v-container>
      <v-col cols="6">
        <v-text-field v-model="name" label="Preferred Name"></v-text-field>
        <v-text-field v-model="age" label="Age"></v-text-field>
        <v-text-field v-model="location" label="Location"></v-text-field>
        <span :key="item.index" v-for="item in area">
          <h4 class="map">
            <i>{{ item.street }},{{ item.region }} , {{ item.country }}</i>
          </h4>
        </span>
        <v-btn @click="getLocation">Your approximate Location</v-btn>
        <v-text-field v-model="contact" label="Contact"></v-text-field>
        <h6 class="gen">Gender</h6>
        <input type="radio" id="male" v-model="gender" value="male" />
        <label for="male">Male</label><br />
        <input type="radio" id="female" v-model="gender" value="female" />
        <label for="female">Female</label><br />
        <input type="radio" id="other" v-model="gender" value="other" />
        <label for="other">Other</label>
        <h6 class="gen">Type of violence</h6>
        <input type="checkbox" id="physical" name="physical" value="violence" />
        <label for="vehicle1">Physical</label><br />
        <input type="checkbox" id="sexual" name="sexual" value="violence" />
        <label for="vehicle2"> Sexual</label><br />
        <input
          type="checkbox"
          id="Psychological"
          name="psychological"
          value="violence"
        />
        <label for="vehicle3"> psychological</label><br />
        <input
          type="checkbox"
          id="economical"
          name="economical"
          value="violence"
        />
        <label for="vehicle3"> Economical</label>
        <h6>
          Access information on the types of violence
          <a target="_blank" href="https://www.eac.int/gender/gbv/forms-of-gbv"
            >here</a
          >
        </h6>
        <textarea
          rows="4"
          cols="50"
          v-model="message"
          placeholder="Briefly describe the type of  violence you have been facing"
        ></textarea>
        <v-checkbox
          v-model="agree"
          label="Agree to submit the information"
        ></v-checkbox>
        <button @click="postDetails">Submit</button>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase.js";
export default {
  name: "Report",
  data() {
    return {
      name: "",
      age: "",
      location: "",
      gender: "",
      contact: "",
      agree: false,
      violence: [],
      test: true,
      message: "",
      area: [],
    };
  },
  computed: {
    clearVictim() {
      return ([
        this.name,
        this.age,
        this.location,
        this.gender,
        this.contact,
        this.violence,
        this.message,
      ] = "");
    },
  },
  methods: {
    postDetails() {
      const obj = {
        name: this.name,
        age: this.age,
        location: this.location,
        gender: this.gender,
        contact: this.contact,
        violence: this.violence,
        message: this.message,
      };
      db.ref("victim-reports")
        .push()
        .set(obj)
        .then(this.clearVictim());
    },
    getLocation() {
      const points = [];
      this.area = points;
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        fetch(`https://geocode.xyz/${lat},${long}?json=1 `)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            console.log(data.region, data.country);
            const area = [
              {
                region: data.region,
                country: data.country,
                street: data.poi.addr_street,
              },
            ];
            area.forEach((val) => {
              points.push({
                region: val.region,
                country: val.country,
                street: val.street,
              });
            });

            console.log("Ndio hawa makeng'ethe", points);

            // // area.forEach((val) => {
            // //   points.push({

            // //   });
            // // });
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.gen {
  color: black;
}
button {
  color: white;
  background: green;
  padding: 4px;
  border-radius: 10px 0px;
  border-style: solid;
}
button:hover {
  background: blue;
}
textarea {
  border: 2px solid green;
}
.map {
  color: red;
}
.report {
  text-align: center;
}
</style>
