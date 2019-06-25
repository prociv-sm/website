<template>
  <v-layout align-center justify-end>
    <v-chip v-if="author" title="Autore dell'articolo">
      <v-avatar>
        <fa-icon color="gray" :icon="['fa', 'user']"></fa-icon>
      </v-avatar>
      {{ author }}
    </v-chip>
    <v-chip v-if="eventDate" title="Data dell'attività">
      <v-avatar>
        <fa-icon color="gray" :icon="['fa', 'calendar']"></fa-icon>
      </v-avatar>
      {{ eventDate }}
    </v-chip>
    <v-chip v-if="eventTime" title="Ora di inizio e termine dell'attività">
      <v-avatar>
        <fa-icon color="gray" :icon="['fa', 'clock']"></fa-icon>
      </v-avatar>
      {{ eventTime }}
    </v-chip>
  </v-layout>
</template>

<script>
export default {
  props: {
    eventDate: {
      type: String,
      required: true
    },
    eventTime: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.v-chip {
  border-radius: 0;
  background-color: #f0ecec !important;
}
</style>
