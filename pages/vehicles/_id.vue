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
                <h4 class="title">KeyInformation</h4>
                <vehicle-info-list
                  :vehicle-info="vehicle.keyInformation"
                  vehicle-info-props="keyInformation"
                ></vehicle-info-list>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import Loader from "../../components/Loader";
import VehicleInfoList from "../../components/vehicles/VehicleInfoList";
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
    Loader,
    VehicleInfoList
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
