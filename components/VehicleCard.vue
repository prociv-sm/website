<template>
  <v-card>
    <v-img height="200px" :src="getImgUrl(vehicle.image)"> </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ vehicle.name }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        flat
        nuxt
        :to="'/vehicles/' + vehicle.name.toLowerCase()"
        color="orange"
        >Informazioni
      </v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(name) {
      if (!name) {
        return require("~/assets/img/mitsubishi.jpg");
      } else {
        return require("~/assets/img/" + name);
      }
    }
  }
};
</script>
