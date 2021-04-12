<script>
import User from "../components/User";
export default {
  name: "Home",
  components: {
    User,
  },
};
</script>

<template>
  <div id="home">
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
  </div>
</template>

<style lang="scss" scoped>
#home {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
</style>