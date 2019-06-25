<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-toolbar style="background-color: transparent; box-shadow: none;">
        <v-toolbar-title>Benvenuto!</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>-->
      </v-toolbar>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-alert type="info" value="true">
          Questo sito è attualmente in sviluppo, le informazioni riportate
          potrebbero non essere corrette!
        </v-alert>
      </v-flex>
      <v-flex xs12 md7 lg7>
        <p>placeholder</p>
      </v-flex>
      <v-flex xs12 md5 lg5>
        <WeatherAlert></WeatherAlert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WeatherAlert from "../components/index/WeatherAlert";

export default {
  head: {
    title: "Home",
    meta: [
      // Open Graph
      { name: "og:title", content: "this.head.title " },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      {
        name: "og:url",
        content: "https://protezionecivile-settimomilanese.it"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  },
  components: { WeatherAlert }
};
</script>

<style scoped>
.headline {
  padding-bottom: 2%;
}
.info {
  background-color: #2196f3 !important;
}
</style>
