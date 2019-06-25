<template>
  <v-card>
    <!--TODO: MIGLIORARE GESTIONE CON COMPONENTE-->
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
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Idraulico</v-list-tile-title>
            <v-list-tile-sub-title>
              <template v-if="weatherInfoLoader">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ weatherInfo.hydro.info }}
              </template>
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <fa-icon
              v-if="weatherInfoLoader"
              color="gray"
              :icon="['fa', 'broadcast-tower']"
            ></fa-icon>
            <fa-icon
              v-else
              :color="setColor(weatherInfo.hydro.alert)"
              :icon="['fa', 'broadcast-tower']"
            ></fa-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Idrogeologico</v-list-tile-title>
            <v-list-tile-sub-title>
              <template v-if="weatherInfoLoader">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ weatherInfo.geo.info }}
              </template>
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <fa-icon
              v-if="weatherInfoLoader"
              color="gray"
              :icon="['fa', 'broadcast-tower']"
            ></fa-icon>
            <fa-icon
              v-else
              :color="setColor(weatherInfo.geo.alert)"
              :icon="['fa', 'broadcast-tower']"
            ></fa-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Temporali</v-list-tile-title>
            <v-list-tile-sub-title>
              <template v-if="weatherInfoLoader">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ weatherInfo.storm.info }}
              </template>
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <fa-icon
              v-if="weatherInfoLoader"
              color="gray"
              :icon="['fa', 'broadcast-tower']"
            ></fa-icon>
            <fa-icon
              v-else
              :color="setColor(weatherInfo.storm.alert)"
              :icon="['fa', 'broadcast-tower']"
            ></fa-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card-text>
    <v-card-actions style="padding-top: 2px;">
      <v-btn flat block color="primary" nuxt to="/weatherAlertInfo"
        >Dettagli</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

const weatherAPI =
  "https://cors-anywhere.herokuapp.com/http://www.protezionecivilepop.tk/allerte?citta=015211&rischio=PARAMS&formato=json";
export default {
  data() {
    return {
      weatherInfo: {},
      weatherInfoLoader: true
    };
  },
  async mounted() {
    this.getWeatherInfoAlert();
  },
  methods: {
    async getWeatherInfoAlert() {
      let [hydro, geo, storm] = await Promise.all([
        axios.get(weatherAPI.replace("PARAMS", "idraulico")),
        axios.get(weatherAPI.replace("PARAMS", "idrogeologico")),
        axios.get(weatherAPI.replace("PARAMS", "temporali"))
      ]);
      this.weatherInfoLoader = false;
      return (this.weatherInfo = {
        hydro: hydro.data.previsione,
        geo: geo.data.previsione,
        storm: storm.data.previsione
      });
    },
    setColor(color) {
      if (color === "GIALLA") {
        return "yellow";
      } else if (color === "ARANCIONE") {
        return "orange";
      } else if (color === "ROSSA") {
        return "red";
      } else {
        return "green";
      }
    }
  }
};
</script>
