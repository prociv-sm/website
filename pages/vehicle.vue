<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="display-1 text-uppercase">Mezzi Operativi</h3>
      </v-flex>
      <v-flex v-for="(vehicle, i) in vehicles" :key="i" xs6>
        <vehicle-card :vehicle="vehicle" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VehicleCard from "../components/VehicleCard";
export default {
  head: {
    title: "Mezzi Operativi",
    meta: [
      // Open Graph
      { name: "og:title", content: this.head.title },
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
      vehicles: [
        {
          name: "Mitsubishi",
          description: "",
          keyInformation: {
            year: "2000",
            bodyType: "Pick Up",
            mileage: "118,590 Km",
            transmission: "Manual",
            fuelType: "Diesel"
          },
          runningCost: {
            euro: "Euro 2"
          },
          performance: {
            enginePower: "113 hp",
            engineSize: "2477 cc"
          },
          vehicleDescription: {
            seats: 5,
            colour: "white",
            fuelCapacity: "75 litres"
          },
          image: "mitsubishi.jpg"
        }
      ]
    };
  }
};
</script>
