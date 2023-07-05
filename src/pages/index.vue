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
              {{ $t('operations.turnation.active') }}
            </h3>
            <v-row
              align="center"
              no-gutters
            >
              <v-col class="grow">
                {{ $t('operations.turnation.description') }}
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
import SEO from '@/mixins/SEO'
import { isWeekend } from "date-fns";

export default {
  mixins: [SEO],
  data: () => ({
    operations: [],
    loading: true,
    alerts: {
      hydro: {},
      storm: {},
      geo: {}
    },
    seo: {
      title: 'Homepage',
      type: 'website',
      image: process.env.BASE_URL + "/meta/homepage.jpg",
      published: '2023-03-01T10:00:00Z',
      modified: '2023-03-01T10:00:00Z',
    },
  }),
  components: { OperationsList, WeatherAlert },
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
