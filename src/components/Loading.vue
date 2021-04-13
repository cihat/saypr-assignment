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
    }, 1500);
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
  height: 300vh;
  width: 100vw;
  background-color: white;
  position: absolute;
  z-index: 1;
  padding-top: 250px;
  div {
    margin: auto;
    height: 25vh;
    width: 25vw;
  }
}
</style>