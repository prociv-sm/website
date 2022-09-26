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
          <operations-list :operations="operations" :loading="loading" />
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
          <WeatherAlert :alerts="alerts" :loading="loading" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import WeatherAlert from "../components/index/WeatherAlert";
import OperationsList from "@/components/operations/OperationsList";
import { isWeekend } from "date-fns";

export default {
  head() {
    return {
      title: "Homepage",
      meta:[
        { hid: 'og:title', name: "og:title", content: "Homepage" },
        { hid: 'og:description', name: "og:description", content: "Sito web della protezione civile di Settimo Milanese" },
        { hid: 'og:type', name: "og:type", content: "website" },
        { hid: 'og:url', name: "og:url", content: process.env.BASE_URL },
        { hid: 'og:image', name: "og:image", content: process.env.BASE_URL + "/meta/homepage.jpg" },

        // twitter card
        { hid: "twitter:title", name: "twitter:title", content: process.env.BASE_URL + "/meta/homepage.jpg"},
        { hid: "twitter:url", name: "twitter:url", content: process.env.BASE_URL },
        { hid: 'twitter:description', name: 'twitter:description', content: "Sito web della protezione civile di Settimo Milanese" },
        { hid: "twitter:image", name: "twitter:image", content: process.env.BASE_URL + "/meta/homepage.jpg"},
      ],
      link: [
        { hid: "canonical", rel: "canonical", href: process.env.BASE_URL },
      ]
    }
  },
  components: { OperationsList, WeatherAlert },
  data() {
    return {
      operations: [],
      loading: true,
      alerts: {
        hydro: {},
        storm: {},
        geo: {}
      }
    };
  },
  async created() {
    await this.fetchData();
    await this.requestStormAlert();
    await this.requestHydroAlert();
    await this.requestGeoAlert();
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
        .get('/api/v1/activities?take=5')
        .then(response => {
          this.operations = response.data;
          this.loading = false;
        });
    },
    async requestStormAlert() {
      this.$axios
        .get('/api/v1/alerts/Lomb-1/storm')
        .then(response => {
          this.alerts.storm = response.data;
          this.loading = false;
        });
    },
    async requestHydroAlert() {
      this.$axios
        .get('/api/v1/alerts/Lomb-1/hydro')
        .then(response => {
          this.alerts.hydro = response.data;
          this.loading = false;
        });
    },
    async requestGeoAlert() {
      this.$axios
        .get('/api/v1/alerts/Lomb-1/geo')
        .then(response => {
          this.alerts.geo = response.data;
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
