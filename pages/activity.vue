<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-toolbar style="background-color: transparent; box-shadow: none;">
        <v-toolbar-title>Attività sul territorio</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>-->
      </v-toolbar>
    </v-layout>
    <v-layout row wrap>
      <loader v-if="loading"></loader>
      <template v-else-if="!loading">
        <v-flex v-for="(activity, i) in activities" :key="i" sm12 mb12 lg12>
          <activity-card :activity="activity" :index="i"></activity-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import Loader from "../components/Loader";
import axios from "axios";
import ActivityCard from "../components/activity/ActivityCard";
export default {
  head: {
    title: "Attività",
    meta: [
      { name: "og:title", content: "Lista delle attività" },
      {
        name: "og:description",
        content:
          "La lista delle attività svolte dal gruppo di protezione civile"
      },
      { name: "og:type", content: "website" },
      {
        name: "og:url",
        content: "https://protezionecivile-settimomilanese.it/activity"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  },
  components: {
    ActivityCard,
    Loader
  },
  data() {
    return {
      activities: [],
      loading: true
    };
  },
  async created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      axios
        .get(
          this.$axios.defaults.baseURL + '/activities.json?orderBy="eventDate"'
        )
        .then(response => {
          this.activities = response.data;
          this.loading = false;
        });
    }
  }
};
</script>
