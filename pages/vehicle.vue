<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-toolbar style="background-color: transparent; box-shadow: none;">
        <v-toolbar-title>Mezzi Operativi</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>-->
      </v-toolbar>
    </v-layout>
    <v-layout wrap row>
      <v-flex xs10 offset-xs1 pb-4>
        <div class="text-xs-center">
          <v-btn-toggle
            v-model="selectedFilter"
            @change="checkFilter(selectedFilter)"
          >
            <v-btn flat value="car">
              Off-Road
            </v-btn>
            <v-btn flat value="truck">
              Furgoni
            </v-btn>
            <v-btn flat value="all">
              Tutti
            </v-btn>
          </v-btn-toggle>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <loader v-if="loading"></loader>
      <template v-if="!showVehicle & !loading">
        <v-flex
          v-for="(vehicle, i) in vehicles"
          :key="i"
          xs12
          sm12
          mb12
          lg6
          xl4
        >
          <vehicle-card :index="i" :vehicle="vehicle" />
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import VehicleCard from "../components/vehicles/VehicleCard";
import Loader from "../components/Loader";
export default {
  head: {
    title: "Mezzi Operativi",
    meta: [
      // Open Graph
      { name: "og:title", content: "this.head.title " },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      {
        name: "og:url",
        content: "https://protezionecivile-settimomilanese.it/vehicles"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  },
  components: {
    VehicleCard,
    Loader
  },
  data() {
    return {
      selectedFilter: "all",
      showVehicle: false,
      vehicles: [],
      loading: true
    };
  },
  computed: {
    all() {
      return this.$store.getters.all;
    },
    car() {
      return this.$store.getters.car;
    },
    truck() {
      return this.$store.getters.truck;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.vehicles = this.all;
      this.loading = false;
    },
    checkFilter(selectedFilter) {
      this.loading = true;
      this.vehicles = [];
      if (selectedFilter === "car") {
        this.vehicles = this.car;
        this.loading = false;
      } else if (selectedFilter === "truck") {
        this.vehicles = this.truck;
        this.loading = false;
      } else {
        this.vehicles = this.all;
        this.loading = false;
      }
    }
  }
};
</script>
