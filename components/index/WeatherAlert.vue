<template>
  <v-card>
    <!--TODO: MIGLIORARE GESTIONE CON COMPONENTE-->
    <v-card-title primary-title style="padding-bottom: 2px;">
      <div>
        <div
          class="headline"
          title="Previsioni del Dipartimento Protezione Civile - Bollettini di criticità"
        >
          Allerte attive
        </div>
      </div>
    </v-card-title>
    <v-card-text style="padding: 2px 9px;">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Idraulico</v-list-item-title>
            <v-list-item-subtitle>
              <template v-if="weatherInfoLoader">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ weatherInfo.hydro.info }}
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon v-if="weatherInfoLoader" color="gray">mdi-radio-tower</v-icon>
            <v-icon v-else :color="setColor(weatherInfo.hydro.alert)">mdi-radio-tower</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Idrogeologico</v-list-item-title>
            <v-list-item-subtitle>
              <template v-if="weatherInfoLoader">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ weatherInfo.geo.info }}
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon v-if="weatherInfoLoader" color="gray">mdi-radio-tower</v-icon>
            <v-icon v-else :color="setColor(weatherInfo.geo.alert)">mdi-radio-tower</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Temporali</v-list-item-title>
            <v-list-item-subtitle>
              <template v-if="weatherInfoLoader">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ weatherInfo.storm.info }}
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon v-if="weatherInfoLoader" color="gray">mdi-radio-tower</v-icon>
            <v-icon v-else :color="setColor(weatherInfo.storm.alert)">mdi-radio-tower</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions style="padding-top: 2px;">
      <v-btn block to="/weatherAlertInfo">
        Canale Telegram
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      weatherInfo: {
        hydro: {
          alert: "green",
          info: "Nessuna allerta attiva"
        },
        storm: {
          alert: "green",
          info: "Nessuna allerta attiva"
        },
        geo: {
          alert: "green",
          info: "Nessuna allerta attiva"
        }
      },
      weatherInfoLoader: false
    };
  },
  methods: {
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
