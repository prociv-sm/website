<template>
  <v-card>
    <v-img
      height="200px"
      aspect-ratio="16/9"
      src="https://comune.settimomilanese.mi.it/wp-content/uploads/2018/02/comune1-300x225.jpg"
    >
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          {{ activity.title }}
        </div>
        <p v-html="activity.text"></p>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-layout align-center justify-end>
        <fa-icon
          class="mr-1"
          color="gray"
          :icon="['fa', 'calendar']"
          title="Data dell'attività"
        ></fa-icon>
        <span class="subheading mr-2">{{ activity.eventDate }}</span>
        <span class="mr-1">·</span>
        <fa-icon
          class="mr-1"
          color="gray"
          :icon="['fa', 'clock']"
          title="Ora dell'attività"
        ></fa-icon>
        <span class="subheading">{{ activity.eventTime }}</span>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    activity: {
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

<style>
.v-image__image {
  background-position: inherit;
}
</style>
