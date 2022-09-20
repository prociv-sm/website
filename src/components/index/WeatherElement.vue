<template>
  <!--TODO: DA TERMINARE-->
  <v-list-tile :key="eventName">
    <v-list-tile-content>
      <v-list-tile-title>{{ eventName }}</v-list-tile-title>
      <v-list-tile-sub-title>
        <template v-if="weatherInfoLoader">
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
      <fa-icon color="gray" :icon="['fa', 'broadcast-tower']"></fa-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    eventName: {
      type: String,
      required: true
    },
    eventData: {
      type: Object,
      required: true
    }
  }
};
</script>
