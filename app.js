const app = Vue.createApp({
  // data as function that returns object
  data() {
    return {
      firstName: "Cody",
      email: "cody@mail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const response = await fetch("https://randomuser.me/api");
      //destructuring to pull results from json response
      const { results } = await response.json();

      //console.log(results);

      this.firstName = results[0].name.first;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});
// us id selector to mount app in index.html
app.mount("#app");
