<template>
  <v-card nuxt :to="'/vehicles/' + index">
    <v-img height="200px" aspect-ratio="16/9" :src="getImgUrl(vehicle.image)">
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          {{ vehicle.title }} <small>{{ vehicle.model }}</small>
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat nuxt :to="'/vehicles/' + vehicle.code" color="primary"
        >Informazioni
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
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

<style>
.v-image__image {
  background-position: inherit;
}
</style>
