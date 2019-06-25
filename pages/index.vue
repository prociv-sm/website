<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-toolbar style="background-color: transparent; box-shadow: none;">
        <v-toolbar-title>Benvenuto!</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>-->
      </v-toolbar>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-alert type="info" value="true">
          Questo sito è attualmente in sviluppo, le informazioni riportate
          potrebbero non essere corrette!
        </v-alert>
      </v-flex>
      <v-flex xs12 md7 lg7>
        <p>placeholder</p>
      </v-flex>
      <v-flex xs12 md5 lg5>
        <v-card>
          <v-card-title primary-title style="padding-bottom: 2px;">
            <div>
              <div
                class="headline"
                title="Previsioni del Dipartimento Protezione Civile - Bollettini di criticità"
              >
                Allerte
              </div>
            </div>
          </v-card-title>
          <v-card-text style="padding: 2px 9px;">
            <v-list>
              <v-list-tile v-for="item in items" :key="item.risk">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.risk }}</v-list-tile-title>
                  <v-list-tile-sub-title>
                    <template v-if="hydro">
                      <v-progress-linear
                        style="height: 4px;"
                        :indeterminate="true"
                      ></v-progress-linear>
                    </template>
                    <template v-else>
                      {{ item.info }}
                    </template>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action :title="item.info">
                  <fa-icon
                    color="gray"
                    :icon="['fa', 'broadcast-tower']"
                  ></fa-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card-text>
          <v-card-actions style="padding-top: 2px;">
            <v-btn flat block color="primary" nuxt to="/weatherAlert"
              >Dettagli</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

const weatherAPI =
  "https://cors-anywhere.herokuapp.com/http://www.protezionecivilepop.tk/allerte?citta=015211&rischio=PARAMS&formato=json";

export default {
  head: {
    title: "Home",
    meta: [
      // Open Graph
      { name: "og:title", content: "this.head.title " },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      {
        name: "og:url",
        content: "https://protezionecivile-settimomilanese.it"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  },
  data() {
    return {
      hydro: null,
      geo: null,
      storm: null,
      items: [
        {
          risk: "Idraulico",
          data: "hydro"
        },
        {
          risk: "Idrogeologico",
          data: "geo"
        },
        {
          risk: "Temporali",
          data: "storm"
        }
      ]
    };
  },
  async mounted() {
    this.getHydroWeatherAlert();
    this.getGeoWeatherAlert();
    this.getStormWeatherAlert();
  },
  methods: {
    async getHydroWeatherAlert() {
      axios.get(weatherAPI.replace("PARAMS", "idraulico")).then(response => {
        this.hydro = response.data.previsione;
      });
    },
    async getGeoWeatherAlert() {
      axios
        .get(weatherAPI.replace("PARAMS", "idrogeologico"))
        .then(response => {
          this.geo = response.data.previsione;
        });
    },
    async getStormWeatherAlert() {
      axios.get(weatherAPI.replace("PARAMS", "temporali")).then(response => {
        this.storm = response.data.previsione;
      });
    }
  }
};
</script>

<style scoped>
.headline {
  padding-bottom: 2%;
}
.info {
  background-color: #2196f3 !important;
}
</style>
