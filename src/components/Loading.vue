<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  async created() {
    await setTimeout(() => {
      this.show = false;
    }, 1000);
  },
};
</script>

<template>
  <div id="loading" v-if="show">
    <div class="sk-circle-fade">
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
    </div>
  </div>
</template>
<style lang="scss">
#loading {
  height: 100vh;
  width: 100vw;
  background-color: white;
  position: absolute;
  z-index: 1;
  padding-top: 100px;
  div {
    margin: auto;
    height: 15vh;
    width: 15vw;
  }
}
</style>