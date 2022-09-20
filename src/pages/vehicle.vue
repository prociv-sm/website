<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="menu.vehicles" title='Mezzi Operativi' class="mb-2">
        <template #button>
          <v-spacer />
          <v-btn-toggle
            v-model="selectedFilter"
            @change="filterByType(selectedFilter)"
            borderless
          >
            <v-btn value="car">
              <span class="hidden-sm-and-down mr-1">{{ $t('vehicles.type.offroad') }}</span>
              <v-icon>mdi-car-estate</v-icon>
            </v-btn>
            <v-btn value="truck">
              <span class="hidden-sm-and-down mr-1">{{ $t('vehicles.type.truck') }}</span>
              <v-icon>mdi-truck</v-icon>
            </v-btn>
            <v-btn value="trailer">
              <span class="hidden-sm-and-down mr-1">{{ $t('vehicles.type.trailer') }}</span>
              <v-icon>mdi-truck-trailer</v-icon>
            </v-btn>
            <v-btn value="all">
              <span class="hidden-sm-and-down mr-1">{{ $t('vehicles.type.all') }}</span>
              <v-icon>mdi-car-3-plus</v-icon>
            </v-btn>
          </v-btn-toggle>
        </template>
      </page-title>
      <!-- Vehicles list -->
      <div class="flex-grow-1 min-w-0">
        <template v-if="loading">
          <v-row>
            <v-col v-for="n in 4" :key="n" cols="12" md="6" lg="6" xl="6">
              <v-skeleton-loader class="mx-auto" type="image, list-item-avatar-three-line" />
            </v-col>
          </v-row>
        </template>
        <v-data-iterator
          v-else
          :loading="loading"
          :items="vehicles"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :footer-props="{
            showFirstLastPage: true,
            showCurrentPage: true,
            'items-per-page-options': [20, -1]
          }"
        >
          <template #no-data>
            <v-alert
              border="left"
              colored-border
              type="info"
            >
              {{ $t('vehicles.noData') }}
            </v-alert>
          </template>
          <template #default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.id"
                cols="12"
                sm="6"
                md="6"
                lg="6"
                xl="6"
              >
                <vehicle-card :vehicle="item"/>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </div>
    </v-container>
  </div>
</template>

<script>
import VehicleCard from "../components/vehicles/VehicleCard";
import PageTitle from "@/components/common/PageTitle";
export default {
  components: {
    PageTitle,
    VehicleCard
  },
  head: {
    title: "Veicoli",
    meta: [
      // Open Graph
      { name: "og:title", content: "Veicoli" },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://procivsettimomi.it" },
      { name: "og:image", content: "/assets/img/activity.jpg" },
    ]
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 24,
      selectedFilter: "all",
      showVehicle: false,
      vehicles: [],
      loading: true,
      type: '',
      toggle_none: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.$axios
        .get('http://localhost:8080/api/v1/vehicles')
        .then(response => {
          this.vehicles = response.data;
          this.loading = false;
        });
    },
    async filterByType(type) {
      this.loading = true;
      this.type = type;
      if(type === 'all') {
        await this.fetchData();
      } else {
        this.$axios
          .get('http://localhost:8080/api/v1/vehicles?type=' + this.type)
          .then(response => {
            this.vehicles = response.data;
            this.loading = false;
          });
      }
    },
  }
};
</script>
