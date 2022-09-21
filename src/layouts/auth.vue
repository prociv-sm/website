<template>
  <!--[if lte IE 9]>
  <p class="browserupgrade">
  You are using an <strong>outdated</strong> browser. Please
  <a href="https://browsehappy.com/">upgrade your browser</a> to improve
  your experience and security.
  </p>
  <![endif]-->

  <v-app>
    <div class="d-flex text-center flex-column flex-md-row flex-grow-1 bg">
      <div class="pa-2 pa-md-4 flex-grow-1 align-center justify-center d-flex flex-column">
        <div class="layout-content ma-auto w-full">
          <snakbar-message />
          <nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import SnakbarMessage from "@/components/common/SnakbarMessage";
export default {
  name: "auth",
  components: { SnakbarMessage }
};
</script>

<style scoped>
.layout-content {
  max-width: 480px;
}
.bg {
  background: #544d4d url("../assets/img/reportage_car.webp") no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.layout-side {
  width: 420px;
}
.layout-content {
  max-width: 480px;
}
</style>
