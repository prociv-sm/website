<template>
  <v-container v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="display-1 text-uppercase">Mezzi Operativi</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <template v-if="!showVehicle">
        <v-flex v-for="(vehicle, i) in vehicles" :key="i" sm12 mb6 lg6>
          <vehicle-card :vehicle="vehicle" />
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import VehicleCard from "../components/VehicleCard";
import vehicleList from "@/data/vehicles";
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
    VehicleCard
  },
  data() {
    return {
      showVehicle: false,
      vehicles: vehicleList.vehicle
    };
  }
};
</script>
