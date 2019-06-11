<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="display-1 text-uppercase">Attività</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <template>
        <v-flex v-for="(activity, i) in activityList" :key="i" sm12 mb12 lg12>
          <activity-card :activity="activity" />
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import activityList from "@/data/activity";
import ActivityCard from "../components/ActivityCard";
export default {
  head: {
    title: "Attività",
    meta: [
      // Open Graph
      { name: "og:title", content: "this.head.title " },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://nuxtjs.org" },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  },
  components: {
    ActivityCard
  },
  data() {
    return {
      activityList: activityList.activity
    };
  }
};
</script>
