<template>
  <!--[if lte IE 9]>
    <p class="browserupgrade">
      You are using an <strong>outdated</strong> browser. Please
      <a href="https://browsehappy.com/">upgrade your browser</a> to improve
      your experience and security.
    </p>
  <![endif]-->

  <v-app>
    <NavMenu />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavMenu from "~/layouts/shared/navbar.vue";
export default {
  components: {
    NavMenu
  },
  head: {
    titleTemplate: "%s - Nuxt.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ]
  }
};
</script>

<style>
main {
  background: #c0c0c0;
}
</style>
