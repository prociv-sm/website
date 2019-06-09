<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="display-1 text-uppercase">Mezzi Operativi</h2>
      </v-flex>
      <template v-if="!showVehicle">
        <v-flex v-for="(vehicle, i) in vehicles" :key="i" xm6>
          <vehicle-card :vehicle="vehicle" />
        </v-flex>
      </template>
      <template v-else>
        <h1>ciao</h1>
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
