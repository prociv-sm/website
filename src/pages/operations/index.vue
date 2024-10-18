<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="operations.title" title='Attività' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <template v-if="loading">
          <v-row dense>
            <v-col v-for="n in 4" :key="n" cols="12" md="3" lg="3" xl="3">
              <v-skeleton-loader class="mx-auto" type="list-item-avatar-three-line" />
            </v-col>
            <v-col v-for="(n, i) in 4" :key="i + 'bottom'" cols="12" md="12" lg="12" xl="12">
              <v-skeleton-loader class="mx-auto" type="list-item-avatar-three-line" />
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <v-row dense>
            <v-col
              v-for="stat in stats"
              :key="stat.type"
              cols="12"
              xs="3"
              sm="6"
              md="3"
              lg="3"
            >
              <operation-stat-card :activity="stat" />
            </v-col>
          </v-row>
          <v-divider class="mt-2" />
          <v-data-iterator
            class="mt-2"
            :items="activities"
            :items-per-page="itemsPerPage"
            :page.sync="page"
            :loading="loading"
            :footer-props="{
              showFirstLastPage: true,
              showCurrentPage: true,
              'items-per-page-options': [20, { text: $t('common.all'), value: -1 }]
            }"
            >
            <template #no-data>
              <v-alert
                border="left"
                colored-border
                type="info"
              >
                {{ $t('operations.noData') }}
              </v-alert>
            </template>
            <template v-slot:default="{ items }">
              <v-row dense>
                <v-col
                  v-for="activity in items"
                  :key="activity.id"
                  cols="12"
                  md="12"
                  lg="12"
                >
                  <operation-card :activity="activity" />
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
import OperationCard from "@/components/operations/OperationCard";
import PageTitle from "@/components/common/PageTitle";
import OperationStatCard from "@/components/operations/OperationStatCard";
export default {
  head: {
    title: "Interventi",
    meta: [
      // Open Graph
      { name: "og:title", content: "Interventi" },
      { name: "og:description", content: "Gli interventi della protezione civile di Settimo Milanese" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://procivsettimomi.it" },
      { name: "og:image", content: "/images/snow.jpg" },
    ]
  },
  components: {
    OperationStatCard,
    PageTitle,
    OperationCard
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
        .get('/v1/activities')
        .then(response => {
          this.activities = response.data;
          this.loading = false;
        });
    },
    async getStats() {
      this.$axios
        .get('/v1/activities/statistics')
        .then(response => {
          this.stats = response.data;
        });
    }
  }
};
</script>
