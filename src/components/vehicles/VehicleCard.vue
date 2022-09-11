<template>
  <v-card class="card" outlined>
    <v-img height="250" :src="getImgUrl(vehicle.image)" />
    <v-card-actions>
      {{ vehicle.title }} {{ vehicle.model }}
      <v-spacer />
      <v-btn
        icon
        @click="showVehicle = !showVehicle"
      >
        <v-icon>{{ showVehicle ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="showVehicle">
        <v-divider />
        <v-card-text>
          <span><strong>{{ $t('vehicles.details.model') }}:</strong> {{ vehicle.model }} </span> <br>
          <span><strong>{{ $t('vehicles.details.brand') }}:</strong> {{ vehicle.title }} </span> <br>
          <span><strong>{{ $t('vehicles.details.productionYear') }}:</strong> {{ vehicle.keyInformation ? vehicle.keyInformation.year : 'Non noto' }} </span> <br>
          <span><strong>{{ $t('vehicles.details.mileage') }}:</strong> {{ vehicle.keyInformation ? vehicle.keyInformation.mileage : 'Non noto' }} </span> <br>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showVehicle: false
    }
  },
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(name) {
      if (!name) {
        return require("~/assets/img/activity.jpg");
      } else {
        return require("~/assets/img/vehicles/" + name);
      }
    }
  }
};
</script>

<style>
.card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 3px 6px 0 rgba(75, 74, 74, 0.79),
    0 -3px 6px 0 rgba(75, 74, 74, 0.79),
    3px 0 6px 0 rgba(75, 74, 74, 0.79),
    -3px 0 6px 0 rgba(75, 74, 74, 0.79);
}
</style>
