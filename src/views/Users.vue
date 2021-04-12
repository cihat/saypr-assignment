<script>
import User from "../components/User";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      users: {},
      userName: "",
    };
  },
  components: {
    User,
  },
  async mounted() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<template>
  <div id="home">
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <User :data="users[index]" :userName="users[index].name" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#home {
  ul {
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}
</style>