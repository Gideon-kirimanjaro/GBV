<template>
  <div>
    <v-container id="outer">
      <div id="inner">
        <v-col cols="6">
          <v-text-field
            v-model="name"
            label="Preferred Name"
            required
          ></v-text-field>
          <v-text-field v-model="age" label="Age" required></v-text-field>
          <v-text-field
            v-model="contact"
            label="Contact"
            required
          ></v-text-field>
          <v-text-field
            v-model="location"
            label="Location"
            required
          ></v-text-field>
          <span :key="item.index" v-for="item in area">
            <h4 class="map">
              <i>{{ item.street }},{{ item.region }} , {{ item.country }}</i>
            </h4>
          </span>
          <v-btn @click="getLocation">Your approximate Location</v-btn>

          <h6 class="gen">Gender</h6>
          <input type="radio" id="male" v-model="gender" value="male" />
          <label for="male">Male</label><br />
          <input type="radio" id="female" v-model="gender" value="female" />
          <label for="female">Female</label><br />
          <input type="radio" id="other" v-model="gender" value="other" />
          <label for="other">Other</label>
          <h6 class="gen">Type of violence</h6>
          <input
            type="checkbox"
            id="physical"
            name="physical"
            value="violence"
          />
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
          <h6 class="gen">
            Access information on the types of violence
            <a
              target="_blank"
              href="https://www.eac.int/gender/gbv/forms-of-gbv"
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
            v-model="isActive"
            label="Agree to submit the information"
          ></v-checkbox>
          <div>
            <v-btn :disabled="emptyFields" @click="postDetails">
              Submit
            </v-btn>
            <h5 class="red" v-if="emptyFields">Fill out all fields</h5>
          </div>

          <h4 v-if="text">{{ thank }}</h4>
        </v-col>
      </div></v-container
    >
  </div>
</template>

<script>
import db from "@/firebase.js";
export default {
  name: "Report",
  data() {
    return {
      isActive: false,
      name: "",
      age: "",
      location: "",
      gender: "",
      contact: "",
      violence: [],
      text: false,
      message: "",
      area: [],
      thank: "Thank you for your submission!!",
    };
  },
  computed: {
    toggle() {
      return this.isActive == !this.isActive;
    },
    emptyFields() {
      return (
        this.name == "", this.age == "", this.location == "", this.contact == ""
      );
    },
  },

  methods: {
    async postDetails() {
      const obj = {
        name: this.name,
        age: this.age,
        location: this.location,
        gender: this.gender,
        contact: this.contact,
        violence: this.violence,
        message: this.message,
        text: true,
      };
      await db
        .ref("victim-reports")
        .push()
        .set(obj)
        .then(
          ((this.name = ""),
          (this.age = ""),
          (this.location = ""),
          (this.gender = ""),
          (this.contact = ""),
          (this.violence = ""),
          (this.message = ""))
        )
        .then((this.text = !this.text));
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
                street: data.staddress,
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
#outer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px;
}
#inner {
  padding: 5px;
}
.red {
  color: red;
}
</style>
