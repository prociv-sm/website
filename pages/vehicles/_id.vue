<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <loader v-if="loading"></loader>
      <template v-else>
        <v-flex sm12 md4 lg4>
          <v-card>
            <v-img aspect-ratio="1.7" :src="getImgUrl(vehicle.image)"></v-img>
          </v-card>
        </v-flex>
        <v-flex sm12 md8 lg8>
          <h4>Informazioni chiave</h4>
          <ul>
            <li>
              <strong>Anno:</strong>
              {{ vehicle.keyInformation.year }}
            </li>
            <li>
              <strong>Trasmissione:</strong>
              {{ vehicle.keyInformation.transmission }}
            </li>
            <li>
              <strong>Chilometraggio:</strong>
              {{ vehicle.keyInformation.mileage }}
            </li>
            <li>
              <strong>Tipo di carburante:</strong>
              {{ vehicle.keyInformation.fuelType }}
            </li>
            <li>
              <strong>Tipologia di veicolo:</strong>
              {{ vehicle.keyInformation.bodyType }}
            </li>
          </ul>
          <h4>Performance</h4>
          <ul>
            <li>
              <strong>Potenza del motore:</strong>
              {{ vehicle.performance.enginePower }}
            </li>
            <li>
              <strong>Cavalli:</strong>
              {{ vehicle.performance.engineSize }}
            </li>
            <li>
              <strong>Euro:</strong>
              {{ vehicle.runningCost.euro }}
            </li>
          </ul>
          <h4>Descrizione</h4>
          <ul>
            <li>
              <strong>Colore:</strong>
              {{ vehicle.vehicleDescription.colour }}
            </li>
            <li>
              <strong>Capacità abitacolo:</strong>
              {{ vehicle.vehicleDescription.seats }}
            </li>
            <li>
              <strong>Capacità:</strong>
              {{ vehicle.vehicleDescription.fuelCapacity }}
            </li>
          </ul>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import Loader from "../../components/Loader";
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
    Loader
  },
  data() {
    return {
      vehicle: {},
      loading: true
    };
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    getImgUrl(image) {
      if (!image) {
        return require("~/assets/img/mitsubishi.jpg");
      } else {
        return require("~/assets/img/" + image);
      }
    },
    async fetchData() {
      axios
        .get(
          this.$axios.defaults.baseURL +
            "/vehicles/" +
            this.$route.params.id +
            ".json"
        )
        .then(response => {
          this.vehicle = response.data;
          this.loading = false;
        });
    }
  }
};
</script>
