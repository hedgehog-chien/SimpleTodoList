<template>
  <div>
    <HeaderComponent />
    <SideNav />
    <router-view />
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: { SideNav, HeaderComponent },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
