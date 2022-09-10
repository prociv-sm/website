<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="menu.activity" title='Attività' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <template v-if="loading">
          <v-row>
            <v-col v-for="n in 12" :key="n" cols="12" md="4" lg="4" xl="4">
              <v-skeleton-loader class="mx-auto" type="image, list-item-avatar-three-line" />
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <v-row dense>
            <v-col
              v-for="stat in stats"
              :key="stat.type"
              cols="12"
              md="3"
              lg="3"
            >
              <stats-card :activity="stat" />
            </v-col>
          </v-row>
          <v-divider class="mt-2" />
          <v-data-iterator
            class="mt-2"
            :items="activities"
            :items-per-page="itemsPerPage"
            :page.sync="page"
            :loading="loading"
            :loading-text="$t('common.loading')"
            :no-data-text="$t('common.noData')"
            :no-results-text="$t('common.noResults')"
            :footer-props="{
              showFirstLastPage: true,
              showCurrentPage: true,
              'items-per-page-options': [20, { text: $t('common.all'), value: -1 }]
            }"
            >
            <template v-slot:default="{ items }">
              <v-row dense>
                <v-col
                  v-for="activity in items"
                  :key="activity.id"
                  cols="12"
                  md="12"
                  lg="12"
                >
                  <activity-card :activity="activity" />
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </template>
      </div>
    </v-container>
  </div>
</template>

<script>
import Loader from "../components/Loader";
import ActivityCard from "../components/activity/ActivityCard";
import PageTitle from "@/components/common/PageTitle";
import StatsCard from "@/components/activity/StatsCard";
export default {
  head: {
    title: "Interventi",
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
    StatsCard,
    PageTitle,
    ActivityCard,
    Loader
  },
  data() {
    return {
      activities: [],
      stats: {},
      loading: true,
      page: 1,
      itemsPerPage: 24
    };
  },
  async created() {
    await this.fetchData();
    await this.getStats();
  },
  methods: {
    async fetchData() {
      this.$axios
        .get('http://localhost:8080/api/v1/activities')
        .then(response => {
          this.activities = response.data;
          this.loading = false;
        });
    },
    async getStats() {
      this.$axios
        .get('http://localhost:8080/api/v1/activities/statistics')
        .then(response => {
          this.stats = response.data;
        });
    }
  }
};
</script>
