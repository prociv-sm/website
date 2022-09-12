<template>
  <div>
    <v-container class="py-2 py-lg-4">
      <v-row dense>
        <v-col cols="12" sm="12" md="8" lg="8">
          <v-alert
            v-if="turnationIsActive"
            border="left"
            colored-border
            type="success"
          >
            <h3 class="text-h5">
              Turnazione settimanale attiva
            </h3>
            <v-row
              align="center"
              no-gutters
            >
              <v-col class="grow">
                Squadra in sede dal Lunedì al Venerdì dalle 21:00 alle 24:00
              </v-col>
            </v-row>
          </v-alert>
          <activity-list :activities="activities" />
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card class="mb-2">
            <v-card-title primary-title class="pb-2">
              <div>
                <div
                  class="headline"
                >
                  In caso di emergenza
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="text-center" style="color: #d80f16">
                <v-icon size="30" class="pb-2" color="#d80f16">mdi-phone</v-icon> <span style="font-size: 45px;" class="pr-2">112</span>
              </div>
            </v-card-text>
          </v-card>
          <WeatherAlert />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import WeatherAlert from "../components/index/WeatherAlert";
import ActivityCard from "../components/activity/ActivityCard";
import Loader from "../components/Loader";
import axios from "axios";
import ActivityList from "@/components/activity/ActivityList";
import { getDay, isWeekend } from "date-fns";

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
  components: { ActivityList, WeatherAlert, ActivityCard },
  data() {
    return {
      activities: [],
      loading: true
    };
  },
  async created() {
    await this.fetchData();
  },
  computed: {
    turnationIsActive() {
      const weekend = isWeekend(new Date());
      return !weekend;

    }
  },
  methods: {
    async fetchData() {
      this.$axios
        .get('http://localhost:8080/api/v1/activities?take=5')
        .then(response => {
          this.activities = response.data;
          this.loading = false;
        });
    }
  }
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