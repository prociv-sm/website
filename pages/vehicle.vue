<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="display-1 text-uppercase">Mezzi Operativi</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <loader v-if="loading"></loader>
      <template v-if="!showVehicle & !loading">
        <v-flex v-for="(vehicle, i) in vehicles" :key="i" sm12 mb6 lg6>
          <vehicle-card :index="i" :vehicle="vehicle" />
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import VehicleCard from "../components/vehicles/VehicleCard";
import Loader from "../components/Loader";
import axios from "axios";
export default {
  head: {
    title: "Mezzi Operativi",
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
    VehicleCard,
    Loader
  },
  data() {
    return {
      showVehicle: false,
      vehicles: [],
      loading: true,
      labels: {
        keyInformation: {
          bodyType: "Tipo di veicolo",
          fuelType: "Tipo di carburante",
          mileage: "Chilometraggio",
          transmission: "Trasmissione",
          year: "Anno di immatricolazione",
          euro: "Classe ambientale del mezzo"
        },
        performance: {
          enginePower: "",
          engineSize: ""
        },
        vehicleDescription: {
          colour: "Colore",
          fuelCapacity: "Capacità di carburante",
          seats: "Posti a sedere"
        }
      }
    };
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      axios
        .get(this.$axios.defaults.baseURL + "/vehicles.json")
        .then(response => {
          this.vehicles = response.data;
          this.loading = false;
        });
    }
  }
};
</script>
