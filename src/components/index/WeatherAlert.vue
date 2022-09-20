<template>
  <v-card>
    <v-card-title primary-title style="padding-bottom: 2px;">
      <div>
        <div
          class="headline"
          title="Previsioni del Dipartimento Protezione Civile - Bollettini di criticità"
        >
          <v-icon v-if="alertPresent" color="red" size="30" class="mb-1">mdi-alert</v-icon>
          {{ $t('alerts.active') }}
        </div>
      </div>
    </v-card-title>
    <v-card-text style="padding: 2px 9px;">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ $t('alerts.type.hydro') }}</v-list-item-title>
            <v-list-item-subtitle>
              <template v-if="loading">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ translateAlertSeverity(alerts.hydro.severity) }}
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon v-if="loading" color="gray">mdi-radio-tower</v-icon>
            <v-icon v-else :color="findSeverity(alerts.hydro.severity)">mdi-radio-tower</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ $t('alerts.type.geo') }}</v-list-item-title>
            <v-list-item-subtitle>
              <template v-if="loading">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ translateAlertSeverity(alerts.geo.severity) }}
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon v-if="loading" color="gray">mdi-radio-tower</v-icon>
            <v-icon v-else :color="findSeverity(alerts.geo.severity)">mdi-radio-tower</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ $t('alerts.type.storm') }}</v-list-item-title>
            <v-list-item-subtitle>
              <template v-if="loading">
                <v-progress-linear
                  style="height: 4px;"
                  :indeterminate="true"
                ></v-progress-linear>
              </template>
              <template v-else>
                {{ translateAlertSeverity(alerts.storm.severity) }}
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon v-if="loading" color="gray">mdi-radio-tower</v-icon>
            <v-icon v-else :color="findSeverity(alerts.storm.severity)">mdi-radio-tower</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions class="text-center">
      <small>Codice allerta regionale attiva {{ bullettinCode }}</small>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    alerts: {
      type: Object,
      default: () => {
        return {
          hydro: {},
          storm: {},
          geo: {}
        };
      }
    }
  },
  computed: {
    bullettinCode() {
      return this.alerts.hydro.identifier || this.alerts.storm.identifier || this.alerts.geo.identifier;
    },
    alertPresent() {
      return this.alerts.hydro.severity || this.alerts.storm.severity || this.alerts.geo.severity;
    }
  },
  methods: {
    translateAlertSeverity(severity) {
      if (severity) {
        return this.$t('alerts.severity.' + severity.toLowerCase());
      }
      return this.$t('alerts.severity.none');
    },
    findSeverity(severity) {
      switch (severity) {
        case "Moderate":
          return "orange";
        case "Severe":
          return "red";
        default:
          return "green";
      }
    }
  }
};
</script>
