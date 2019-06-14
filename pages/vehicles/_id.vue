<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <loader v-if="loading"></loader>
      <template v-else>
        <v-flex sm12 md12 lg12>
          <v-card>
            <v-layout row wrap>
              <v-flex sm12 md4 lg4>
                <v-carousel hide-delimiters>
                  <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                  ></v-carousel-item>
                </v-carousel>
              </v-flex>
              <v-flex sm12 md8 lg8>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title class="subheading">
                      Distanza percorsa
                    </v-list-tile-title>
                    <v-list-tile-sub-title class="body-2 text--gray">
                      4535345 Km
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
              </v-flex>
            </v-layout>
            <!--<v-layout row wrap>
              <v-flex sm12 md4 lg4>
                <v-card>
                  <v-img
                    aspect-ratio="1.7"
                    :src="getImgUrl(vehicle.image)"
                  ></v-img>
                </v-card>
              </v-flex>
              <v-flex sm12 md8 lg8>
                <v-card>
                  <v-card-title v-if="vehicle.keyInformation" primary-title>
                    <div>
                      <div class="headline">Informazioni chiave</div>
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
                    </div>
                  </v-card-title>
                  <v-card-title v-if="vehicle.performance" primary-title>
                    <div>
                      <div class="headline">Performance</div>
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
                    </div>
                  </v-card-title>
                  <v-card-title v-if="vehicle.vehicleDescription" primary-title>
                    <div>
                      <div class="headline">Descrizione</div>
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
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>-->
          </v-card>
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
      loading: true,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    getImgUrl(image) {
      if (!image) {
        return require("~/assets/img/activity.jpg");
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
