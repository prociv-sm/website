<template>
  <v-list>
    <template v-for="(vehicleProp, i) in vehicleInfo">
      <v-list-tile :key="i">
        <v-list-tile-content>
          <v-list-tile-title class="subheading">
            {{ composeLabels(i) }}
          </v-list-tile-title>
          <v-list-tile-sub-title class="body-2 text--gray">
            {{ vehicleProp }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider :key="vehicleProp"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    vehicleInfo: {
      required: true,
      type: Object
    },
    vehicleInfoProps: {
      type: String,
      required: true
    }
  },
  data() {
    return {
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
  methods: {
    composeLabels(element) {
      return element;
    }
  }
};
</script>
